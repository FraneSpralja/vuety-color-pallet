<script setup>
import { colorBuilderStore } from '../store/'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue';

const props = defineProps({
    reset_colors: {
        type: Boolean
    }
})

const store = colorBuilderStore()
const color_box = ref()
const computed_color = ref("")
const showColor = ref(false)

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

const generateColor = () => {
    showColor.value = true
    const color = window.getComputedStyle(color_box.value).backgroundColor
    if(color === "rgba(0, 0, 0, 0)") {
        computed_color.value = color
    } else {
        let numbers = color.replace("color(srgb ", "").replace(")", "").replace("/ ", "").split(" ")
        const cleanNumbers = [];
        let opacity;
        
        for(let i = 0; i < numbers.length; i++) {
            let num = Number(numbers[i])
            if(numbers.length < 4) {
                cleanNumbers.push(parseInt(num*250))
            }
            if(numbers.length === 4) {
                if(i !== 3) cleanNumbers.push(parseInt(num*250))
                if(i === 3) opacity = Number(numbers[3])
            }
        }
    
        if(numbers.length === 4) {
            cleanNumbers.splice(3, 0, "/")
            cleanNumbers.push(opacity)
            computed_color.value = `rgb(${cleanNumbers.join(" ")})`
        } else {
            computed_color.value = `rgb(${cleanNumbers.join(" ")})`
        }
    }

}
</script>

<template>
    <section class="color-mix">
        <h2>color mix</h2>
        <div class="color-mix__colors">
            <div class="color-mix__color" ref="color_box"></div>
        </div>
        <p class="color-mix__generate">{{ computed_color }}</p>
        <button class="color-button" @click="store.addColorToPallet(computed_color)">Add color to pallet</button>
    </section>
</template>