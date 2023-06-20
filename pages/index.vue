<template>
  <div dir="rtl" class="page-bg">
    <home-hero />

    <div class="py-2">
      <home-skillup />
    </div>

    <!-- <div class="py-5 container">
      <Quiz />
    </div> -->

    <div class="py-3">
      <TopArticles />
      <div class="container">
        <hr />
      </div>
    </div>

    <div class="py-5">
      <home-subject-selector />
    </div>

    <div class="custom-padding">
      <home-founder />
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.page-bg {
  background-color: #f8fafc !important ;
}

.custom-padding {
  padding-top: 40px !important;
  padding-bottom: 85px !important;
}
</style>
