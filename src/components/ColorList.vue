<script setup>
import { colorBuilderStore } from '../store/colorBuilderStore'
import { storeToRefs } from 'pinia'
import { colorSaveStore } from '../store/colorSaveStore';

const emits = defineEmits(["show-colors"])

const { resetPallet } = colorBuilderStore()
const { pallet } = storeToRefs(colorBuilderStore())

const showColors = (typeShow) => emits("show-colors", typeShow)

</script>

<template>
    <section v-if="pallet" class="color-list">
        <h2>Tu paleta de colores</h2>
        <div v-if="pallet.length" class="color-list__colors">
            <div v-for="color in pallet" :key="color" class="color-list__color" :style="{ backgroundColor: color }">
            </div>
        </div>
        <p v-else> Aún no hay colores en tu paleta</p>
        <button class="color-button color-button--copy" @click="showColors('copy')"
            :disabled="pallet.length === 0"><span></span></button>
        <button class="color-button color-button--trash" @click="resetPallet"
            :disabled="pallet.length === 0"><span></span></button>
        <button class="color-button color-button--save" @click="showColors('save')"
            :disabled="pallet.length === 0"><span></span></button>
    </section>
</template>