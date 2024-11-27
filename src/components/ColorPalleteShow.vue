<script setup>
import { storeToRefs } from 'pinia';
import { colorSaveStore } from '../store/colorSaveStore'

const { allPalletes } = storeToRefs(colorSaveStore())
const { removePallete } = colorSaveStore()

const emits = defineEmits(['copy-pallete'])

const copyPallete = (id) => {

    const pallete = allPalletes.value.find(item => item.id === id)

    emits('copy-pallete', pallete)
}

</script>

<template>

    <div class="color-show">
        <div v-for="pallete in allPalletes" :key="pallete.name" class="color-show__show">
            <h3 class="color-show__name">
                {{ pallete.name }}
            </h3>
            <div class="color-show__content">
                <template v-for="color in pallete.colors" :key="color">
                    <div class="color-show__box">
                        <div class="color-show__color" :style="{ backgroundColor: color }">
                        </div>
                        <small>{{ color }}</small>
                    </div>
                </template>
            </div>
            <div class="color-show__actions">
                <button class="color-button show-button color-button--copy"
                    @click="copyPallete(pallete.id)"><span></span></button>
                <button class="color-button show-button color-button--trash"
                    @click="removePallete(pallete.id)"><span></span></button>
            </div>
        </div>
    </div>

</template>