<!-- ./pages/blog/[…slug.vue] -->

<template>
  <main dir="ltr" id="main" class="article-main container py-5">
    <header v-if="data.article" class="article-header">
      <div class="img-cont mb-3">
        <img
          :src="`/${data.article.img}`"
          :alt="data.article.title"
          class="rounded article-image"
        />
      </div>
      <h1 class="">{{ data.article.title }}</h1>
      <p class="lead">{{ data.article.description }}</p>
      <span class="pill" v-for="(tag, n) in data.article.tags" :key="n">
        {{ tag }}
      </span>
    </header>
    <hr />
    <section class="article-section row g-5">
      <aside class="col-12 col-md-3">
        <!-- Toc Component -->
        <div class="toc">
          <Toc :links="data.article.body.toc.links" />
        </div>
      </aside>

      <article class="article col-12 col-md-9">
        <!-- render document coming from query -->
        <ContentRenderer dir="auto" class="blog-text" :value="data.article">
          <!-- render rich text from document
        <MarkdownRenderer :value="data.article" /> -->

          <!-- display if document content is empty -->
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </article>
    </section>

    <!-- PrevNext Component -->
    <PrevNext :prev="prev" :next="next" />
  </main>
</template>

<script setup>
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let article = queryContent().where({ _path: path }).findOne();
  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent()
    .only(['_path', 'title', 'description'])
    .sort({ date: 1 })
    .findSurround(path);

  return {
    article: await article,
    surround: await surround,
  };
});

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;
console.log({ data, prev, next });

// set the meta
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
  margin-bottom: 2rem !important;
}

::v-deep .article-header h1 {
  font-size: 2rem !important;
  margin-bottom: 1rem !important;
  text-align: left !important;
}

::v-deep .article-header .lead {
  font-size: 1.2rem !important;
  margin-bottom: 1rem !important;
}

::v-deep .pill {
  display: inline-block !important;
  padding: 0.2em 0.6em 0.3em !important;
  font-size: 75% !important;
  font-weight: 700 !important;
  line-height: 1 !important;
  color: #000 !important;
  text-align: center !important;
  white-space: nowrap !important;
  vertical-align: baseline !important;
  border-radius: 0.25rem !important;
  background-color: #ddd !important;
  margin-right: 0.375rem !important;
  margin-bottom: 0.375rem !important;
}

// ::v-deep .article-image {
//   width: 100% !important;
//   height: auto !important;
// }

::v-deep .article-image {
  width: 400px !important; /* adjust as necessary */
  height: 300px !important; /* adjust as necessary */
  object-fit: cover !important;
}

::v-deep .article-section {
  margin-top: 2rem !important;
}

::v-deep .toc {
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 1rem !important;
}

::v-deep .blog-text {
  // font-family: 'Georgia', serif !important;
  font-family: Arial, Helvetica, sans-serif !important;
  color: #333 !important;
  line-height: 1.4 !important;
  font-size: 1.2rem !important;
}

::v-deep .blog-text h1,
::v-deep .blog-text h2,
::v-deep .blog-text h3,
::v-deep .blog-text h4,
::v-deep .blog-text h5,
::v-deep .blog-text h6 {
  margin-top: 1.4em !important;
  margin-bottom: 1.4em !important;
  font-weight: bold !important;
}

::v-deep .blog-text p {
  margin-bottom: 1.5em !important;
}

::v-deep .blog-text a {
  color: #1a0dab !important;
  text-decoration: underline !important;
}

::v-deep .blog-text ul,
::v-deep .blog-text ol {
  padding-left: 40px !important;
}

::v-deep .blog-text li {
  margin-bottom: 1em !important;
}

@media (min-width: 992px) {
  ::v-deep .article-header h1 {
    font-size: 3.5rem !important;
  }

  ::v-deep .article-header .lead {
    font-size: 1.5rem !important;
  }
}

// ::v-deep .blog-text {

//   font-family: sans-serif, Arial, Helvetica !important;
//   font-size: 1.2rem !important;
//   line-height: 2em !important;
// }

// ::v-deep h1 a {
//   font-family: IranSansBold !important;
//   font-size: 1.6rem !important;
//   padding: 2rem 0 !important;
//   text-decoration: none !important;
//   cursor: default !important;
// }

// ::v-deep h2 a {
//   font-family: IranSansBold !important;
//   font-size: 1.4rem !important;
//   padding: 2rem 0 4rem 0 !important;
//   text-decoration: none !important;
//   cursor: default !important;
// }

// ::v-deep h3 a {
//   font-family: IranSansBold !important;
//   font-size: 1.2rem !important;
//   padding: 2rem 0 3rem 0 !important;
//   text-decoration: none !important;
//   cursor: default !important;
// }
</style>
