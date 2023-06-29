<template>
  <section class="hero-content-homepage">
    <div class="hero-content-homepage__container">
      <div class="hero-content-homepage__text-section">
        <div class="hero-content-homepage__icon">
          <font-awesome-icon :icon="['fab', 'avianex']" />
        </div>
        <h1 class="hero-content-homepage__title">
          آموزش مطالب خلبانی با آریا درودیان.
        </h1>
        <p class="hero-content-homepage__subtitle">
          هدف ما آموزش اصولی زبان هوانوردی و پیشرفت سطح دانش زبان شما.
        </p>
        <div class="hero-content-homepage__button-container">
          <nuxt-link to="classes">
            <button class="hero-content-homepage__button">
              <span class="hero-content-homepage__button-icon">
                <font-awesome-icon :icon="['fas', 'book-reader']" />
              </span>
              کلاس های خصوصی
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row text-center pb-5">
        <div class="col-lg-3 col-md-6 col-6 mb-3">
          <nuxt-link to="learn" class="btn__link">
            <button class="btn shadow-sm">
              <font-awesome-icon :icon="['fa', 'plane']" class="btn__icon" />
              <span class="btn__text">LPR Training Material</span>
            </button>
          </nuxt-link>
        </div>

        <div class="col-lg-3 col-md-6 col-6 mb-3">
          <nuxt-link to="learn" class="btn__link">
            <button class="btn shadow-sm">
              <font-awesome-icon :icon="['fa', 'headset']" class="btn__icon" />
              <span class="btn__text showlarge">Radio Telephony Material</span>
              <span class="btn__text showmobile">RT Material</span>
            </button>
          </nuxt-link>
        </div>

        <div class="col-lg-3 col-md-6 col-6 mb-3">
          <nuxt-link to="classes" class="btn__link">
            <button class="btn shadow-sm">
              <font-awesome-icon :icon="['fa', 'comments']" class="btn__icon" />
              <span class="btn__text showlarge">Aviation English Classes</span>
              <span class="btn__text showmobile">Aviation English</span>
            </button>
          </nuxt-link>
        </div>

        <div class="col-lg-3 col-md-6 col-6 mb-3">
          <nuxt-link to="blog" class="btn__link">
            <button class="btn shadow-sm">
              <font-awesome-icon :icon="['fa', 'book']" class="btn__icon" />
              <span class="btn__text">Aviation Articles</span>
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-content-homepage {
  min-height: calc(100vh - 110px) !important;
  background-color: var(--hero-bg) !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='0.05' fill='%23FFFFFF' cx='45' cy='45' r='5'/%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Ccircle cx='0' cy='90' r='5'/%3E%3Ccircle cx='90' cy='90' r='5'/%3E%3Ccircle cx='90' cy='0' r='5'/%3E%3Ccircle cx='0' cy='0' r='5'/%3E%3C/g%3E%3C/svg%3E") !important;

  &__container {
    padding: 2.5rem 0 !important;
  }

  &__icon {
    font-size: 4.3rem !important;
    color: var(--hero-text) !important;
    display: block !important;
    text-align: center !important;
    padding-top: 1rem !important;
  }

  &__title {
    font-size: 3.4rem !important;
    line-height: 1.3em !important;
    font-family: IranSansBold !important;
    color: var(--hero-text) !important;
    text-align: center !important;
  }

  &__subtitle {
    font-size: 1.1rem !important;
    color: var(--hero-text) !important;
    font-family: IranSans !important;
    line-height: 1.6em !important;
    padding: 1em 18% 0 !important;
    text-align: center !important;
  }

  &__button-container {
    text-align: center !important;
  }

  &__button {
    background-color: white !important;
    color: var(--hero-bg) !important;
    font-size: 0.9rem !important;
    border: 2px solid rgba(255, 255, 255, 0.7) !important;
    border-radius: 8px !important;
    padding: 10px 20px !important;
    margin: 1.8em 0 4em 0 !important;
    font-family: IranSans !important;

    &:hover {
      background-color: var(--hero-bg) !important;
      color: var(--hero-text) !important;
      border: 2px dashed #fff !important;
    }
  }

  &__button-icon {
    padding-left: 0.5rem !important;
  }
}

.page-bg {
  .btn {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: 1rem !important;
    border-radius: 18px !important;
    width: 100% !important;
    height: 130px !important;
    background-color: var(--hero-button-bg) !important;
    color: var(--hero-text) !important;
    border: 3px dashed var(--hero-border) !important;
    box-shadow: inset 0 1px 0 0 #ffffff0d !important;
    font-family: Verdana, Geneva, Tahoma, sans-serif !important;

    a {
      text-decoration: none !important;
    }

    &:hover {
      box-shadow: 0 9px 8px rgba(0, 0, 0, 0.01), 0 5px 2px rgba(0, 0, 0, 0.03) !important;
      border: 3px dashed #fbbc39 !important;
    }

    &__icon {
      font-size: 2rem !important;
      padding-bottom: 0.8rem !important;
      color: var(--hero-text) !important;
    }

    &__text {
      margin-top: 0.5rem !important;
      font-family: sans-serif, Verdana, Geneva, Tahoma !important;
    }
  }

  .btn__link {
    text-decoration: none !important;
  }
}

@media screen and (max-width: 1200px) {
  .hero-content-homepage {
    &__title {
      font-size: 2.8rem !important;
    }

    &__subtitle {
      font-size: 1rem !important;
    }
  }
}

@media screen and (max-width: 992px) {
  .hero-content-homepage {
    &__title {
      font-size: 2.4rem !important;
    }

    &__subtitle {
      font-size: 0.95rem !important;
    }
  }
}

@media screen and (max-width: 768px) {
  .row {
    --bs-gutter-x: 0.9rem !important; /* update the value as per your requirement */
  }
  .hero-content-homepage {
    &__title {
      font-size: 2rem !important;
    }

    &__subtitle {
      font-size: 0.95rem !important;
    }

    &__icon {
      font-size: 5.1em !important;
    }

    &__button {
      margin: 1.5em 0 2em 0 !important;
      font-size: 0.9rem !important;
    }
  }
}

@media screen and (max-width: 576px) {
  .hero-content-homepage {
    min-height: 85vh !important;

    &__icon {
      font-size: 3.8rem !important;
    }

    &__container {
      padding: 0.5rem 0 1.3rem 0 !important;
    }

    &__title {
      font-size: 1.6rem !important;
    }

    &__subtitle {
      font-size: 1rem !important;
    }
  }

  .page-bg {
    .btn {
      font-size: 0.8rem !important;

      &__icon {
        font-size: 1.7rem !important;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .hero-content-homepage {
    &__title {
      font-size: 1.3rem !important;
    }

    &__subtitle {
      font-size: 0.85rem !important;
    }

    &__button {
      font-size: 0.8rem !important;
      padding: 8px 16px !important;
    }
  }
}

@media (min-width: 991px) {
  .showmobile {
    display: none !important;
  }
}

@media (max-width: 991px) {
  .showlarge {
    display: none !important;
  }
}
</style>
