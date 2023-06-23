<template>
  <div dir="rtl">
    <base-navbar>
      <template #outside-wrapper>
        <!-- <ThemeButton /> -->
      </template>
    </base-navbar>
    <slot />
    <div id="bottom-of-page"></div>
    <base-footer />
  </div>
</template>
