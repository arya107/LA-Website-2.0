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
                    <div class="card-body">
                      <h5 class="card-title">{{ article.title }}</h5>
                      <p class="card-text">{{ article.description }}</p>
                      <div class="card-text">
                        <small
                          class="badge"
                          v-for="(tag, n) in article.tags"
                          :key="n"
                        >
                          {{ tag }}
                        </small>
                      </div>
                      <a href="#" class="stretched-link"
                        >Continue reading
                        <span>
                          <font-awesome-icon
                            :icon="['fas', 'arrow-right']"
                          /> </span
                      ></a>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- <div dir="ltr" class="container mt-4">
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
                      <p class="card__text">
                        <small
                          class="badge"
                          v-for="(tag, n) in article.tags"
                          :key="n"
                        >
                          {{ tag }}
                        </small>
                      </p>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div> -->
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
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.card {
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.3s linear;
  border: none;
  max-width: 540px;
  margin: auto;

  &:hover {
    box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.2);
  }

  .card__body {
    padding: 1.5rem;
    text-align: justify;
  }

  .card__title {
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .card__text {
    font-size: 0.875rem;
  }
}

.badge {
  font-size: 0.8rem;
  line-height: 1rem;
  color: #fff;
  border-radius: 10px;
  background-color: #4001ff;
  padding: 0.25rem 0.75rem;
  margin: 0 0.1rem 0 0;
  font-family: sans-serif, Arial, Helvetica;
  text-transform: uppercase;
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
