<template>
  <section dir="rtl" class="page-bg">
    <div class="container">
      <!-- <h2 class="section-header mb-4">گام‌های یادگیری</h2> -->

      <div class="row text-center">
        <!-- Button 1 -->
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <nuxt-link to="learn">
            <button native-type="submit" class="btn btn-1 shadow-sm">
              <font-awesome-icon :icon="['fa', 'plane']" class="icon" />
              <br />
              LPR Training Material
            </button>
          </nuxt-link>
        </div>

        <!-- BUTTON 2 -->
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <nuxt-link to="maintenance">
            <button native-type="submit" class="btn btn-2 shadow-sm">
              <font-awesome-icon :icon="['fa', 'headset']" class="icon" />
              <br />
              Radio Telephony Material
            </button>
          </nuxt-link>
        </div>

        <!-- BUTTON 3 -->
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <nuxt-link to="classes">
            <button native-type="submit" class="btn btn-3 shadow-sm">
              <font-awesome-icon :icon="['fa', 'comments']" class="icon" />
              <br />
              Aviation English Classes
            </button>
          </nuxt-link>
        </div>

        <!-- BUTTON 4 -->
        <div class="col-lg-3 col-md-6 col-sm-12 mb-3">
          <nuxt-link to="classes">
            <button native-type="submit" class="btn btn-3 shadow-sm">
              <font-awesome-icon :icon="['fa', 'book']" class="icon" />
              <br />
              Aviation Articles
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
  font-size: 1rem;
  border-radius: 18px !important;
  width: 100%;
  height: 120px;
  background-color: var(--hero-bg) !important;
  color: var(--hero-text) !important;
  border: 2px solid var(--hero-border) !important;
  box-shadow: inset 0 1px 0 0 #ffffff0d;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.btn:hover {
  box-shadow: 0 9px 8px rgba(0, 0, 0, 0.01), 0 5px 2px rgba(0, 0, 0, 0.03) !important;
  // border: 2px solid #223662 !important;
  border: 3px dashed #fbbc39 !important;

  // .icon {
  //   color: var(--hero-bg) !important;
  // }
}

.icon {
  font-size: 2rem;
  padding-bottom: 0.8rem;
  // color: var(--color-main) !important;
  color: var(--hero-text) !important;
}

// .btn-1 {
//   background-color: #fcd9e2 !important;
//   color: #912741 !important;
//   border: 1px solid #fbc6d3 !important;
// }

// .btn-2 {
//   background-color: #e3d7fb !important;
//   color: #44228c !important;
//   border: 1px solid #d5c4f9 !important;
// }

// .btn-3 {
//   background-color: #ccecfd !important;
//   color: #005f94 !important;
//   border: 1px solid #b3e2fd !important;
// }

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  .btn {
    width: 290px;
    height: 100px;
    padding-top: 10px;
  }
}
</style>
