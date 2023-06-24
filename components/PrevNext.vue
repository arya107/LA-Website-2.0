<!-- ./components/PrevNext.vue -->

<script setup>
// import icons
// define prev and next props
defineProps(['prev', 'next']);
</script>

<template>
  <div class="prev-next-cont d-flex justify-content-between p-3 border rounded">
    <span class="link-item prev">
      <NuxtLink v-if="prev" :to="prev._path">
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
        <span> {{ prev.title }} </span>
      </NuxtLink>
    </span>
    <span class="link-item next">
      <NuxtLink v-if="next" :to="next._path">
        <span> {{ next.title }} </span>
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
      </NuxtLink>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.prev-next-cont {
  border-color: #ced4da; /* closest to slate-200 */
}

.link-item a {
  display: flex;
  gap: 0.5rem; /* equivalent to 2 in tailwind */
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  text-decoration: none !important;
}
</style>
