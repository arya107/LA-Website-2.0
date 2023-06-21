<template>
  <section dir="rtl" class="container text-center">
    <h1 class="pt-5 pb-4 section-header">همراه ما به اهدافت برس</h1>
    <!-- <p class="section-subheader pb-4">آموزش مطالب خلبانی با آریا درودیان</p> -->
    <div class="row text-center">
      <div class="col-md-4 section">
        <span class="icon">
          <font-awesome-icon :icon="['fa', 'address-card']" />
        </span>
        خودت رو برای شغل در <br />
        صنعت هوانوردی آماده کن.
      </div>

      <div class="col-md-4 section">
        <span class="icon">
          <!-- <font-awesome-icon :icon="['fab', 'avianex']" /> -->
          <font-awesome-icon :icon="['fab', 'avianex']" />
        </span>
        مهم ترین نکته های<br />
        زبان هوانوردی رو یاد بگیر.
      </div>

      <div class="col-md-4 section">
        <span class="icon">
          <font-awesome-icon :icon="['fa', 'graduation-cap']" />
        </span>
        نمره دلخواهت رو در <br />
        آزمون هوانوردی کسب کن.
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  color: var(--colour-title) !important;
}
.section {
  // color: rgb(58, 58, 58);
  color: var(--color-main);
  font-size: 1em;
  padding-bottom: 2em;
}

.icon {
  font-size: 3rem;
  // color: #ec2588;
  color: #027fc2;

  display: block;
}
</style>
