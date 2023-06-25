<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">
        <img
          src="~public/img/learn-aviation-logo.svg"
          width="45"
          height="45"
          alt="Learn Aviation Logo"
        />
      </NuxtLink>

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
            <NuxtLink class="custom-nav-link" to="/">خانه</NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink class="custom-nav-link" to="/learn">
              اتاق آموزش
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink class="custom-nav-link" to="/classes">
              دوره های خصوصی
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink class="custom-nav-link" to="/blog">مقالات</NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink class="custom-nav-link" to="/faq">
              سوالات متداول
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink class="custom-nav-link" to="/contact">
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

<style lang="scss">
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

/* Hide the navbar when not expanded on small screens */
@media (max-width: 991px) {
  .collapse:not(.show) {
    display: none;
  }
}

/* Custom styles for nav items */
.nav-item {
  margin-right: 10px;
}

.custom-nav-link {
  font-family: IranSans;
  font-size: 1rem !important;
  text-decoration: none;
  transition: color 0.3s ease;
  padding-right: 1rem !important;
  color: black;
}

.custom-nav-link:hover {
  color: #007fc2;
}
</style>
