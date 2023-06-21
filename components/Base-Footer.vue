<template>
  <footer class="copyright text-center">
    <div class="container">
      <p>
        طراحی و تولید شده توسط
        <a href="https://learn-aviation.com">LearnAviation</a>، با افتخار در
        ایران
        <font-awesome-icon :icon="['fa', 'heart']" />
        <!-- سال ۱۳۹۶ - ..١۴ -->
      </p>
    </div>

    <div class="fixed-bottomm text-center">
      <ColorModePicker />
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: #fafbfe !important;
}

.copyright {
  font-size: 0.85em !important;
  // color: rgb(58, 58, 58);
  color: var(--color);

  padding: 1em 0 0.01em 0;
  direction: rtl;
  background-color: #fafbfe !important;

  a {
    font-family: IranSans !important;
  }

  a,
  svg:not(:root).svg-inline--fa {
    // color: #027fc2 !important;
    color: var(--color);
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
