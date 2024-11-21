<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia'
import { colorBuilderStore } from '../store/colorBuilderStore'
import { useCopyPaleta } from '../composables/use-copy-pallete'
import { colorSaveStore } from '../store/colorSaveStore';

const emits = defineEmits(["close-modal"])

defineProps({
    copy_modal: Boolean
})

const { pallet } = storeToRefs(colorBuilderStore())

const { savePallete } = colorSaveStore()

const { copy_lista, mensaje, mensaje_box, copyPaleta } = useCopyPaleta()

const palleteName = ref("Nombre de la paleta")

const closeModal = () => emits("close-modal")

const saveColors = (pallete) => {

    savePallete(pallete)
    mensaje.value = true
    mensaje_box.clase = "success"
    mensaje_box.texto = "La paleta se ha guardado correctamente"

    setTimeout(() => {
        mensaje.value = false
        closeModal()
    }, 4000)
}

</script>

<template>
    <div class="color-modal">
        <button class="btn-close" @click="closeModal">X</button>
        <input v-if="!copy_modal" class="color-modal__input" type="text" v-model="palleteName">
        <ul class="color-modal__list" ref="copy_lista">
            <li v-for="(color, index) in pallet" :key="color" class="color-modal__item">
                {{ `--color-${index + 1}: ${color}` }}
            </li>
        </ul>
        <button v-if="copy_modal" class="color-button modal-button color-button--copy"
            @click="copyPaleta"><span></span></button>
        <button v-else class="color-button modal-button color-button--save"
            @click="saveColors({ name: palleteName, colors: pallet })"><span></span></button>
        <Transition name="mensaje">
            <p v-if="mensaje" class="mensaje_box" :class="'mensaje_box--' + mensaje_box.clase">
                {{ mensaje_box.texto }}
            </p>
        </Transition>
    </div>
</template>