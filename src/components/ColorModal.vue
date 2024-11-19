<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia'
import { colorBuilderStore } from '../store/'
import { useCopyPaleta } from '../composables/use-copy-pallete'

const emits = defineEmits(["close-modal"])

const store = colorBuilderStore()
const { pallet } = storeToRefs(store)

const { copy_lista, mensaje, mensaje_box, copyPaleta } = useCopyPaleta()

const closeModal = () => emits("close-modal")

</script>

<template>
    <div class="color-modal">
        <button class="btn-close" @click="closeModal">X</button>
        <ul class="color-modal__list" ref="copy_lista">
            <li v-for="(color, index) in pallet" :key="color" class="color-modal__item">
                {{ `--color-${index + 1}: ${color}` }}
            </li>
        </ul>
        <button class="btn-copy color-button" @click="copyPaleta">Copiar paleta</button>
        <Transition name="mensaje">
            <p v-if="mensaje" class="mensaje_box" :class="'mensaje_box--' + mensaje_box.clase">
                {{ mensaje_box.texto }}
            </p>
        </Transition>
    </div>
</template>