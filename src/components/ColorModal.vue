<script setup>
    import { colorBuilderStore } from '../store/'
    import { storeToRefs } from 'pinia'

    const emits = defineEmits(["close-modal"])

    const store = colorBuilderStore()
    const { pallet } = storeToRefs(store)

    const closeModal = () => emits("close-modal")
</script>

<template>
    <div class="color-modal">
        <button @click="closeModal">X</button>
        <ul class="color-modal__list">
            <li v-for="(color, index) in pallet" :key="color" class="color-modal__item">
                {{ `--color-${index+1}: ${color}` }}
            </li>
        </ul>
    </div>
</template>