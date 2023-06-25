<!-- ./components/Toc.vue -->

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

<style lang="scss" scoped>
.toc {
  max-height: calc(100vh - 6rem);
  overflow: auto;
  border: 1px solid #e2f0f0 !important;
  padding: 10px !important;
  border-radius: 10px;
  // color: var(--color) !important;

  color: rgb(100 110 139 /1) !important;
  max-height: calc(100vh - 9rem);
  grid-column: span 2 / span 2 !important;
  grid-column-start: 6 !important;
  padding: 1rem !important;
  padding-top: 2rem !important;
  padding-bottom: 0px !important;
  text-align: left !important;
  text-decoration: none !important;
}

h3 {
  font-size: 1.25rem;
  font-weight: 700 !important;
  line-height: 1.75rem;
}

.toc-links,
a {
  text-decoration: none !important;
  margin-right: 10px !important;
  // color: var(--color) !important;
  color: #646e8b !important;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  list-style: none;
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
