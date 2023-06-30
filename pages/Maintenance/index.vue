/* eslint-disable */
<template>
  <section dir="rtl" class="hero-content-homepage">
    <div class="container hero-text-section">
      <h1 class="hero-title">Under Maintenance</h1>
      <p class="hero-subtitle pt-1 pb-3">سایت در حال بروز رسانی می باشد.</p>

      <nuxt-link to="/">
        <base-button
          native-type="submit"
          class="btn shadow-sm animation-on-hover"
        >
          مشاهده صفحه اصلی
        </base-button>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: `سایت در حال تعمیر است | Learn Aviation`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'سایت در حال تعمیر است | Learn Aviation',
        },
      ],
    };
  },
};
</script>

<script setup>
// definePageMeta({
//   layout: 'maintenance',
// });

// SET META FOR PAGE
useHead({
  title: `سایت در حال تعمیر است | Learn Aviation`,
  meta: [
    { name: 'description', content: 'سایت در حال تعمیر است | Learn Aviation' },
  ],
});
</script>

<style lang="scss" scoped>
.hero-content-homepage {
  background-color: #ff0066 !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='0.2' fill='%23FFFFFF' cx='45' cy='45' r='5'/%3E%3Cg fill='%23FFFFFF' fill-opacity='0.2'%3E%3Ccircle cx='0' cy='90' r='5'/%3E%3Ccircle cx='90' cy='90' r='5'/%3E%3Ccircle cx='90' cy='0' r='5'/%3E%3Ccircle cx='0' cy='0' r='5'/%3E%3C/g%3E%3C/svg%3E");
  min-height: calc(100vh - 110px) !important;

  .hero-text-section {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .hero-title {
    font-size: 3.6em;
    font-family: 'Arial Black', Arial, sans-serif !important;
    font-weight: bolder;
    color: #fff;
    // padding-top: 2em;
    direction: ltr !important;
  }

  .hero-subtitle {
    font-size: 1.3em;
    font-family: IranSans !important;
    color: rgba(255, 255, 255, 0.9);
  }

  .btn {
    background-color: rgb(247, 247, 247) !important;
    color: #2e2e2e;
    font-family: IranSans !important;
    border-color: rgb(240, 240, 240) !important;
    padding: 10px 30px !important;
    border-radius: 15px !important;
    font-size: 1em;

    &:hover {
      text-decoration: underline !important;
    }
  }
}

@media screen and (max-width: 768px) {
  .hero-title {
    font-size: 2.5em !important;
    padding-top: 1em;
  }

  .hero-subtitle {
    font-size: 1em !important;
  }
}
</style>
