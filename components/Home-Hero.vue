<template>
  <section dir="rtl" class="hero-content-homepage">
    <div class="container py-5">
      <div class="text-section">
        <div class="icon">
          <font-awesome-icon :icon="['fab', 'avianex']" />
        </div>
        <h1 class="hero-title">آموزش مطالب خلبانی با آریا درودیان.</h1>
        <p class="hero-subtitle py-2">
          <!-- هدف ما آموزش اصولی زبان هوانوردی و پیشرفت سطح دانش زبان شما با ارائه
            مقاله های به روز هوانوردی پست های آموزشی رایگان، پادکست های هوانوردی
            و برگزاری کلاس های خصوصی و نمیه خصوصی و ماک تست است. -->

          هدف ما آموزش اصولی زبان هوانوردی و پیشرفت سطح دانش زبان شما.
        </p>
        <div class="text-center py-3">
          <nuxt-link to="classes">
            <button native-type="submit" class="btn animation-on-hover">
              <span class="ps-2"
                ><font-awesome-icon :icon="['fas', 'book-reader']"
              /></span>
              کلاس های خصوصی
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="pt-4">
      <home-subject-selector />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-content-homepage {
  min-height: calc(100vh - 114px);
  background-color: var(--hero-bg) !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='0.05' fill='%23FFFFFF' cx='45' cy='45' r='5'/%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Ccircle cx='0' cy='90' r='5'/%3E%3Ccircle cx='90' cy='90' r='5'/%3E%3Ccircle cx='90' cy='0' r='5'/%3E%3Ccircle cx='0' cy='0' r='5'/%3E%3C/g%3E%3C/svg%3E");

  .icon {
    font-size: 4.3rem !important;
    color: var(--hero-text) !important;
    display: block;
    text-align: center;
    padding-top: 1rem;
  }

  .hero-title {
    font-size: 3.4rem !important;
    line-height: 1.3em;
    font-family: IranSansBold !important;
    color: var(--hero-text) !important;
    margin: 0;
    text-align: center;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    color: var(--hero-text) !important;
    font-family: IranSans !important;
    line-height: 1.6em;
    padding-left: 18%;
    padding-right: 18%;
    padding-top: 1.9em !important;
    text-align: center;
    margin: 0;
  }

  .btn {
    background-color: white;
    color: var(--hero-bg) !important;
    font-size: 0.9rem;
    border: 1px solid rgba(255, 255, 255, 0.7) !important;
    border-radius: 8px !important;
    padding: 10px 20px !important;
    margin-top: 2em !important;
  }

  .btn:hover {
    background-color: var(--hero-bg) !important;
    color: var(--hero-text) !important;
    border: 1px solid #fff !important;
  }
}

@media screen and (min-width: 1000px) {
  .custom-padding {
    padding-top: 3rem !important;
  }
}

@media screen and (max-width: 768px) {
  .hero-content-homepage {
    .hero-title {
      font-size: 2.1rem !important;
      color: #fff !important;
      text-align: right;
      margin: 0;
    }

    .hero-subtitle {
      font-size: 1em;
      color: rgb(236, 236, 236);
      padding-left: 0.1%;
      padding-right: 0.1%;
      margin: 0;
      text-align: center;
    }
  }

  .icon {
    font-size: 5.1em;
    margin: 0;
  }

  .text-section {
    padding-top: 3px;
  }

  .btn {
    font-size: 0.9rem;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 678px) {
  .hero-title {
    text-align: center !important;
  }
}
</style>
