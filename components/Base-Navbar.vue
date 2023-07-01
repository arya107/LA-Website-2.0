<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand large" to="/">
        <img
          src="~public/img/learn-aviation-logo.svg"
          width="40"
          height="40"
          alt="Learn Aviation Logo"
        />
      </NuxtLink>

      <a class="custom-nav-link mobile" href="/">
        <img
          src="~public/img/learn-aviation-logo.svg"
          width="40"
          height="40"
          alt="Learn Aviation Logo"
      /></a>

      <!-- <input
        class="btn navbar-toggler d-lg-none"
        type="checkbox"
        id="navToggle"
      /> -->

      <label
        class="navbar-toggler-icon d-lg-none"
        for="navToggle"
        @click="navOpen = !navOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div class="collapse navbar-collapse" :class="{ show: navOpen }">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <NuxtLink class="custom-nav-link large" to="/">خانه</NuxtLink>
            <a class="custom-nav-link mobile" href="/">خانه</a>
          </li>

          <li class="nav-item">
            <NuxtLink class="custom-nav-link large" to="/learn">
              اتاق آموزش
            </NuxtLink>
            <a class="custom-nav-link mobile" href="/learn"> اتاق آموزش</a>
          </li>

          <li class="nav-item">
            <NuxtLink class="custom-nav-link large" to="/classes">
              دوره های خصوصی
            </NuxtLink>
            <a class="custom-nav-link mobile" href="/classes">
              دوره های خصوصی</a
            >
          </li>

          <li class="nav-item">
            <NuxtLink class="custom-nav-link large" to="/blog">مقالات</NuxtLink>
            <a class="custom-nav-link mobile" href="/blog">مقالات</a>
          </li>

          <li class="nav-item">
            <NuxtLink class="custom-nav-link large" to="/faq">
              سوالات متداول
            </NuxtLink>
            <a class="custom-nav-link mobile" href="/faq"> سوالات متداول </a>
          </li>

          <li class="nav-item">
            <NuxtLink class="custom-nav-link large" to="/contact">
              تماس با ما
            </NuxtLink>
            <a class="custom-nav-link mobile" href="/contact"> تماس با ما </a>
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

<style lang="scss">
.navbar {
  border-bottom: 1px solid #0f172a1a !important;
  background-color: var(--navbar-bg) !important;
}

.custom-nav-link {
  font-family: IranSans;
  font-size: 0.9rem !important;
  text-decoration: none;
  transition: color 0.2s ease;
  padding-right: 1rem !important;
  color: var(--navbar-text) !important;
}

.custom-nav-link:hover {
  color: #007fc2 !important;
  text-decoration: underline !important;
}

.navbar-toggler {
  display: none !important;
  border: 1px solid white;
}

@media (max-width: 991px) {
  // .navbar-toggler {
  //   display: block !important;
  // }
}

.navbar-toggler-icon {
  background-image: none !important;
  span {
    display: block;
    height: 3px;
    background-color: var(--navbar-text);
    margin: 5px 0;
  }
}

// #navToggle {
//   position: absolute;
//   clip: rect(0, 0, 0, 0);
//   pointer-events: none;
//   color: var(--navbar-text) !important;
// }

#navToggle + label {
  cursor: pointer;
}

#navToggle:checked ~ .collapse {
  display: block;
}

.collapse {
  transition: height 0.3s ease;
}

.navbar-toggler {
  display: none !important;
}

@media (min-width: 991px) {
  .navbar {
    height: 55px !important;
  }

  // .navbar-toggler-icon span {
  //   display: none !important;
  // }

  .nav-item {
    margin-right: 1.6em !important;
  }
  .mobile {
    display: none !important;
  }
}

@media (max-width: 991px) {
  .collapse:not(.show) {
    display: none;
  }

  .nav-item {
    padding: 14px 0 !important;
    margin-right: 0 !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .custom-nav-link {
    font-size: 1.05rem !important;
  }

  .ms-auto {
    padding-right: 15px !important;
  }

  .large {
    display: none !important;
  }
}
</style>
