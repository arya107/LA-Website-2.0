<template>
  <div class="banner-box d-block text-center">
    <div class="banner-card">
      <nuxt-link to="/classes">
        <span class="ps-2">
          <font-awesome-icon :icon="['fa', 'bell']" class="bell"
        /></span>
        آیندت رو بساز! <u>تخفیف</u> ویژه شروع تابستان.
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner-box {
  background-color: #fbbc39 !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='0.02' fill='%23ffffff' cx='45' cy='45' r='5'/%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='0' cy='90' r='5'/%3E%3Ccircle cx='90' cy='90' r='5'/%3E%3Ccircle cx='90' cy='0' r='5'/%3E%3Ccircle cx='0' cy='0' r='5'/%3E%3C/g%3E%3C/svg%3E") !important;
  direction: rtl !important;
}
.banner-card {
  justify-content: center !important;
  align-items: center !important;
  padding: 7px 10px !important;
  margin: 0 20% !important;
  position: relative !important;

  @media (max-width: 760px) {
    margin: 0 6% !important;
  }

  a {
    font-family: IranSansBold !important;
    font-size: 0.75rem !important;
    color: #fff !important;
    text-align: center !important;
  }
}

@media screen and (max-width: 325px) {
  a {
    font-size: 0.8em !important;
  }
}

.banner-card a:hover {
  text-decoration: underline !important;
}

.bell {
  font-size: 0.8rem !important;
  -webkit-transform-origin: 65% 0 !important;
  transform-origin: 65% 0 !important;
  -webkit-animation: swinging 2.5s ease-in-out forwards infinite !important;
  animation: swinging 1.7s ease-in-out forwards infinite !important;
  margin: 0 !important;
}

@-webkit-keyframes swinging {
  0% {
    -webkit-transform: rotate(10deg);
  }
  50% {
    -webkit-transform: rotate(-5deg);
  }
  100% {
    -webkit-transform: rotate(10deg);
  }
}

@keyframes swinging {
  0% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(10deg);
  }
}
</style>
