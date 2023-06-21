<template>
  <div dir="rtl" class="bg">
    <div class="hero">
      <div class="custom-padding">
        <div class="container">
          <h1 class="page-title">
            مقالات آموزشی
            <p>مقالات به‌روز و کاربردی برای افزایش سطح دانش شما.</p>
          </h1>
        </div>
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

.page-title {
  font-size: 1.8rem !important;
  color: var(--hero-text) !important;
  font-family: IranSansBold !important;
  text-align: center !important;
  padding: 1em 0;

  p {
    display: block !important;
    color: var(--hero-text) !important;
    font-size: 1.1rem !important;
    padding: 1em 0;
  }
  .icon {
    font-size: 2.5rem;
    display: block;
    padding-bottom: 0.1em !important;
    margin: 0;
    text-align: center;
  }
}

.subheader {
  font-size: 1rem !important;
  color: var(--hero-text) !important;
  font-family: IranSansBold !important;
  text-align: right;
  padding: 1.5em;
}

.custom-padding {
  display: flex !important;
  align-items: center !important;
  padding: 3em 0 0 0 !important;
}

@media screen and (max-width: 768px) {
  .hero {
    min-height: 31vh;
  }

  .custom-padding {
    padding: 2.7rem 0 3rem 0 !important;
  }

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
