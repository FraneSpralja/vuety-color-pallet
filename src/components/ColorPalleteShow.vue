<script setup>
import { storeToRefs } from 'pinia';
import { colorSaveStore } from '../store/colorSaveStore'

const { allPalletes } = storeToRefs(colorSaveStore())
</script>

<template>

    <div class="color-show">
        <div v-for="pallete in allPalletes" :key="pallete.name" class="color-show__box">
            <h3 class="color-show__name">
                {{ pallete.name }}
            </h3>
            <div v-for="color in pallete.colors" :key="color" class="color-show__color"
                :style="{ backgroundColor: color }">
            </div>
        </div>
    </div>

</template>