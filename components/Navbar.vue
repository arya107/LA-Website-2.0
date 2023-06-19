<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">Learn Aviation</NuxtLink>

      <input
        class="btn navbar-toggler d-lg-none"
        type="checkbox"
        id="navToggle"
        aria-label="Toggle navigation"
      />
      <label class="navbar-toggler-icon d-lg-none" for="navToggle"></label>

      <div class="collapse navbar-collapse" :class="{ show: navOpen }">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/blog/aviation">About</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/blog/aviation">Courses</NuxtLink>
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

<style scoped>
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
</style>
