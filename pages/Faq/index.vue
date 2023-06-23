<template>
  <div dir="rtl" class="bg">
    <div class="container">
      <h1 class="page-title">
        سوالات متداول
        <span class="page-subtitle">
          دردر اینجا سعی می‌کنیم به سوالات متداولی که ممکن است برای شما پیش
          بیاید پاسخ دهیم.
        </span>
      </h1>
      <!-- FAQ's  -->
      <section class="custom-padding text-end">
        <div role="tablist">
          <!-- FAQ 1 -->
          <div class="card">
            <h4 class="card-title">
              <span>۱ -</span> کلاس ها به چه صورت تشکیل میشوند؟
            </h4>
            <p class="card-text">
              كلاس های آموزشی ما به دلیل شرایط فعلی فعلا به صورت آنلاین برگذار
              میشوند.
            </p>
          </div>

          <!-- FAQ 2 -->
          <div class="card">
            <h4 class="card-title">
              <span>۲ -</span> منبع کلاس ها چه کتابی هست؟
            </h4>
            <p class="card-text">
              در کلاس ها از کتاب درسی موجود در بازار تدریس نمیشود، منابع ما
              جزوات تهیه شده با توجه به تجربیات مربوطه استاد میباشند.
            </p>
          </div>

          <!-- FAQ 3 -->
          <div class="card">
            <h4 class="card-title">
              <span>۳ -</span> کلاس خصوصی هم برگزار میکنید؟
            </h4>
            <p class="card-text">
              بله، کلاس های آموزشی ما به صورت خصوصی هم برگذار میشوند.
            </p>
          </div>

          <!-- FAQ 4 -->
          <div class="card">
            <h4 class="card-title">
              <span>۴ - </span> آزمون ماک به چه درد میخوره؟
            </h4>
            <p class="card-text">
              ارزیابی سطح زبان، آنالیز دقیق نقاط ضعف و قوت، مشاوره دقیق با توجه
              به نمره اکتسابی جهت آمادگی در آزمون های زبان هوانوردی.
            </p>
          </div>

          <!-- Accordion 5 -->
          <div class="card">
            <h4 class="card-title">
              <span>۵ -</span> با چه سطحی میتونیم آزمون ماک رو شرکت کنیم؟
            </h4>
            <p class="card-text">
              با هر سطحی که باشین میتونید در آزمون ماک شرکت کنید. و دانش زبان
              خودتون رو ارزیابی کنید و آمادگی برای آزمون های اصلی خودتون به دست
              بیاورید.
            </p>
          </div>

          <!-- Accordion 6 -->
          <div class="card">
            <h4 class="card-title">
              <span>۶ -</span> تفاوت شما با بقیه اساتید زبان هوانوردی چیست؟
            </h4>
            <p class="card-text">
              استاد نیتیو انگلستان هستند و با دارا بودن تجربه در زمینه زبان
              هوانوردی میتوانند زبان آموز را به درستی راهنمایی کنند.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<!-- <script>
export default {
  layout: 'maintenance',

  components: {},
  head() {
    return {
      title: ` سوالات متداول | Learn Aviation`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ' سوالات متداول | Learn Aviation',
        },
      ],
    };
  },
};
</script> -->

<style lang="scss" scoped>
.bg {
  min-height: 100vh !important;
  background-color: var(--hero-bg) !important;
}

.card {
  margin-bottom: 1.4em;
  border-radius: 10px;
  border: none !important;
}

.card-title {
  background: #fbbc39 !important;
  color: #fff !important;
  font-family: IranSansBold !important;
  font-size: 1rem !important;
  padding: 1em;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

span {
  margin-left: 0.4rem;
  font-family: IranSansBold !important;
  font-size: 1rem !important;
}

.card-text {
  color: #0f172a;
  padding: 0.4em 1em 1em 1em;
}

:focus {
  display: none !important;
}

@media only screen and (min-width: 1300px) {
  .custom-padding {
    padding: 1em 11em !important;
  }

  .page-title {
    padding-top: 1.5em !important;
  }
}

@media (max-width: 768px) {
  .custom-padding {
    padding-top: 1.6em !important;
    padding-bottom: 6em !important;
  }
}
</style>
