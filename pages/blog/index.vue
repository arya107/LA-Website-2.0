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
          <div dir="ltr" class="container mt-4">
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

.page_title,
.page_subtitle {
  color: var(--blog-title);
}

.blog-page__article-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card {
  box-shadow: 0 4px 6px 0 rgba(151, 151, 151, 0.1);
  border-radius: 10px !important;
  transition: all 0.3s linear;
  border: none;
  max-width: 540px;
  min-height: 350px;
  position: relative !important;
  font-family: Arial, Helvetica, sans-serif !important;

  &:hover {
    box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.1);

    .card__title {
      text-decoration: underline !important;
      color: #007fc2 !important;
    }

    .badge {
      border: 1px dashed #113bae2b !important;
    }
  }

  .card__body {
    padding: 1.5rem;
    text-align: left;
  }

  .card__title {
    font-weight: bold;
  }

  .card__text {
    font-size: 0.95rem;
  }

  .card__tags {
    position: absolute !important;
    bottom: 0px !important;
  }

  .badge {
    font-size: 0.75rem !important;
    // line-height: 1rem;
    color: #007fc2 !important;
    border-radius: 5px;
    border: 1px solid rgb(29 78 216 / 0.1) !important;
    background-color: rgb(239 246 255 / 1);
    padding: 0.25rem 0.65rem;
    margin: 20px 4px 20px 0 !important;
    text-transform: uppercase;
    font-weight: normal;
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
