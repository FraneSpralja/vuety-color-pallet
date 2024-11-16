<script setup>
import { colorBuilderStore } from '../store/'
import { storeToRefs } from 'pinia'

const emits = defineEmits(["show-colors"])

const store = colorBuilderStore()

const { pallet } = storeToRefs(store)
const showColors = () => emits("show-colors")
const reset = () => {
    store.$reset()
}
</script>

<template>
    <section v-if="pallet" class="color-list">
        <h2>Tu paleta de colores</h2>
        <div v-if="pallet.length" class="color-list__colors">
            <div v-for="color in pallet" :key="color" class="color-list__color" :style="{ backgroundColor: color }">
            </div>
        </div>
        <p v-else> Aún no hay colores en tu paleta</p>
        <button class="color-button" @click="showColors" :disabled="pallet.length === 0">Copiar paleta</button>
        <button class="color-button" @click="reset">Limpiar Paleta</button>
    </section>
</template>