<template>
  <nav dir="ltr" class="toc">
    <div class="toc-border">
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
    </div>
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

  // For testing purposes
  // console.log({ _links });

  return _links;
};
</script>

<style lang="scss" scoped>
::v-deep .toc {
  min-height: minTableOfContentsHeight;
  max-height: 100vh;
  overflow: auto;
  padding: 15px;
  font-family: 'Georgia', serif;
  color: var(--blog-toc) !important;
  background-color: #f7f7f7;
  text-align: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  position: relative;
}

// ::v-deep .toc-border {
//   border-left: 1px solid #e5e7eb !important;
//   padding: 10px;
//   border-radius: 15px;
// }

::v-deep h3 {
  font-size: 1.1rem !important;
  font-weight: 700 !important;
  line-height: 1.5rem !important;
  margin-bottom: 1.3rem !important;
  padding-bottom: 0.3rem !important;
  text-transform: uppercase !important;
  font-style: italic !important;
  letter-spacing: 1px !important;
  border-bottom: 1px solid #dee2e6 !important;
  border-width: 70% !important;
  color: var(--blog-toc) !important;
}

::v-deep .toc-links,
::v-deep a {
  text-decoration: none !important;
  margin-right: 10px !important;
  color: var(--blog-toc) !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 0.5rem !important;
  padding-left: 0.2rem !important;
  padding-right: 0.2rem !important;
  list-style: none !important;
  transition: color 0.3s ease !important;
}

::v-deep .toc-links a:hover {
  color: #007bff !important;
  text-decoration: underline !important;
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

::v-deep .toc-links a:target {
  color: #007bff !important;
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
  max-height: 47vh;
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
