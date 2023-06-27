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
  color: var(--color-white);
  background-color: transparent !important;
  border: 2px solid var(--color-muted);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.preferred .feather {
  border-color: var(--color-muted);
  color: var(--color-white);

  /* top: -3px; */
}
.selected .feather {
  color: var(--color-white);
}
</style>
