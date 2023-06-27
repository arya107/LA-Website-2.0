<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__container">
        <p class="footer__copyright">
          طراحی و تولید شده توسط
          <a href="https://learn-aviation.com" class="footer__copyright-link"
            >LearnAviation</a
          >، با افتخار در ایران
          <font-awesome-icon
            :icon="['fa', 'heart']"
            class="footer__copyright-icon"
          />
          <!-- سال ۱۳۹۶ - ۱۴۰۲ -->
        </p>
        <div dir="ltr" class="footer__mode-switcher">
          <ColorModePicker />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--bg-blue) !important;
  min-height: 55px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  bottom: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
}

.footer__container {
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  width: 100% !important;
}

.footer__copyright {
  font-size: 0.8rem !important;
  font-family: IranSans !important;
  color: var(--color-muted) !important;
  direction: rtl !important;
  padding: 0 !important;
  margin: 0 !important;
}

.footer__copyright-link {
  font-family: IranSans !important;
  text-decoration: none !important;
  color: var(--color-muted) !important;
  padding: 0 !important;
  margin: 0 !important;
}

.footer__copyright-icon {
  color: var(--color-muted) !important;
}

.footer__mode-switcher {
  width: auto !important;
}

@media (max-width: 768px) {
  .footer {
    height: 80px !important;
  }
  .footer__container {
    flex-direction: column !important;
    align-items: stretch !important;
    text-align: center !important;
  }

  .footer__copyright {
    font-size: 0.82em !important;
    text-align: center !important;
  }

  .footer__copyright-link {
    font-size: 0.92em !important;
    // font-size: 0.82em !important;
  }

  .footer__mode-switcher {
    width: 100% !important;
    // order: -1 !important;
    // margin: 0.7em 0 !important;
    margin-top: 0.7em !important;
  }
}

@media (max-width: 576px) {
  .footer {
    min-height: 90px !important;
  }
}
</style>
