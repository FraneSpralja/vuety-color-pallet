<script setup>
import { colorBuilderStore } from '../store/colorBuilderStore'
import { storeToRefs } from 'pinia'

const store = colorBuilderStore()
const { primary_colors } = storeToRefs(store)
</script>

<template>
    <section class="color-builder">
        <div class="color-builder__choose">
            <h2>Colores Bases</h2>
            <div class="color-builder__colors">
                <div v-for="color in primary_colors" :key="color" class="color-builder__color"
                    :class="'color-builder__color--' + color" @click="store.chooseAColor(color)">
                </div>
            </div>
        </div>
    </section>
</template>