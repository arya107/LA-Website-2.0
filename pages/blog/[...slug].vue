<!-- ./pages/blog/[…slug.vue] -->

<template>
  <main id="main" class="article-main">
    <header v-if="data.article" class="article-header">
      <div class="img-cont mb-3">
        <img
          :src="`/${data.article.img}`"
          :alt="data.article.title"
          class="rounded"
        />
      </div>
      <h1 class="display-3">{{ data.article.title }}</h1>
      <p class="lead">{{ data.article.description }}</p>
      <ul class="article-tags list-unstyled">
        <li class="tag" v-for="(tag, n) in data.article.tags" :key="n">
          {{ tag }}
        </li>
      </ul>
    </header>
    <hr />
    <section class="article-section row">
      <aside class="aside col-12 col-md-3">
        <!-- Toc Component -->
        <Toc :links="data.article.body.toc.links" />
      </aside>
      <article class="article col-12 col-md-9">
        <!-- render document coming from query -->
        <ContentRenderer :value="data.article">
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

<style scoped>
.article-main {
  padding: 1.5rem;
  max-width: 64rem; /* Approx 5xl in Tailwind */
  margin: 0 auto;
}

.article-header {
  padding: 1.5rem;
  padding-bottom: 3rem;
}

.img-cont {
  height: 18rem; /* Approx 72 in Tailwind */
}

.img-cont img {
  border-radius: 1rem; /* Approx 2xl in Tailwind */
}

.article-section {
  position: relative;
}

.aside {
  padding-top: 3.5rem;
  position: sticky;
  top: 5rem; /* Approx top-20 in Tailwind */
}

.article {
  padding: 1.5rem;
  max-width: 48rem; /* Approx 3xl in Tailwind */
  margin: 0 auto;
}
</style>
