<script setup>
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia'
import { colorBuilderStore } from '../store/colorBuilderStore'
import { useGenerateColor } from '../composables/use-generate-color';


const store = colorBuilderStore()
const { computed_color, color_box, generateColor } = useGenerateColor()

const { first_choose_color, second_choose_color, first_color_number, second_color_number } = storeToRefs(store)

watch(first_choose_color, (newValue) => {
    color_box.value.style.setProperty("--color-first", newValue)
    generateColor()
})

watch(second_choose_color, (newValue) => {
    color_box.value.style.setProperty("--color-second", newValue)
    generateColor()
})

watch(first_color_number, (newValue) => {
    color_box.value.style.setProperty("--number-first", `${newValue}%`)
    generateColor()
})

watch(second_color_number, (newValue) => {
    color_box.value.style.setProperty("--number-second", `${newValue}%`)
    generateColor()
})

</script>

<template>
    <section class="color-mix">
        <h2>color mix</h2>
        <div class="color-mix__colors">
            <div class="color-mix__color" ref="color_box"></div>
        </div>
        <p class="color-mix__generate">{{ computed_color }}</p>
        <button class="color-button color-button--add"
            @click="store.addColorToPallet(computed_color)"><span></span></button>
    </section>
</template>