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
    <div class="hero-content-homepage__subject-selector">
      <home-subject-selector />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-content-homepage {
  min-height: calc(100vh - 114px) !important;
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
    padding: 1.4em 18% 0 !important;
    text-align: center !important;
  }

  &__button-container {
    text-align: center !important;
    padding: 1rem 0 !important;
  }

  &__button {
    background-color: white !important;
    color: var(--hero-bg) !important;
    font-size: 1rem !important;
    border: 1px solid rgba(255, 255, 255, 0.7) !important;
    border-radius: 8px !important;
    padding: 10px 20px !important;
    margin-top: 2em !important;
    font-family: IranSans !important;

    &:hover {
      background-color: var(--hero-bg) !important;
      color: var(--hero-text) !important;
      border: 1px solid #fff !important;
    }
  }

  &__button-icon {
    padding-left: 0.5rem !important;
  }

  &__subject-selector {
    padding-top: 4rem !important;
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
  .hero-content-homepage {
    &__title {
      font-size: 2rem !important;
    }

    &__subtitle {
      font-size: 0.9rem !important;
    }

    &__icon {
      font-size: 5.1em !important;
    }
  }
}

@media screen and (max-width: 576px) {
  .hero-content-homepage {
    &__title {
      font-size: 1.6rem !important;
    }

    &__subtitle {
      font-size: 0.85rem !important;
    }
  }
}

@media screen and (max-width: 480px) {
  .hero-content-homepage {
    &__title {
      font-size: 1.4rem !important;
    }

    &__subtitle {
      font-size: 0.8rem !important;
    }
  }
}
</style>
