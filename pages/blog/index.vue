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

    <section>
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
          <div dir="ltr" class="container my-5">
            <div class="row">
              <div
                class="col-lg-4 col-md-6 col-sm-12 mb-3"
                v-for="article in list"
                :key="article._path"
              >
                <NuxtLink
                  :to="article._path"
                  class="text-decoration-none text-dark"
                >
                  <div class="card h-100">
                    <img
                      :src="`/${article.img}`"
                      :alt="article.title"
                      class="card__img blog-page__article-img"
                    />
                    <div class="card__body">
                      <h5 class="card__title">{{ article.title }}</h5>
                      <p class="card__text">{{ article.description }}</p>
                      <span class="card__tags">
                        <small
                          class="badge"
                          v-for="(tag, n) in article.tags"
                          :key="n"
                        >
                          {{ tag }}
                        </small>
                      </span>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
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
  // colorMode: 'light',
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
    { name: 'description', content: "Here's a list of all our great articles" },
  ],
});
</script>

<style lang="scss" scoped>
.page {
  min-height: calc(100vh - 7rem);
  background-color: var(--blog-bg);
  padding-bottom: 2em;
}

h1 {
  color: var(--blog-title) !important;
}

.page_title,
.page_subtitle {
  color: var(--blog-title) !important;
}

.blog-page__article-img {
  width: 100%;
  // height: 200px;
  // object-fit: cover !important;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card {
  // box-shadow: 0 4px 6px 0 rgba(151, 151, 151, 0.1);
  background-color: var(--blog-card-bg) !important;
  border-radius: 10px !important;
  transition: all 0.3s linear;
  border: none;
  max-width: 540px;
  min-height: 400px;
  position: relative !important;
  font-family: Arial, Helvetica, sans-serif !important;

  &:hover {
    box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.1);

    .card__title {
      text-decoration: underline !important;
      color: #007fc2 !important;
    }

    // .badge {
    //   border: 1px dashed #fbbc39 !important;
    // }
  }

  .card__body {
    padding: 1.2rem;
    text-align: left;
  }

  .card__title {
    font-weight: bold;
    color: var(--blog-card-title) !important;
  }

  .card__text {
    font-size: 0.95rem;
    color: var(--blog-card-text) !important;
  }

  .card__tags {
    position: absolute !important;
    bottom: 0px !important;
  }

  .badge {
    font-size: 0.8rem !important;
    color: var(--blog-tag-text) !important;
    border: 1px solid var(--blog-tag-border) !important;
    background-color: var(--blog-tag-bg) !important;
    border-radius: 5px;
    padding: 0.25rem 0.65rem;
    margin: 20px 6px 20px 0 !important;
    text-transform: uppercase;
    font-weight: bold;
  }
}

@media screen and (max-width: 768px) {
  .blog-page__hero {
    min-height: 31vh;
  }

  .blog-page__title {
    padding: 1.2em 0 0 0;
    font-size: 2rem;
  }
}

@media only screen and (min-width: 1200px) {
  .blog-page__hero {
    margin-bottom: 2em;
  }
}
</style>
