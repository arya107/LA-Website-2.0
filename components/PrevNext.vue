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
  border: 1px solid #ced4da; /* closest to slate-200 */
  border-radius: 0.25rem;
  margin-top: 1rem;
}

.link-item a {
  display: flex;
  gap: 0.5rem; /* equivalent to 2 in tailwind */
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
</style>
