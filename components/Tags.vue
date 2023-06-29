<!-- ./components/Tags.vue -->

<template>
  <div class="container">
    <div
      class="tag-list d-flex align-items-center text-center p-2 border-0 rounded"
      :class="{ active: expanded }"
    >
      <!-- Button to toggle expand -->
      <!-- <button @click="toggleExpand" class="cta btn btn-link">
      <TagIcon class="icon" />
      <span>Tags</span>
    </button> -->
      <div
        class="article-tags list-unstyled m-0 p-0"
        :class="{ 'w-100': expanded }"
      >
        <!-- list out tags with links -->
        <div v-for="(tag, n) in articleTags" :key="n" class="tag pill">
          <NuxtLink :to="`/blog/tags/${tag}`">
            {{ tag }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// tag list state
// const expanded = ref(false);
const expanded = ref(true);

// helper function to flatten tags array
const flatten = (tags, key) => {
  // console.log(tags);

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

<style lang="scss" scoped>
.pill {
  display: inline-block;
  padding: 0.7em 1em;
  margin: 0 0 8px 8px !important;
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 1;
  color: var(--blog-tag-text) !important;
  border: 2px dashed var(--blog-tag-border) !important;
  background-color: var(--blog-tag-bg) !important;
  // background-color: #fbbc39;
  // border: 1px solid #e6ad33;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 5px !important;
  font-family: Helvetica, Arial, sans-serif !important;

  &:hover {
    // border: 1px dashed #fbbc39 !important;
    border: 2px solid var(--blog-tag-border) !important;
    text-decoration: underline !important;
  }
}

a {
  // color: #334155 !important;
  color: var(--blog-tag-text) !important;
  text-transform: uppercase !important;
  text-decoration: none !important;
}

.tag-list {
  transition: all 0.3s;
}

.tag-list.active {
  border-color: #ced4da; /* closest to slate-200 */
}

.article-tags {
  /* transition: all 0.3s; */
  max-width: 0;
  overflow: hidden;
}

.article-tags.w-100 {
  max-width: 100%;
}
</style>
