<template>
  <div class="background contact-section">
    <div class="container">
      <h1 class="title text-center pt-5">تماس با ما</h1>
      <p class="subtitle text-center">
        راه ارتباطی ما فقط از این سه طریق می باشد.
      </p>

      <div class="card d-flex align-items-center justify-content-center">
        <div class="iconSection">
          <p class="pt-3">
            <a href="https://t.me/AskAryaSomething" class="li-ic"
              >AskAryaSomething@</a
            >
            <span class="icon">
              <font-awesome-icon :icon="['fab', 'telegram']" />
            </span>
          </p>
          <p class="pt-1">
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
          <p class="pt-1">
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
  // background-color: #6600ff;
  // background-color: #030437;
  // background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23050651' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23050651'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  background-color: #007fc2 !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='9' viewBox='0 0 90 90'%3E%3Ccircle fill-opacity='0.07' fill='%23FFFFFF' cx='45' cy='45' r='5'/%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Ccircle cx='0' cy='90' r='5'/%3E%3Ccircle cx='90' cy='90' r='5'/%3E%3Ccircle cx='90' cy='0' r='5'/%3E%3Ccircle cx='0' cy='0' r='5'/%3E%3C/g%3E%3C/svg%3E");
  height: calc(100vh - 90px);
  // min-height: 100vh !important;
}

.title {
  font-size: 1.8rem !important;
  font-family: IranSansBold !important;
  // color: rgb(255, 255, 255) !important;
  color: var(--color);
}

.subtitle {
  font-size: 1.1rem !important;
  // color: rgb(247, 247, 247) !important;
  color: var(--color);

  padding-top: 6px;
  margin-bottom: 6em !important;
}

.iconSection {
  padding: 1rem;
  padding-left: 2em;
}

// .card-section {
//   margin: 0;
//   margin-top: 5rem;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }

.card {
  border-radius: 12px;
  padding-right: 2rem;
  width: 550px;
  margin: auto;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);
}

.iconSection a,
.iconSection p {
  // color: #030437 !important;
  // color: #007fc2 !important;
  color: var(--color);

  font-size: 1.4em;
  text-align: left;
  font-family: IranSans !important;
}

.contact-section .svg-inline--fa {
  // color: #030437 !important;
  // color: #007fc2 !important;
  color: var(--color);

  font-size: 1.4em;
  margin-right: 15px;
}

.iconSection a:hover {
  // color: #00486f !important;
  color: var(--color);

  text-decoration: none !important;
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
