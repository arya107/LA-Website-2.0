<!-- ./pages/blog/[…slug.vue] -->

<template>
  <main id="main" class="article-main">
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
      <aside class="toc col-12 col-md-3">
        <!-- Toc Component -->
        <Toc :links="data.article.body.toc.links" />
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
.article-main {
  padding: 1.5rem;
  max-width: 64rem; /* Approx 5xl in Tailwind */
  margin: 0 auto;
}

.article-header {
  font-size: 2rem !important;
  padding: 1.5rem;
  padding-bottom: 3rem;
}

.article-image {
  height: 200px;
}

.pill {
  display: inline-block;
  padding: 0.7em 1em;
  margin: 0 0 8px 8px !important;
  font-size: 0.8rem;
  line-height: 1;

  background-color: #fbbc39;
  border: 1px solid #e6ad33;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 5px !important;
  font-family: Helvetica, Arial, sans-serif !important;
}

.pill:hover {
  color: #fff !important;
  background-color: #027fc2;
}

.img-cont img {
  border-radius: 1rem; /* Approx 2xl in Tailwind */
}

.article-section {
  position: relative;
}

.TOC {
  /* padding-top: 3.5rem !important; */
  position: sticky !important;
  top: 20px !important;
}

.article {
  padding: 1.5rem;
  max-width: 48rem; /* Approx 3xl in Tailwind */
  margin: 0 auto;
}

.blog-text {
  // color: #1a1a1a !important;
  font-family: IranSans !important;
  font-size: 1.15rem !important;
  line-height: 2em !important;
}

::v-deep h1 a {
  font-family: IranSansBold !important;
  font-size: 1.6rem !important;
  padding: 2rem 0 !important;
  text-decoration: none !important;
  cursor: default !important;
}

::v-deep h2 a {
  font-family: IranSansBold !important;
  font-size: 1.4rem !important;
  padding: 2rem 0 4rem 0 !important;
  text-decoration: none !important;
  cursor: default !important;
}

::v-deep h3 a {
  font-family: IranSansBold !important;
  font-size: 1.2rem !important;
  padding: 2rem 0 3rem 0 !important;
  text-decoration: none !important;
  cursor: default !important;
}
</style>
