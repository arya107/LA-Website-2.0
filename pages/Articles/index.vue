<template>
  <div dir="rtl" class="bg">
    <div class="hero">
      <div class="container">
        <h1 class="page-title">
          مقالات آموزشی
          <span class="page-subtitle"
            >مقالات به‌روز و کاربردی برای افزایش سطح دانش شما.</span
          >
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
// export default {
//   layout: 'maintenance',
//   head() {
//     return {
//       title: `اتاق آموزش | Learn Aviation`,
//       meta: [
//         {
//           hid: 'description',
//           name: 'description',
//           content: 'اتاق آموزش | Learn Aviation',
//         },
//       ],
//     };
//   },
// };
</script>

<style lang="scss" scoped>
.bg {
  background-color: var(--hero-bg) !important;
  min-height: 90vh;
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
