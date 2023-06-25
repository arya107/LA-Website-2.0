<!-- ./components/Toc.vue -->

<template>
  <nav dir="ltr" class="toc">
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
::v-deep .toc {
  max-height: calc(100vh - 6rem);
  overflow: auto;
  border: 1px solid #dee2e6 !important;
  padding: 15px !important;
  border-radius: 5px !important; /* rounded border */
  font-family: 'Georgia', serif !important;
  color: #333 !important;
  background-color: #f7f7f7 !important;
  text-align: left !important;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15) !important; /* subtle shadow for depth */
}

::v-deep h3 {
  font-size: 1.25rem;
  font-weight: 700 !important;
  line-height: 1.75rem;
  margin-bottom: 1rem !important;
  text-transform: uppercase;
  letter-spacing: 1px;
}

::v-deep .toc-links,
::v-deep a {
  text-decoration: none !important;
  margin-right: 10px !important;
  color: #555 !important;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  list-style: none;
  transition: color 0.3s ease !important; /* smooth color transition */
}

::v-deep .toc-links a:hover {
  color: #007bff !important; /* link color on hover */
}

::v-deep .toc-link._3 {
  padding-left: 1rem;
}

::v-deep .toc-link._4 {
  padding-left: 1.5rem;
}

::v-deep .toc-link._undefined {
  padding-left: 2rem;
}

/* Custom scroll bar for Chrome, Safari */
::v-deep .toc::-webkit-scrollbar {
  width: 6px !important;
}

::v-deep .toc::-webkit-scrollbar-track {
  background: #f1f1f1 !important;
}

::v-deep .toc::-webkit-scrollbar-thumb {
  background: #888 !important;
}

::v-deep .toc::-webkit-scrollbar-thumb:hover {
  background: #555 !important;
}
</style>
