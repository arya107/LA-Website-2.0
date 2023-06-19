<template>
  <section dir="rtl" class="hero-content-homepage">
    <div class="custom-padding">
      <div class="container">
        <div class="text-section">
          <div class="icon">
            <font-awesome-icon :icon="['fab', 'avianex']" />
          </div>
          <h1 class="hero-title">آموزش مطالب خلبانی با آریا درودیان.</h1>
          <p class="hero-subtitle py-2">
            هدف ما آموزش اصولی زبان هوانوردی و پیشرفت سطح دانش زبان شما با ارائه
            مقاله های به روز هوانوردی پست های آموزشی رایگان، پادکست های هوانوردی
            و برگزاری کلاس های خصوصی و نمیه خصوصی و ماک تست است.
          </p>
          <div class="btn-r pt-2">
            <nuxt-link to="classes">
              <base-button native-type="submit" class="btn animation-on-hover">
                <span class="pl-2"
                  ><font-awesome-icon :icon="['fas', 'book-reader']"
                /></span>
                کلاس های خصوصی
              </base-button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero-content-homepage {
  // background-color: #6600ff;
  // background-color: #050539 !important;
  background-color: #007fc2 !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='0.07' fill='%23FFFFFF' cx='45' cy='45' r='5'/%3E%3Cg fill='%23FFFFFF' fill-opacity='0.09'%3E%3Ccircle cx='0' cy='90' r='5'/%3E%3Ccircle cx='90' cy='90' r='5'/%3E%3Ccircle cx='90' cy='0' r='5'/%3E%3Ccircle cx='0' cy='0' r='5'/%3E%3C/g%3E%3C/svg%3E");

  .icon {
    font-size: 4.2rem !important;
    color: #fff;
    display: block;
    text-align: center;
  }

  .hero-title {
    font-size: 3.1rem !important;
    line-height: 1.3em;
    font-family: IranSansBold !important;
    color: #fff !important;
    margin: 0;
    text-align: center;
  }

  .hero-subtitle {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.9);
    font-family: IranSans !important;
    line-height: 1.9em;
    padding-left: 18%;
    padding-right: 18%;
    padding-top: 1.9em !important;
    text-align: center;
    margin: 0;
  }

  .btn {
    background-color: transparent;
    color: white;
    font-size: 0.9rem;
    border: 1px dashed rgba(255, 255, 255, 0.9) !important;
    border-radius: 7px !important;
    box-shadow: 2px 7px 12px 3px rgba(100, 100, 100, 0.1);
    margin: 0;
    margin-top: 1.5em !important;
  }

  .btn:hover {
    background-color: #fff !important;
    color: #050538;
    border: 1px dashed #fff !important;
  }

  .btn-r {
    text-align: center;
    padding-bottom: 2em;
  }
}

.custom-padding {
  display: flex !important;
  align-items: center !important;
  padding: 0.3em 0 !important;
}

.text-section {
  padding-top: 20px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

@media screen and (max-width: 768px) {
  .hero-content-homepage {
    .hero-title {
      font-size: 2.1rem !important;
      color: #fff !important;
      text-align: right;
      margin: 0;
    }

    .hero-subtitle {
      font-size: 1em;
      color: rgb(236, 236, 236);
      padding-left: 0.1%;
      padding-right: 0.1%;
      margin: 0;
      text-align: center;
    }
  }

  .icon {
    font-size: 5.1em;
    margin: 0;
  }

  .text-section {
    padding-top: 3px;
  }

  .btn {
    font-size: 0.9rem;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 678px) {
  .hero-title {
    text-align: center !important;
  }

  .custom-padding {
    padding: 1rem 0 !important;
  }

  .btn-r {
    text-align: center;
    padding-bottom: 1em;
  }
}
</style>
