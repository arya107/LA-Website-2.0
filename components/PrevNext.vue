<!-- ./components/PrevNext.vue -->

<script setup>
// import icons
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/solid';
// define prev and next props
defineProps(['prev', 'next']);
</script>

<template>
  <ul class="prev-next-cont d-flex justify-content-between p-3 border rounded">
    <li class="link-item prev">
      <NuxtLink v-if="prev" :to="prev._path">
        <ArrowLeftIcon class="icon" />
        <span> {{ prev.title }} </span>
      </NuxtLink>
    </li>
    <li class="link-item next">
      <NuxtLink v-if="next" :to="next._path">
        <span> {{ next.title }} </span>
        <ArrowRightIcon class="icon" />
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
.prev-next-cont {
  border-color: #ced4da; /* closest to slate-200 */
}

.link-item a {
  display: flex;
  gap: 0.5rem; /* equivalent to 2 in tailwind */
}
</style>
