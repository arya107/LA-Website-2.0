<!-- ./components/PrevNext.vue -->

<script setup>
// import icons
// define prev and next props
defineProps(['prev', 'next']);
</script>

<template>
  <div class="prev-next-cont">
    <span class="link-item">
      <NuxtLink v-if="prev" :to="prev._path">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
        <span> {{ prev.title }} </span>
      </NuxtLink>
    </span>
    <span class="link-item">
      <NuxtLink v-if="next" :to="next._path">
        <span> {{ next.title }} </span>
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </NuxtLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.prev-next-cont {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  // border: 1px solid #e1e3e5 !important;
  border: 1px solid var(--prevnext-border) !important;
  border-radius: 10px !important;
  margin-top: 1.5rem !important;
}

.link-item a {
  display: flex;
  gap: 0.5rem; /* equivalent to 2 in tailwind */
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 0.9rem !important;
  color: var(--blog-main-text) !important;

  &:hover {
    text-decoration: underline !important;
  }
}
</style>
