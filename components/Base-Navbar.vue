<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand large" to="/">
        <img
          src="~public/img/learn-aviation-logo.svg"
          width="45"
          height="45"
          alt="Learn Aviation Logo"
        />
      </NuxtLink>

      <a class="custom-nav-link mobile" href="/">
        <img
          src="~public/img/learn-aviation-logo.svg"
          width="45"
          height="45"
          alt="Learn Aviation Logo"
      /></a>

      <input
        class="btn navbar-toggler d-lg-none"
        type="checkbox"
        id="navToggle"
      />
      <label
        class="navbar-toggler-icon d-lg-none"
        for="navToggle"
        @click="navOpen = !navOpen"
      ></label>

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
  // box-shadow: 0 4px 2px -2px hsla(0, 0%, 60%, 0.5) !important;
  border-bottom: 1px solid #0f172a1a !important;
}

.custom-nav-link {
  font-family: IranSans;
  font-size: 0.9rem !important;
  text-decoration: none;
  transition: color 0.3s ease;
  padding-right: 1rem !important;
  color: black;
}

.custom-nav-link:hover {
  color: #007fc2;
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

.navbar-toggler {
  display: none !important;
}

@media (min-width: 991px) {
  .navbar {
    height: 55px !important;
  }

  .nav-item {
    margin-right: 1.6em !important;
  }
  .mobile {
    display: none !important;
  }
}

/* Hide the navbar when not expanded on small screens */
@media (max-width: 991px) {
  .collapse:not(.show) {
    display: none;
  }

  .nav-item {
    padding: 14px 0 !important;
    margin-right: 0 !important;
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
