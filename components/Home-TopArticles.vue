<template>
  <section dir="rtl" class="container mb-5">
    <h2 class="section-header">آخرین مقالات</h2>
    <p class="section-subheader">
      مقالات به‌روز و کاربردی برای افزایش سطح دانش شما.
    </p>

    <!-- Articles  -->
    <div class="row article-section mt-5">
      <div class="col-lg-4 col-md-6 col-sm-12 pb-3 article-section">
        <!-- <article1 /> -->
      </div>

      <div class="col-lg-4 col-md-6 col-sm-12 pb-3 article-section">
        <!-- <article2 /> -->
      </div>

      <div class="col-lg-4 col-md-6 col-sm-12 pb-3 article-section">
        <!-- <article3 /> -->
      </div>
    </div>

    <div class="text-center pt-3">
      <nuxt-link to="articles">
        <button class="btn btn-primary">مشاهده همه دوره ها</button>
      </nuxt-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.bg {
  // background-color: #fafbfe !important;
  background-color: var(--bg);
}

.btn {
  // background-color: #027fc2;
  background-color: var(--bg);

  font-size: 1rem !important;
  color: #fff;
  border: 1px solid #027fc2 !important;
}

.btn:hover {
  // background-color: #fff !important;
  background-color: var(--bg);

  color: #027fc2;
  border: 1px dashed #027fc2 !important;
}

@media only screen and (max-width: 768px) {
  .btn {
    margin-left: 17px !important;
  }

  .article-section {
    padding-right: 10px;
    padding-left: 10px;
  }
}
</style>
