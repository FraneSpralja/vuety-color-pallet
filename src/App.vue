<script setup>

import ColorMain from './layout/ColorMain.vue';
import ColorFooter from './layout/ColorFooter.vue';
import ColorTheme from './components/ColorTheme.vue';
import { colorBuilderStore } from './store/'
import { storeToRefs } from 'pinia'
import { watch } from 'vue';

const { theme } = storeToRefs(colorBuilderStore())

const setThemeOnApp = () => document.documentElement.setAttribute("data-theme", theme.value)

watch(theme, (newValue) => {
  if (newValue) setThemeOnApp()
})

setThemeOnApp()
</script>

<template>
  <div>
    <header>
      <ColorTheme />
      <h1 class="your-color__title">Vuety Color Pallete</h1>
    </header>

    <ColorMain />

    <ColorFooter />
  </div>
</template>
