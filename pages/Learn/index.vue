<template>
  <div>
    <section dir="rtl" class="hero-content-homepage">
      <div class="container hero-text-section">
        <h1 class="hero-title">Under Maintenance</h1>
        <p class="hero-subtitle pt-1 pb-3">سایت در حال بروز رسانی می باشد.</p>

        <nuxt-link to="/">
          <button class="btn shadow-sm animation-on-hover">
            مشاهده صفحه اصلی
          </button>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'maintenance',
});

// SET META FOR PAGE
useHead({
  title: `اتاق آموزش | Learn Aviation`,
  meta: [{ name: 'description', content: 'اتاق آموزش | Learn Aviation' }],
});
</script>

<style lang="scss" scoped>
.bg {
  background-color: var(--hero-bg) !important;
  min-height: calc(100vh - 110px) !important;
}

// .custom-padding {
//   display: flex !important;
//   align-items: center !important;
//   padding: 3em 0 0 0 !important;
// }

@media screen and (max-width: 768px) {
  .hero {
    min-height: 31vh;
  }

  // .custom-padding {
  //   padding: 2.7rem 0 3rem 0 !important;
  // }

  .page-title {
    padding: 1.2em 0 0 0 !important;
    font-size: 2rem !important;

    .icon {
      font-size: 1.3em;
      padding-bottom: 0.3rem !important;
    }
  }

  .subheader {
    font-size: 1.2rem !important;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .hero {
    min-height: 31vh !important;
  }
}
</style>
