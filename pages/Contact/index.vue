<template>
  <div class="background contact-section">
    <div class="container">
      <h1 class="title text-center pt-5">تماس با ما</h1>
      <p class="subtitle text-center">
        راه ارتباطی ما فقط از این سه طریق می باشد.
      </p>

      <div class="card">
        <div class="iconSection">
          <p class="contact-item pt-4">
            <a href="https://t.me/AskAryaSomething" class="li-ic"
              >AskAryaSomething@</a
            >
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'telegram']" />
            </span>
          </p>

          <p class="contact-item pt-1">
            <a
              href="https://api.whatsapp.com/send?phone=989032227796"
              class="fb-ic"
              >09032227796</a
            >

            <!-- <a href="tel:+989032227796" class="fb-ic">09032227796</a> -->
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'whatsapp-square']" />
              <!-- <font-awesome-icon :icon="['fa', 'phone']" /> -->
            </span>
          </p>

          <p class="contact-item pt-1">
            <a href="mailto:info@ask-arya.com" class="fb-ic"
              >info@ask-arya.com</a
            >
            <span class="icon">
              <font-awesome-icon :icon="['fa', 'envelope']" />
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `تماس با ما | Learn Aviation`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'تماس با ما | Learn Aviation',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.background {
  background-color: var(--hero-bg) !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='0.05' fill='%23FFFFFF' cx='45' cy='45' r='5'/%3E%3Cg fill='%23FFFFFF' fill-opacity='0.05'%3E%3Ccircle cx='0' cy='90' r='5'/%3E%3Ccircle cx='90' cy='90' r='5'/%3E%3Ccircle cx='90' cy='0' r='5'/%3E%3Ccircle cx='0' cy='0' r='5'/%3E%3C/g%3E%3C/svg%3E");
  height: calc(100vh - 108px);
  // min-height: 100vh !important;
}

.title {
  font-size: 1.8rem !important;
  font-family: IranSansBold !important;
  color: var(--color-white);
}

.subtitle {
  font-size: 1.1rem !important;
  color: var(--color-white);
  padding-top: 6px;
  margin-bottom: 6em !important;
}

.iconSection {
  padding: 1rem;
  padding-left: 2em;
}

.card {
  border-radius: 15px;
  padding-right: 2rem;
  width: 500px;
  margin: auto;
  background-color: var(--hero-bg) !important;
  color: var(--hero-text) !important;
  border: 4px dashed var(--hero-border) !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.contact-item {
  display: flex !important;
  align-items: center !important;
  justify-content: end !important;
  // text-align: left !important;
}

.iconSection a,
.iconSection p {
  color: var(--hero-text) !important;
  font-size: 1.6rem;
  text-align: left;
  font-family: IranSans !important;
  text-decoration: none !important;
}

.contact-section .svg-inline--fa {
  color: var(--hero-text) !important;
  font-size: 1.4em;
  margin-right: 15px;
}

.iconSection a:hover {
  color: #fbbc39 !important;
  text-decoration: underline !important;
}

@media (max-width: 768px) {
  .background {
    min-height: 72vh;
  }

  .iconSection a,
  .iconSection i,
  .iconSection p {
    font-size: 1.45em;
    text-align: left;
  }

  .iconSection {
    // padding: 1rem;
    padding-left: 1.4em;
  }

  .subtitle {
    font-size: 1rem;
    // color: rgb(218, 218, 218) !important;
    color: var(--color);
  }
}

@media (max-width: 550px) {
  .background {
    min-height: 85vh;
  }

  .title {
    font-size: 2em;
  }

  .subtitle {
    font-size: 1em;
    margin-bottom: 7em;
  }

  .card {
    padding-right: 1rem;
    width: 300px;
  }

  .iconSection a,
  .iconSection i,
  .iconSection p {
    font-size: 1.1em;
    text-align: left;
  }
}
</style>
