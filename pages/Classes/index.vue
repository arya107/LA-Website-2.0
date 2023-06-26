<template>
  <div class="private-classes-background">
    <div class="container">
      <h1 class="text-center page-title">کلاس های خصوصی ما</h1>
      <div class="private-classes py-4">
        <div class="row pricing">
          <div class="col-lg-4 col-sm-12 mb-4">
            <div class="pricing-box hover">
              <div class="pricing-title bg-immigration">
                <!-- <h3 class="titleSize">آلفا +</h3> -->
                <h3 class="titleSize">آلفا</h3>
              </div>
              <div class="pricing-field">
                <p class="price">۱۳,۵۰۰,۰۰۰ <span class="toman">تومان</span></p>
              </div>
              <div class="pricing-features pt-1">
                <ul>
                  <li>مشاوره تخصصی</li>
                  <li>نوشتن رزومه حرفه ای</li>
                  <li>راهنمای ارتباط ایمیلی</li>
                  <li>آمادگی مصاحبه تلفنی</li>
                  <li>آمادگی مصاحبه حضوری</li>
                  <li>تمرین مکالمه و لیسنینگ</li>
                  <li>تمرین لغات، تلفظ و گرامر</li>
                  <li>راهنمای آزمون تست هوش</li>
                  <li>راهنمای آزمون های ورودی</li>
                  <li>نامه نگاری های اداری به سفارت</li>
                  <li>افزایش دایره لغات مورد نیاز شما</li>
                  <li>آموزش صفر تا صد روند استخدام</li>
                  <li>راهنمای مدارک درسی مورد نیاز شما</li>
                </ul>
              </div>
              <div class="pricing-action">
                <a href="https://t.me/AskAryaSomething" target="_blank">
                  <button class="btn btn-info animation-on-hover">
                    رزرو پکیج
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-12 mb-4">
            <div class="pricing-box hover">
              <div class="pricing-title bg-alpha">
                <!-- <h3 class="titleSize">آلفا</h3> -->
                <h3 class="titleSize">براوو</h3>
              </div>
              <div class="pricing-field">
                <p class="price">۷,۰۰۰,۰۰۰ <span class="toman">تومان</span></p>
                <!-- <p class="py-0 mt-0 smalltext">۱۲ جلسه</p> -->
                <p class="group-text mx-auto">
                  کلاس های گروهی، هر نفر ۳,۲۵۰,۰۰۰ تومان
                </p>
              </div>
              <div class="pricing-features">
                <ul>
                  <li>بحث آزاد</li>
                  <li>تمرين مكالمه</li>
                  <li>يادگيری لغات، تلفظ و گرامر</li>
                  <li>تمرين ليسنينگ و مکالمه ATC</li>
                  <li>آموزش نکات کلیدی مکالمه هوانوردی</li>
                  <li>برگزاری ۲ آزمون در طول ترم</li>
                  <li>گواهی پایان دوره</li>
                </ul>
              </div>
              <div class="pricing-action">
                <a href="https://t.me/AskAryaSomething" target="_blank">
                  <base-button
                    block
                    native-type="submit"
                    class="btn btn-info animation-on-hover"
                  >
                    رزرو پکیج
                  </base-button>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-12 mb-4">
            <div class="pricing-box hover">
              <div class="pricing-title bg-mock">
                <h3 class="titleSize">آزمون ماک</h3>
              </div>
              <div class="pricing-field">
                <p class="price">۳۵۰,۰۰۰ <span class="toman">تومان</span></p>
                <!-- <p class="py-0 my-0 smalltext">آنلاین</p> -->
              </div>
              <div class="pricing-features pt-1">
                <ul>
                  <li>مشاوره تخصصی</li>
                  <li>مکالمه، توصیف عکس و شنیداری</li>
                  <li>آنالیز نقاط ضعف و قوت زبان آموز</li>
                </ul>
              </div>
              <div class="pricing-action">
                <a href="https://t.me/AskAryaSomething" target="_blank">
                  <base-button
                    block
                    native-type="submit"
                    class="btn btn-info animation-on-hover"
                  >
                    رزرو پکیج
                  </base-button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.private-classes-background {
  // background-color: var(--hero-bg) !important;
  background-color: var(--classes-bg) !important;
  min-height: 80vh !important;
}

