<!-- ./pages/blog/index.vue -->

<template>
  <main class="page">
    <div class="hero container">
      <h1 class="page-title">
        مقالات آموزشی
        <span class="page-subtitle"
          >مقالات به‌روز و کاربردی برای افزایش سطح دانش شما.</span
        >
      </h1>
    </div>

    <section class="page-section">
      <Tags />

      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', 'tags', '_path', 'img'],
          where: {
            tags: {
              $contains: filter,
            },
          },
          $sensitivity: 'base',
        }"
      >
        <template v-slot="{ list }">
          <ul class="list-unstyled mt-4 container">
            <li
              v-for="article in list"
              :key="article._path"
              class="single-article"
            >
              <NuxtLink :to="article._path">
                <div class="container">
                  <div class="row">
                    <div class="col-2">
                      <img
                        :src="`/${article.img}`"
                        :alt="article.title"
                        class="article-img"
                      />
                    </div>

                    <div class="col-10">
                      <header>
                        <h1 class="article-title">{{ article.title }}</h1>
                        <p class="article-desc">{{ article.description }}</p>
                        <span
                          class="article-tags"
                          v-for="(tag, n) in article.tags"
                          :key="n"
                        >
                          {{ tag }}
                        </span>
                      </header>
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </template>

        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
</template>

<script setup>
definePageMeta({
  key: (route) => route.fullPath,
});

// get tag query
const {
  query: { tags },
} = useRoute();

const filter = ref(tags?.split(','));

// set meta for page
useHead({
  title: 'All articles',
  meta: [
    { name: 'description', content: "Here's a list of all my great articles" },
  ],
});
</script>

<style lang="scss" scoped>
.page {
  background-color: var(--hero-bg) !important;
  padding-bottom: 2em;
}

.single-article {
  margin-bottom: 1em !important;
  padding: 20px;
  background-color: #e2e8f0;
  border: 1px solid #cbd5e1;
  border-radius: 15px;
  text-align: right !important;
  direction: rtl !important;
  font-family: IranSans !important;
  text-decoration: none !important;

  a {
    text-decoration: none !important;
  }

  .article-img {
    width: 80px !important;
  }
  .article-title {
    font-family: IranSansBold !important;
    font-size: 1.4rem !important;
    text-decoration: none !important;
    color: #2d2d2d;

    &:hover {
      text-decoration: underline !important;
    }
  }

  .article-desc {
    color: #2d2d2d !important;
    text-decoration: none !important;
  }

  .article-tags {
    cursor: pointer;
    border-radius: 1.5rem;
    border-width: 1px;
    border-color: rgb(208 205 255 / 1);
    background-color: #4001ff !important;
    padding: 0.25rem 0.75rem;
    margin: 0 0.1rem;
    font-family: Hepta Slab, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Noto Color Emoji';
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 600;
    color: #d4c6ff !important;
  }
}

.blog-img {
  width: 190px;
  height: 190px;
  border-radius: 10px;
  margin: 0.6em 0 0 0;
}

.article-img {
  display: block;
  padding: 2em 0;
  margin-left: auto;
  margin-right: auto;
  width: 650px;
}

@media screen and (max-width: 768px) {
  .hero {
    min-height: 31vh;
  }

  .page-title {
    padding: 1.2em 0 0 0 !important;
    font-size: 2rem !important;

    .icon {
      font-size: 1.3em;
      padding-bottom: 0.3rem !important;
    }
  }

  .subheader {
    font-size: 1.2rem !important;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .hero {
    min-height: 31vh !important;
  }
}

// BLOG CSS
.blog-page-bg {
  background-color: #fafbfe !important;

  .heading-section {
    padding: 1.3em 0 1em 0;
    margin-bottom: 1.7em;
    background-color: #007fc2 !important;
  }

  .blog-title {
    font-size: 1.4rem !important;
    font-family: IranSansBold !important;
    line-height: inherit !important;
    color: #fff !important;
    text-align: center !important;
    padding-bottom: 0.5em !important;
  }

  .item-section {
    padding-right: 4em;
  }

  .ltr {
    direction: ltr;
    text-align: left;
    font-family: Arial, Helvetica, sans-serif !important;
    font-size: 0.97em;
  }

  .info-items {
    font-size: 1em !important;
    font-family: IranSans;
    padding-top: 3px;
    color: white !important;
    .icon {
      font-size: 1.05rem;
      padding-right: 2.5em;
      padding-left: 0.5em !important;
    }
  }
  span {
    font-size: 1.15em !important;
    color: white !important;
    font-family: IranSans !important;
    padding-right: 6px;
  }

  .item-date {
    display: inline-block;
    direction: rtl;
  }

  .post-categories {
    span {
      &::after {
        display: inline-block;
        padding: 0 0 0 5px;
      }
      &:last-child {
        margin-right: 0.1rem !important;
        &::after {
          display: none;
        }
      }
    }
  }

  .post-title-top {
    font-size: 2.2em;
    font-family: IranSansBold;
    line-height: inherit !important;
    color: #fff !important;
  }
  .post-title {
    text-align: center;
    font-family: IranSansBold;
    padding-bottom: 1em;
    color: rgb(24, 24, 24);
  }

  .main-blog-text {
    // padding: 2em 15% !important;
    padding-top: 2em;
    padding-bottom: 2em;
    max-width: 750px;
    font-size: 1.18em !important;
    line-height: 2.1em !important;
    direction: rtl !important;
    text-align: right;
    font-family: IranSans !important;
    color: rgb(26, 26, 26) !important;
  }

  @media only screen and (max-width: 608px) {
    .main-blog-text {
      padding: 1.5em 1em !important;
      // padding: 2em 7% !important;
    }
  }

  .subtitle {
    font-size: 1.1em;
    font-family: IranSansBold !important;
    padding-bottom: 1em;
  }

  .subtitle2 {
    font-size: 1em;
    font-family: IranSansBold !important;
    padding-top: 1.8em;
  }

  .sticky {
    position: -webkit-sticky;
    position: sticky;
    margin-top: 1em;
    top: 6em;
    padding: 0 1.2em;
  }
  .small-devices {
    display: none;
  }

  @media only screen and (max-width: 678px) {
    .blog-title {
      font-size: 1.7em !important;
    }

    .item-section {
      margin-right: auto !important;
      margin-left: auto !important;
    }

    .info-items {
      font-size: 1em !important;
      margin-bottom: 6px;
    }

    span {
      font-size: 1em !important;
      padding-right: 7px !important;
    }

    .white-content .card:not(.card-white) {
      margin-top: 1.1em;
      background: #ffffff;
      border-radius: 0;
      color: black !important;
    }

    .heading-section {
      border-bottom-left-radius: 1%;
      border-bottom-right-radius: 1%;
    }

    .blog-img {
      width: 230px;
      height: 240px;
    }

    .article-img {
      width: 310px;
    }

    .main-blog-text {
      font-size: 1.1em !important;
      // padding: 0 1.3em !important;
    }

    .sticky {
      display: none !important;
    }
    .small-devices {
      padding: 15px 20%;
      display: block;
    }
  }

  @media (min-width: 1300px) {
    .info-items {
      font-size: 1.1em !important;
    }
    span {
      font-size: 1em !important;
    }
  }
}

// STYLESSSS
</style>
