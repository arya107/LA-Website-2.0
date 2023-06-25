<template>
  <nav dir="ltr" class="toc">
    <header>
      <h3 class="toc-header">Table of contents</h3>
    </header>
    <div class="toc-scrollable">
      <ul class="toc-links">
        <li
          v-for="link of flattenLinks(links)"
          :key="link.id"
          :class="`toc-link _${link.depth}`"
        >
          <a :href="`#${link.id}`">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </div>
    <div class="fade-overlay"></div>
  </nav>
</template>

<script setup>
defineProps(['links']);

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
  min-height: minTableOfContentsHeight;
  max-height: 100vh;
  overflow: auto;
  border: 1px solid #dee2e6 !important;
  padding: 15px;
  border-radius: 5px;
  font-family: 'Georgia', serif;
  color: #333;
  background-color: #f7f7f7;
  text-align: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  position: relative;
}

::v-deep h3 {
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.75rem;
  margin-bottom: 1.3rem;
  padding-bottom: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid #dee2e6;
  border-width: 70%;
}

::v-deep .toc-links,
::v-deep a {
  text-decoration: none;
  margin-right: 10px;
  color: #555;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  list-style: none;
  transition: color 0.3s ease;
}

::v-deep .toc-links a:hover {
  color: #007bff;
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

::v-deep .toc::-webkit-scrollbar {
  width: 6px;
}

::v-deep .toc::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::v-deep .toc::-webkit-scrollbar-thumb {
  background: #888;
}

::v-deep .toc::-webkit-scrollbar-thumb:hover {
  background: #555;
}

::v-deep .toc-scrollable {
  position: relative;
  max-height: 60vh;
  overflow-y: auto;
  z-index: 0;
}

// THIS IS FOR THE FADE AT THE BOTTOM
// ::v-deep .fade-overlay {
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 30%;
//   background: linear-gradient(transparent, #f7fafc);
//   z-index: 1;
//   width: 90%;
// }
</style>
