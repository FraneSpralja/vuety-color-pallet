<script setup>

import ColorNav from './layout/ColorNav.vue';
import ColorFooter from './layout/ColorFooter.vue';
import ColorTheme from './components/ColorTheme.vue';
import { colorBuilderStore } from './store/colorBuilderStore'
import { colorSaveStore } from './store/colorSaveStore';
import { storeToRefs } from 'pinia'
import { watch } from 'vue';

const { theme } = storeToRefs(colorBuilderStore())

const setThemeOnApp = () => document.documentElement.setAttribute("data-theme", theme.value)

watch(theme, (newValue) => {
  if (newValue) setThemeOnApp()
})

const { getAllPalletes } = colorSaveStore()

getAllPalletes()

setThemeOnApp()
</script>

<template>
  <div class="container">
    <header>
      <ColorTheme />
      <h1 class="your-color__title">Vuety Color Pallete</h1>
    </header>

    <ColorNav />

    <RouterView />

    <ColorFooter />
  </div>
</template>
