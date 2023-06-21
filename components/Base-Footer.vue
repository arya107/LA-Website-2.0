<template>
  <!-- <footer class="copyright d-flex align-items-center">
    <p class="container">
      طراحی و تولید شده توسط
      <a href="https://learn-aviation.com">LearnAviation</a>، با افتخار در ایران
      <font-awesome-icon :icon="['fa', 'heart']" />
      سال ۱۳۹۶ - ..١۴
    </p>

    <span dir="ltr" class="">
      <ColorModePicker />
    </span>
  </footer> -->

  <footer class="mt-auto">
    <div
      class="container d-flex align-items-baseline justify-content-between pt-3"
    >
      <p class="copyright">
        طراحی و تولید شده توسط
        <a href="https://learn-aviation.com">LearnAviation</a>، با افتخار در
        ایران
        <font-awesome-icon :icon="['fa', 'heart']" />
        <!-- سال ۱۳۹۶ - ..١۴ -->
      </p>
      <p dir="ltr">
        <ColorModePicker />
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--bg-blue);
  bottom: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
  // height: 45px !important;
}

.copyright {
  font-size: 0.85rem !important;
  color: var(--color-muted);
  background-color: var(--bg-blue);
  direction: rtl !important;
  padding: 0 !important;
  margin: 0 !important;

  a {
    font-family: IranSans !important;
    text-decoration: none !important;
  }

  a,
  svg:not(:root).svg-inline--fa {
    color: var(--color-muted);
  }
}

@media (max-width: 768px) {
  .copyright {
    p {
      font-size: 0.82em !important;
    }
  }

  .copyright {
    a {
      font-size: 0.9em !important;
    }
  }
}
</style>
