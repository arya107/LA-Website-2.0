<template>
  <a href="#top-of-page">
    <button class="scroll-to-button">
      <font-awesome-icon :icon="['fas', 'arrow-up']" />
    </button>
  </a>
</template>

<style lang="scss" scoped>
.button {
  border: none !important;
  background-color: transparent !important;
}
.scroll-to-button {
  position: fixed !important;
  bottom: 20px !important;
  left: 20px !important;
  z-index: 99 !important;
  border: none !important;
  outline: none !important;
  cursor: pointer !important;
  padding: 7px !important;
  border-radius: 50% !important;
  width: 40px;
  height: 40px;
  font-size: 20px !important;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.22) !important;
}

.go-to-top:hover {
  background-color: #555 !important; /* Add a dark-grey background on hover */
  color: white !important;
}

@media (max-width: 768px) {
  .go-to-top {
    /* // padding: 0.2em !important; Some padding */
    font-size: 2.6em !important; /* Increase font size */
  }
}
</style>
