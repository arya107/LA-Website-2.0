<!-- ./pages/blog/tags/[slug].vue -->

<template>
  <main>
    <header class="page-heading">
      <div class="container">
        <h1 class="display-4 font-weight-bold">
          All articles with "{{ slug }}"
        </h1>
        <p class="font-weight-medium lead">
          Here's a list of all my great articles
        </p>
      </div>
    </header>

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
          <div class="container mt-4">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col" v-for="article in list" :key="article._path">
                <NuxtLink
                  :to="article._path"
                  class="text-decoration-none text-dark"
                >
                  <div class="card h-100">
                    <img
                      :src="`/${article.img}`"
                      :alt="article.title"
                      class="card-img-top article-img rounded img-thumbnail"
                    />
                    <div class="card-body">
                      <h5 class="card-title h2 font-weight-bold">
                        {{ article.title }}
                      </h5>
                      <p class="card-text">{{ article.description }}</p>
                      <p class="card-text">
                        <small
                          class="badge bg-primary text-white rounded-pill me-1"
                          v-for="(tag, n) in article.tags"
                          :key="n"
                        >
                          <NuxtLink
                            :to="`/blog/tags/${tag}`"
                            class="text-decoration-none text-white"
                          >
                            {{ tag }}
                          </NuxtLink>
                        </small>
                      </p>
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
// get current route
const {
  params: { slug },
} = useRoute();

const filter = slug.split(',');
// console.log({ filter });

// set meta for page
useHead({
  title: `All articles with ${slug}`,
  meta: [
    { name: 'description', content: "Here's a list of all our great articles" },
  ],
});
</script>

<style lang="scss" scoped>
// .single-article {
//   margin-bottom: 1em !important;
//   padding: 20px;
//   background-color: #e2e8f0;
//   border: 1px solid #cbd5e1;
//   border-radius: 15px;
// }

.article-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>
