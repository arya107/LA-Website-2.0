<template>
  <div dir="rtl" class="page">
    <base-ad-banner />
    <base-navbar />
    <NuxtPage />

    <base-footer />
  </div>
</template>

<style>
/* .page {
 height: calc(100vh - 70px) !important; 
  background-color: #f8fafc !important ; 
} */

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
