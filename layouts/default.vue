<template>
  <div dir="rtl">
    <div id="top-of-page"></div>
    <base-navbar>
      <template #outside-wrapper>
        <!-- <ThemeButton /> -->
      </template>
    </base-navbar>
    <slot />
    <ScrollToButton />

    <base-footer />
  </div>
</template>
