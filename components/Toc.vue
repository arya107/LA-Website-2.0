<!-- ./components/Toc.vue -->
<script setup>
// define links prop
defineProps(['links']);

// flatten TOC links nested arrays to one array
const flattenLinks = (links) => {
  let _links = links
    .map((link) => {
      let _link = [link];
      if (link.children) {
        let flattened = flattenLinks(link.children);
        _link = [link, ...flattened];
      }
      return _link;
    })
    .flat(1);

  console.log({ _links });

  return _links;
};
</script>

<template>
  <nav class="toc">
    <header class="toc-header border-bottom pb-2 mb-2">
      <h3>Table of contents</h3>
    </header>
    <ul class="toc-links d-flex flex-column gap-2 px-2">
      <!-- render each link with depth class -->
      <li
        v-for="link of flattenLinks(links)"
        :key="link.id"
        :class="`toc-link _${link.depth}`"
      >
        <a :href="`#${link.id}`" class="text-dark">
          {{ link.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.toc {
  max-height: calc(100vh - 6rem);
  overflow: auto;
  border: 1px solid grey;
  padding: 10px !important;
  border-radius: 10px;
  color: var(--color) !important;
}

.toc-links,
a {
  text-decoration: none !important;
  margin-right: 10px !important;
  color: var(--color) !important;
}

.toc-link._3 {
  padding-left: 1rem;
}

.toc-link._4 {
  padding-left: 1.5rem;
}

.toc-link._undefined {
  padding-left: 2rem;
}
</style>
