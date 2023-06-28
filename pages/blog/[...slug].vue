<template>
  <main dir="ltr" id="main" class="article-main container py-md-5 py-3">
    <header v-if="data.article" class="article-header mb-3">
      <div class="img-cont mb-3">
        <img
          :src="`/${data.article.img}`"
          :alt="data.article.title"
          class="rounded img-fluid article-image"
        />
      </div>
      <h1>{{ data.article.title }}</h1>
      <p class="lead">{{ data.article.description }}</p>
      <span
        class="pill mr-2 mb-2"
        v-for="(tag, n) in data.article.tags"
        :key="n"
        >{{ tag }}</span
      >
    </header>
    <hr class="pb-5" />
    <section class="article-section row g-5">
      <article class="article col-12 col-lg-9">
        <ContentRenderer dir="auto" class="blog-text" :value="data.article">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>

      <aside class="col-12 col-lg-3">
        <div class="toc">
          <Toc :links="data.article.body.toc.links" />

          <div class="article-info-row mt-3">
            <!-- Display author name -->
            <p v-if="data.article.author" class="author">
              Author: <span>{{ data.article.author }}</span>

              <!-- <span class="icon">
                <font-awesome-icon :icon="['fas', 'id-card']" />
              </span>
              {{ data.article.author }} -->
            </p>

            <!-- Display reading time -->
            <p v-if="data.article['reading time']" class="reading-time">
              Reading Time: <span>{{ data.article['reading time'] }}</span>

              <!-- <span class="icon">
                <font-awesome-icon :icon="['fas', 'stopwatch']" />
              </span>
              {{ data.article['reading time'] }} -->
            </p>

            <!-- Display publication date -->
            <p v-if="data.article.date" class="date">
              Published on:
              <span>
                {{ new Date(data.article.date).toLocaleDateString() }}
              </span>

              <!-- <span class="icon">
                <font-awesome-icon :icon="['fas', 'calendar-alt']" />
              </span>
              {{ new Date(data.article.date).toLocaleDateString() }} -->
            </p>
          </div>
        </div>
      </aside>
    </section>
    <PrevNext :prev="prev" :next="next" />
  </main>
</template>

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  let article = queryContent().where({ _path: path }).findOne();
  let surround = queryContent()
    .only(['_path', 'title', 'description'])
    .sort({ date: 1 })
    .findSurround(path);

  return {
    article: await article,
    surround: await surround,
  };
});

const [prev, next] = data.value.surround;

useHead({
  title: data.value.article.title,
  meta: [
    { name: 'description', content: data.value.article.description },
    {
      hid: 'og:image',
      property: 'og:image',
      content: `https://site.com/${data.value.article.img}`,
    },
  ],
});
</script>

<style lang="scss" scoped>
::v-deep .article-header {
  margin-bottom: 2rem !important;
  font-family: Arial, Helvetica, sans-serif !important;
}

::v-deep .article-header h1 {
  font-size: 2rem !important;
  margin-bottom: 1rem !important;
  text-align: left !important;
  font-weight: bold !important;
}

::v-deep .article-header .lead {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

::v-deep .pill {
  display: inline-block;
  padding: 0.35em 0.6em !important;
  font-size: 0.95em !important;
  font-weight: 600 !important;
  line-height: 1;
  color: #0284c7 !important;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.375rem !important;
  border: 1px solid #bae6fd !important;
  background-color: #e0f2fe !important;
  margin-left: 6px !important;
}

::v-deep .article-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  // display: none !important;
}

::v-deep .article-info-row {
  margin-top: 4em !important;
  color: #838383 !important;
  border: 2px dashed #eaecee !important;
  border-radius: 10px !important;
  padding: 10px !important;
  text-align: left !important;
  font-size: 0.85rem !important;

  p {
    margin: 0 !important;
    padding: 5px 0 !important;
    display: flex !important;
    justify-content: space-between !important;
    text-align: left !important;
  }

  // .icon {
  //   margin-right: 1.2em !important;
  //   color: #cfcfcf !important;
  // }
}

::v-deep .article-section {
  margin-bottom: 4rem !important;
}

::v-deep .toc {
  position: -webkit-sticky;
  position: sticky;
  top: 1rem;
}

::v-deep .blog-text {
  font-family: Arial, Helvetica, sans-serif !important;
  color: #334155 !important;
  line-height: 1.7;
  font-size: 1.15rem;
}

::v-deep .blog-text h1 {
  font-size: 1.6rem !important;
  margin-bottom: 1.4em !important;
  font-weight: bold !important;
  color: #0f172a !important;
  text-decoration: underline !important;
}

::v-deep .blog-text h2 {
  font-size: 1.4rem !important;
  font-weight: bold !important;
  padding-top: 0.8em !important;
}

// ::v-deep .blog-text h3 {
//   font-size: 1.2rem !important;
//   font-weight: bold !important;
//   padding-top: 0.8em !important;
// }

::v-deep .blog-text h3,
::v-deep .blog-text h4,
::v-deep .blog-text h5,
::v-deep .blog-text h6 {
  font-size: 1.25rem !important;
  font-weight: bold !important;
}

::v-deep .blog-text p {
  margin-bottom: 1.5em;
  color: #0f172a !important;
}

::v-deep .blog-text p img {
  max-width: 60% !important;
  // text-align: center !important;
}

::v-deep .blog-text a {
  // color: #0f172a !important;
  text-decoration: none !important;
}

::v-deep .blog-text ul,
::v-deep .blog-text ol {
  padding-left: 40px !important;
}

::v-deep .blog-text li {
  margin-bottom: 1em !important;
  color: #0f172a !important;
}

@media (min-width: 576px) {
  ::v-deep .article-header h1 {
    font-size: 2.5rem;
  }

  ::v-deep .article-header .lead {
    font-size: 1.4rem;
  }
}

@media (min-width: 992px) {
  ::v-deep .article-header h1 {
    font-size: 2.6rem !important;
  }

  ::v-deep .article-header .lead {
    font-size: 1.4rem !important;
    padding-bottom: 1em !important ;
  }
}

// @media (min-width: 1200px) {
// }
</style>
