<!-- ./components/Tags.vue -->

<script setup>
// import icon
import { TagIcon } from '@heroicons/vue/24/solid';

// tag list state
const expanded = ref(false);

// helper function to flatten tags array
const flatten = (tags, key) => {
  console.log(tags);

  let _tags = tags
    .map((tag) => {
      let _tag = tag;
      if (tag[key]) {
        let flattened = flatten(tag[key]);
        _tag = flattened;
      }
      return _tag;
    })
    .flat(1);

  console.log({ _tags });

  return _tags;
};

// function to toggle expanded state
const toggleExpand = () => {
  expanded.value = !expanded.value;
};

// get only tags data from `/blog`
const { data } = await useAsyncData('tags', () =>
  queryContent('blog').only(['tags']).find()
);

// generate array without duplicates from flattened array
const articleTags = [...new Set(flatten(data.value, 'tags'))];

console.log({ articleTags });
</script>

<template>
  <div
    class="tag-list d-flex align-items-center p-2 border-0 rounded"
    :class="{ active: expanded }"
  >
    <!-- Button to toggle expand -->
    <button @click="toggleExpand" class="cta btn btn-link">
      <TagIcon class="icon" />
      <span>Tags</span>
    </button>
    <ul
      class="article-tags list-unstyled m-0 p-0"
      :class="{ 'w-100': expanded }"
    >
      <!-- list out tags with links -->
      <li v-for="(tag, n) in articleTags" :key="n" class="tag">
        <NuxtLink :to="`/blog/tags/${tag}`" class="font-weight-bold">
          {{ tag }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* ... */
/* ... */
.tag-list {
  transition: all 0.3s;
}

.tag-list.active {
  border-color: #ced4da; /* closest to slate-200 */
}

.article-tags {
  transition: all 0.3s;
  max-width: 0;
  overflow: hidden;
}

.article-tags.w-100 {
  max-width: 100%;
}
</style>
