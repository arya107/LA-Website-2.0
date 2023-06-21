<template>
  <section dir="rtl" class="page-bg">
    <div class="container">
      <h2 class="section-header mb-4">گام‌های یادگیری</h2>

      <div class="row text-center">
        <!-- Button 1 -->
        <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
          <nuxt-link to="learn">
            <button native-type="submit" class="btn btn-1 shadow-sm">
              <font-awesome-icon :icon="['fa', 'plane']" class="icon" />
              <br />
              LPR Training Material
            </button>
          </nuxt-link>
        </div>

        <!-- BUTTON 2 -->
        <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
          <nuxt-link to="maintenance">
            <button native-type="submit" class="btn btn-2 shadow-sm">
              <font-awesome-icon :icon="['fa', 'headset']" class="icon" />
              <br />
              Radio Telephony Material
            </button>
          </nuxt-link>
        </div>

        <!-- BUTTON 3 -->
        <div class="col-lg-4 col-md-6 col-sm-12 mb-3">
          <nuxt-link to="classes">
            <button native-type="submit" class="btn btn-3 shadow-sm">
              <font-awesome-icon :icon="['fa', 'comments']" class="icon" />
              <br />
              Aviation English Classes
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
.page-bg {
  // background-color: #fafbfe !important;
  background-color: var(--bg);
}

.btn {
  font-size: 1.1em;
  color: white;
  border-radius: 15px !important;
  width: 100%;
  height: 110px;
  padding-top: 17px;
}

.btn:hover {
  box-shadow: 0 9px 8px rgba(0, 0, 0, 0.01), 0 5px 2px rgba(0, 0, 0, 0.03) !important;
  // transition: transform 1s !important;
  // -webkit-transform: translateY(-2px) !important;
  // transform: translateY(-2px) !important;

  a {
    text-decoration: none !important;
  }
}

.icon {
  font-size: 2.2rem;
  padding: 5px 0;
}

.btn-1 {
  background-color: #fcd9e2 !important;
  color: #912741 !important;
  border: 1px solid #fbc6d3 !important;

  // background-color: #ffffff;
  // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23f44881'/%3E%3Cstop offset='1' stop-color='%23ec454f'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='13' height='13' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='6.5' cy='6.5' r='6.5'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.05'/%3E%3C/svg%3E");
  // background-attachment: fixed;
  // background-size: cover;
}

.btn-2 {
  // background-color: #6602ff !important;
  // background-color: #e3d7fb !important;

  background-color: #e3d7fb !important;
  color: #44228c !important;
  border: 1px solid #d5c4f9 !important;
  // background-color: #ffffff;
  // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2321c8f6'/%3E%3Cstop offset='1' stop-color='%23637bff'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='13' height='13' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='6.5' cy='6.5' r='6.5'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.05'/%3E%3C/svg%3E");
  // background-attachment: fixed;
  // background-size: cover;
}

.btn-3 {
  // background-color: #f15b05 !important;
  background-color: #ccecfd !important;
  color: #005f94 !important;
  border: 1px solid #b3e2fd !important;
  // background-color: #ffffff;
  // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%231aab8b'/%3E%3Cstop offset='1' stop-color='%236edcc4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='13' height='13' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='6.5' cy='6.5' r='6.5'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.06'/%3E%3C/svg%3E");
  // background-attachment: fixed;
  // background-size: cover;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  .btn {
    width: 290px;
    height: 100px;
    padding-top: 10px;
  }
}
</style>
