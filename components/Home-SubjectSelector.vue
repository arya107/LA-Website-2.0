<template>
  <section dir="rtl" class="page-bg">
    <div class="container">
      <div class="row text-center">
        <div class="col-lg-3 col-md-6 col-sm-6 mb-3">
          <nuxt-link to="blog" class="btn__link">
            <button class="btn shadow-sm">
              <font-awesome-icon :icon="['fa', 'plane']" class="btn__icon" />
              <span class="btn__text">LPR Training Material</span>
            </button>
          </nuxt-link>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 mb-3">
          <nuxt-link to="maintenance" class="btn__link">
            <button class="btn shadow-sm">
              <font-awesome-icon :icon="['fa', 'headset']" class="btn__icon" />
              <span class="btn__text">Radio Telephony Material</span>
            </button>
          </nuxt-link>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 mb-3">
          <nuxt-link to="classes" class="btn__link">
            <button class="btn shadow-sm">
              <font-awesome-icon :icon="['fa', 'comments']" class="btn__icon" />
              <span class="btn__text">Aviation English Classes</span>
            </button>
          </nuxt-link>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 mb-3">
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
  text-decoration: none !important;

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

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .btn {
    width: 290px !important;
    height: 100px !important;
    padding-top: 10px !important;
  }
}
</style>
