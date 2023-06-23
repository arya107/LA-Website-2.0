<!-- ./components/content/InfoBox.vue -->

<script setup>
// import icons from HeroIcons
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
  ExclamationCircleIcon,
} from '@heroicons/vue/24/solid';

// define props in <script>
const props = defineProps(['type']);
</script>

<template>
  <!-- Access `type` prop in Dynamic class  -->
  <div class="info-box d-flex align-items-start p-3 rounded" :class="[type]">
    <!-- Conditionally render icons based on prop -->
    <ExclamationTriangleIcon
      v-if="type == 'warning'"
      class="icon text-warning"
    />
    <ExclamationCircleIcon
      v-else-if="type == 'error'"
      class="icon text-danger"
    />
    <InformationCircleIcon v-else class="icon text-info" />

    <details>
      <summary>
        <!-- Unamed Slot to render component content -->
        <slot />
      </summary>
      <div class="details pt-2">
        <!-- Named ContentSlot component to render rich-text -->
        <ContentSlot :use="$slots.details" unwrap="p"></ContentSlot>
      </div>
    </details>
  </div>
</template>

<style scoped>
.info-box {
  border: 1px solid #ced4da; /* closest to slate-200 */
  color: #6c757d; /* closest to slate-500 */
}

details summary {
  cursor: pointer;
}

details .details {
  font-size: 0.875rem; /* closest to text-sm */
}

.info-box .icon {
  flex-shrink: 0;
}

.info-box.warning {
  background-color: #ffeeba; /* closest to yellow-200 */
  border-color: #ffc107; /* closest to yellow-400 */
  color: #856404; /* closest to yellow-600 */
}

.info-box.error {
  background-color: #f8d7da; /* closest to red-200 */
  border-color: #dc3545; /* closest to red-400 */
  color: #721c24; /* closest to red-600 */
}
</style>
