<template>
  <div>
    <ul>
      <!-- <li
        v-for="color of ['system', 'light', 'dark', 'sepia']"
        :key="color"
        :class="{
          preferred: !$colorMode.unknown && color === $colorMode.preference,
          selected: !$colorMode.unknown && color === $colorMode.value,
        }"
      > -->
      <li
        v-for="color of ['system', 'light', 'dark']"
        :key="color"
        :class="{
          preferred: !$colorMode.unknown && color === $colorMode.preference,
          selected: !$colorMode.unknown && color === $colorMode.value,
        }"
      >
        <component
          :is="`icon-${color}`"
          @click="$colorMode.preference = color"
        />
      </li>
    </ul>
    <!-- <p>
      <ColorScheme placeholder="..." tag="span">
        Color mode: <b>{{ $colorMode.preference }}</b>
        <span v-if="$colorMode.preference === 'system'"
          >&nbsp;(<i>{{ $colorMode.value }}</i> mode detected)</span
        >
      </ColorScheme>
    </p> -->
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0 !important;
  margin: 0 !important;
}
ul li {
  display: inline-block;
  padding: 0 5px !important;
  margin: 0 !important;
}
p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  color: var(--colourpicker-text);
  background-color: transparent !important;
  border: 2px solid var(--colourpicker-border);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -2px;
  border: 2px solid white;
  color: white;
}
.preferred .feather {
  border-color: var(--colourpicker-border);
  // color: var(--color-white);

  /* top: -3px; */
}
.selected .feather {
  color: rgba(255, 255, 255, 0.7);
  border: 2px dashed var(--colourpicker-border);
}
</style>
