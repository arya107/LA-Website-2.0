<template>
  <section dir="rtl" class="container py-5">
    <div class="row">
      <div class="col-md-7 text-end">
        <h2 class="section-header pb-4">کاپیتان این پرواز چه کسی است؟</h2>

        <p class="CustomParagraph">
          بنیان گذار Learn Aviation، آریا درودیان میباشد. ایشان متولد و بزرگ شده
          لندن است، تحصیلات آکادمی خود را در رشته مديريت بازرگانی در لندن
          گذراندند، و دوره خلبانی خود را در انگلیس اغاز کرد و در سال ۱۳۹۶ برای
          اتمام دوره خلبانی به ایران سفر کرد، و در این حین مشغول به آموزش زبان
          انگلیسی و فرانسوی شده و پس از اطمینان از موثر بودن روش تدریس و شیوه ی
          نوین آموزش، شروع به تاسیس گروه آموزشی Learn Aviation نمود.

          <nuxt-link to="articles/regulations">
            <span class="regulations">regulations</span>
          </nuxt-link>
        </p>
      </div>

      <div class="col-md-5 pt-4 text-center">
        <img
          class="rounded-circle img-fluid"
          src="~public/img/frontend/aryapilot.png"
          alt="Picture of our fearless leader 2"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.subheading2 {
  // color: rgb(0, 0, 0) !important;
  color: var(--color);
}

.CustomParagraph {
  font-size: 1.13rem !important;
  line-height: 1.8 !important;
  // color: #3f3f3f !important;
  color: var(--color);
}

.regulations {
  // color: #f7fafc !important;
  color: var(--color);

  // padding-right: 1em;
}

.regulations:hover {
  text-decoration: none !important;
  text-decoration: transparent !important;
  // color: #f7fafc !important;
  color: var(--color);
}

@media screen and (max-width: 768px) {
  .CustomParagraph {
    font-size: 1.05em !important;
  }
}

@media only screen and (min-width: 1100px) {
  .bg {
    margin: 4em 0 !important;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .CustomParagraph {
    font-size: 1.15em !important;
  }
}
</style>
