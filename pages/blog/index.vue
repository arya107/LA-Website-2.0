<!-- ./pages/blog/index.vue -->

<template>
  <main class="page">
    <div class="hero container">
      <h1 class="page-title">
        مقالات آموزشی
        <span class="page-subtitle"
          >مقالات به‌روز و کاربردی برای افزایش سطح دانش شما.</span
        >
      </h1>
    </div>

    <section class="page-section">
      <Tags />

      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', 'tags', '_path', 'img'],
          where: {
            tags: {
              $contains: filter,
            },
          },
          $sensitivity: 'base',
        }"
      >
        <template v-slot="{ list }">
          <ul class="list-unstyled mt-4 container">
            <li
              v-for="article in list"
              :key="article._path"
              class="single-article"
            >
              <NuxtLink :to="article._path">
                <div class="container">
                  <div class="row">
                    <div class="col-2">
                      <img
                        :src="`/${article.img}`"
                        :alt="article.title"
                        class="article-img"
                      />
                    </div>

                    <div class="col-10">
                      <header>
                        <h1 class="article-title">{{ article.title }}</h1>
                        <p class="article-desc">{{ article.description }}</p>
                        <span
                          class="article-tags"
                          v-for="(tag, n) in article.tags"
                          :key="n"
                        >
                          {{ tag }}
                        </span>
                      </header>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </template>

        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  key: (route) => route.fullPath,
});

// get tag query
const {
  query: { tags },
} = useRoute();

const filter = ref(tags?.split(','));

// set meta for page
useHead({
  title: 'All articles',
  meta: [
    { name: 'description', content: "Here's a list of all my great articles" },
  ],
});
</script>

<style lang="scss" scoped>
.page {
  background-color: var(--hero-bg) !important;
  padding-bottom: 2em;
}

.single-article {
  margin-bottom: 1em !important;
  padding: 20px;
  background-color: #e2e8f0;
  border: 1px solid #cbd5e1;
  border-radius: 15px;
  text-align: right !important;
  direction: ltr !important;
  font-family: IranSans !important;
  text-decoration: none !important;

  a {
    text-decoration: none !important;
  }

  .article-img {
    width: 80px !important;
  }
  .article-title {
    // font-family: IranSansBold !important;
    font-family: 'Playfair Display', Georgia, 'Times New Roman', serif !important;
    font-size: 1.4rem !important;
    text-decoration: none !important;
    color: #2d2d2d;

    &:hover {
      text-decoration: underline !important;
    }
  }

  .article-tags {
    cursor: pointer;
    border-radius: 1.5rem;
    border-width: 1px;
    border-color: rgb(208 205 255 / 1);
    background-color: #4001ff !important;
    padding: 0.25rem 0.75rem;
    margin: 0 0.1rem;
    font-family: Hepta Slab, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Noto Color Emoji';
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 600;
    color: #d4c6ff !important;
  }
}

@media screen and (max-width: 768px) {
  .hero {
    min-height: 31vh;
  }

  .page-title {
    padding: 1.2em 0 0 0 !important;
    font-size: 2rem !important;

    .icon {
      font-size: 1.3em;
      padding-bottom: 0.3rem !important;
    }
  }

  .subheader {
    font-size: 1.2rem !important;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .hero {
    min-height: 31vh !important;
  }
}
</style>