.btn {
  font-weight: inherit;
  font-size: 13px;
  width: 100%;
  padding: 9px 0;
  background: #027fc2 !important;
  color: var(--color-white) !important;
  border: 1px solid #0476b4 !important;
  font-family: IranSansBold !important;
}

.page-title {
  font-size: 1.5rem;
  color: var(--classes-title) !important;
  font-family: IranSansBold !important;
  text-align: center !important;
  padding-bottom: 2em;
}

.bold {
  font-family: IranSansBold !important;
}

li,
ul {
  margin: 0;
  padding: 0;
}

.private-classes {
  .pricing {
    position: relative;
  }

  .pricing-box {
    position: relative;
    border-radius: 16px !important;
    text-align: center;
    background-color: #fff !important;
    // border: 1px solid #e2e8f0 !important;
    box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a !important;
  }

  .pricing-title {
    background-color: rgb(68, 68, 129);
    border-radius: 16px 16px 0 0;
  }

  .titleSize {
    color: #fff !important;
    font-size: 1.23rem !important;
    font-family: IranSansBold !important;
    padding: 12px 0 9px 0;
  }

  .pricing-field {
    position: relative;
    padding: 16px 0 6px 0 !important;
    color: #fff;
  }

  .price {
    font-size: 2rem !important;
    color: #2e2e2e;
    font-family: IranSansBold !important;
    font-weight: normal !important;
    letter-spacing: -0.03em !important;
    padding-top: 0;
    margin: 0 !important;
  }

  .toman {
    font-family: IranSans;
    font-size: 1rem;
  }

  .pricing-features {
    border-bottom: 1px solid rgba(194, 194, 194, 0.212);
  }

  .pricing-features ul {
    margin: 0;
    padding: 10px 0;
    list-style: none;
  }

  .pricing-features li {
    padding: 6px 0;
    font-size: 0.98rem !important;
    color: rgb(63, 63, 63);
    font-family: IranSans;
  }

  .pricing-action {
    padding: 10px 15px;
  }

  .hover {
    transition: 0.4s;
    border-radius: 5px;
    transform: translateY(0);
  }

  .hover:hover {
    box-shadow: 0 10px 30px -5px rgba(136, 136, 136, 0.4);
    transform: translateY(-5px);
    cursor: pointer;
  }

  p {
    font-size: 17px;
    padding-top: 13px;
  }

  .smalltext {
    font-size: 17px;
    color: rgb(88, 88, 88);
    font-family: IranSans;
  }

  .bg-alpha {
    // background-color: #ff9900 !important;
    background-color: #22c55e !important;
  }

  .bg-mock {
    background-color: #ff0066 !important;
  }

  .bg-bronze {
    background-color: #4ecdc4 !important;
  }

  .bg-immigration {
    // background-color: #00c875 !important;
    background-color: #facc15 !important;
  }
}

.group-text {
  font-size: 12px !important;
  padding: 0.4rem 0.6rem !important;
  width: 70%;
  margin-top: 1.2em !important;
  color: #16a34a !important;
  text-align: center !important;
  font-family: IranSansBold !important;
  border-radius: 5px !important;
  background-color: #bbf7d0 !important;
  border: 2px solid #a8f0c1;
}

@media (min-width: 1400px) {
  .pricing-box {
    width: 330px !important;
  }
}

@media (min-width: 900px) {
  .pricing-features li {
    font-size: 1.06rem !important;
  }
}

@media only screen and (max-width: 991px) {
  .private-classes {
    padding: 0 28% !important;
  }

  .custom-title {
    padding-bottom: 2em !important;
  }
}

@media only screen and (max-width: 750px) {
  .private-classes {
    padding: 0 16% !important;
  }
}

@media only screen and (max-width: 500px) {
  .private-classes {
    padding: 0 7% !important;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .pricing-features li {
    font-size: 1.2em !important;
  }
}
</style>
