<!-- ./pages/blog/index.vue -->

<template>
  <main>
    <header class="page-heading">
      <div class="container">
        <h1 class="display-4 font-weight-bold">All articles</h1>
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
          <ul class="list-unstyled mt-4 container">
            <li
              v-for="article in list"
              :key="article._path"
              class="single-article"
            >
              <NuxtLink :to="article._path">
                <div class="container">
                  <div class="img-fluid w-25">
                    <img
                      :src="`/${article.img}`"
                      :alt="article.title"
                      class="rounded img-thumbnail"
                    />
                  </div>
                  <header>
                    <h1 class="h2 font-weight-bold">{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <ul class="list-inline">
                      <li
                        class="list-inline-item"
                        v-for="(tag, n) in article.tags"
                        :key="n"
                      >
                        {{ tag }}
                      </li>
                    </ul>
                  </header>
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

<style scoped>
.single-article {
  margin-bottom: 1em !important;
  padding: 20px;
  background-color: #e2e8f0;
  border: 1px solid #cbd5e1;
  border-radius: 15px;
}
</style>
