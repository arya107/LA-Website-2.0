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
          <div class="container">
            <div
              v-for="article in list"
              :key="article._path"
              class="single-article card"
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
                        <NuxtLink
                          :to="`/blog/tags/${tag}`"
                          class="text-decoration-none"
                        >
                          {{ tag }}
                        </NuxtLink>
                      </li>
                    </ul>
                  </header>
                </div>
              </NuxtLink>
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
console.log({ filter });

// set meta for page
useHead({
  title: `All articles with ${slug}`,
  meta: [
    { name: 'description', content: "Here's a list of all our great articles" },
  ],
});
</script>

<style lang="scss" scoped>
.single-article {
  margin-bottom: 1em !important;
  padding: 20px;
  background-color: #e2e8f0;
  border: 1px solid #cbd5e1;
  border-radius: 15px;
}
</style>
