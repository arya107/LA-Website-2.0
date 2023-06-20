<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">
        <img
          src="~public/img/learn-aviation-logo.svg"
          width="55"
          alt="Learn Aviation Logo"
        />
      </NuxtLink>

      <input
        class="btn navbar-toggler d-lg-none"
        type="checkbox"
        id="navToggle"
        aria-label="Toggle navigation"
      />
      <label class="navbar-toggler-icon d-lg-none" for="navToggle"></label>

      <div class="collapse navbar-collapse" :class="{ show: navOpen }">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <NuxtLink
              class="custom-nav-link nuxt-link-exact-active pr-custom"
              to="/"
              >خانه</NuxtLink
            >
          </li>

          <li class="nav-item">
            <NuxtLink
              class="custom-nav-link nuxt-link-exact-active pr-custom"
              to="/learn"
            >
              اتاق آموزش
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink
              class="custom-nav-link nuxt-link-exact-active pr-custom"
              to="/classes"
            >
              دوره های خصوصی
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink
              class="custom-nav-link nuxt-link-exact-active pr-custom"
              to="/articles"
              >مقالات</NuxtLink
            >
          </li>

          <li class="nav-item">
            <NuxtLink
              class="custom-nav-link nuxt-link-exact-active pr-custom"
              to="faq"
            >
              سوالات متداول
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink
              class="nav-link custom-nav-link nuxt-link-exact-active pr-custom"
              to="/contact"
            >
              تماس با ما
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const navOpen = ref(false);
</script>

<style lang="scss" scoped>
ul {
  font-family: IranSans !important;
}
/* Hide the input checkbox */
#navToggle {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}

/* Use the label to create a custom toggle button */
#navToggle + label {
  cursor: pointer;
}

/* Show the menu when the checkbox is checked */
#navToggle:checked ~ .collapse {
  display: block;
}

/* Smooth transition */
.collapse {
  transition: height 0.3s ease;
}

/* Hide the navbar when not expanded on small screens */
@media (max-width: 991px) {
  .collapse:not(.show) {
    display: none;
  }
}

/* PREVIOUS NAVBAR STYLES */

.navbar {
  background: #fff !important;
  -webkit-box-shadow: 0 4px 2px -2px hsla(0, 0%, 60%, 0.5) !important;
  box-shadow: 0 4px 2px -2px hsla(0, 0%, 60%, 0.5) !important;
  direction: rtl !important;
}

.custom-nav-link {
  font-size: 0.9rem !important;
}

a {
  color: black !important;
  text-decoration: none !important;
}

a:hover {
  color: #027fc2 !important;
}

/* .nuxt-link-exact-active {
  color: #027fc2 !important;
  font-family: IranSansBold !important;
} */

@media (min-width: 992px) {
  .navbar {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }

  .pr-custom {
    padding-left: 0.4rem !important;
  }

  .pr-custom:first-child {
    padding-right: 3em !important;
  }

  a {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
}

@media (max-width: 992px) {
  .navbar {
    padding-top: 0;
    padding-bottom: 0;
  }

  .navbar-nav {
    padding: 1em 0 0 0 !important;
  }

  .custom-nav-link {
    font-size: 1.15em !important;
    color: rgb(0, 0, 0) !important;
    text-decoration: none;
    text-align: right;
    margin-right: 0 !important;
    padding: 0.5em 1em !important;
    border-bottom: 1px dashed rgb(238, 238, 238);
  }

  .custom-nav-link:last-child {
    border-bottom: none;
  }
}

a {
  color: black;
}
</style>
