<script setup>
  import ColorBuilder from './components/ColorBuilder.vue';
  import ColorDroper from './components/ColorDroper.vue';
  import ColorMix from './components/ColorMix.vue';
  import ColorList from './components/ColorList.vue';
  import ColorModal from './components/ColorModal.vue';
  import ColorFooter from './layout/ColorFooter.vue';
  import ColorTheme from './components/ColorTheme.vue';
  import { colorBuilderStore } from './store/'
  import { storeToRefs } from 'pinia'
  import { ref, watch } from 'vue';


  const store = colorBuilderStore()
  const { theme } = storeToRefs(store)

  const show_modal = ref(false)
  const reset_colors = ref(false)

  const showModal = () => show_modal.value = !show_modal.value
  const setThemeOnApp = () => document.documentElement.setAttribute("data-theme", theme.value)

  watch(theme, (newValue) => {
    if(newValue) setThemeOnApp()
  })
  
  setThemeOnApp()
</script>

<template>
  <div>
    <header>
      <ColorTheme />
      <h1 class="your-color__title">Vuety Color Pallet</h1>
    </header>
    <main>
      <ColorBuilder />
      <ColorDroper />
      <ColorMix  
        :reset_colors
      />
      <ColorList 
      @show-colors="showModal"
      @reset-colors=""
      />
    </main>
    <ColorFooter />

    <div v-if="show_modal" class="overlay" @click="showModal"></div>
    <ColorModal v-if="show_modal" @close-modal="showModal"/>
  </div>
</template>
