<template>
  <main dir="ltr" id="main" class="article-main container py-md-5 py-3">
    <header v-if="data.article" class="article-header mb-3">
      <div class="img-cont mb-3">
        <!-- Add Bootstrap class for responsive image -->
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
    <hr />
    <section class="article-section row g-5">
      <!-- Add responsive classes for grid columns -->
      <aside class="col-12 col-lg-3">
        <div class="toc">
          <Toc :links="data.article.body.toc.links" />
        </div>
      </aside>
      <!-- Add responsive classes for grid columns -->
      <article class="article col-12 col-lg-9 mt-2">
        <ContentRenderer dir="auto" class="blog-text" :value="data.article">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>
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
::v-deep .article-main {
  font-family: 'Georgia', serif !important;
}

::v-deep .article-header {
  margin-bottom: 2rem;
}

::v-deep .article-header h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: left;
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
  height: auto;
  object-fit: cover;
  display: none !important;
}

::v-deep .article-section {
  margin-top: 2rem;
}

::v-deep .toc {
  position: -webkit-sticky;
  position: sticky;
  top: 1rem;
}

::v-deep .blog-text {
  font-family: Arial, Helvetica, sans-serif;
  color: #334155 !important;
  line-height: 1.4;
  font-size: 1.2rem;
}

::v-deep .blog-text h1 {
  font-size: 1.7rem !important;
  margin-top: 1.4em !important;
  margin-bottom: 1.4em !important;
  font-weight: bold !important;
  color: #0f172a !important;
}

::v-deep .blog-text h2 {
  font-size: 1.4rem !important;
  font-weight: bold !important;
}

::v-deep .blog-text h3 {
  font-size: 1.3rem !important;
  font-weight: bold !important;
}

::v-deep .blog-text h4,
::v-deep .blog-text h5,
::v-deep .blog-text h6 {
  font-size: 1.2rem;
  font-weight: bold !important;
}

::v-deep .blog-text p {
  margin-bottom: 1.5em;
}

::v-deep .blog-text a {
  color: #0f172a !important;
  text-decoration: none !important;
}

::v-deep .blog-text ul,
::v-deep .blog-text ol {
  padding-left: 40px;
}

::v-deep .blog-text li {
  margin-bottom: 1em;
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
    font-size: 3rem;
  }

  ::v-deep .article-header .lead {
    font-size: 1.5rem;
  }
}

@media (min-width: 1200px) {
  ::v-deep .article-header h1 {
    font-size: 3.5rem;
  }

  ::v-deep .article-header .lead {
    font-size: 1.6rem;
  }
}
</style>
