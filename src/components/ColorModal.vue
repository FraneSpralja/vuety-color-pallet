<script setup>
    import { colorBuilderStore } from '../store/'
    import { storeToRefs } from 'pinia'
    import { reactive, ref } from 'vue';

    const emits = defineEmits(["close-modal"])

    const store = colorBuilderStore()
    const { pallet } = storeToRefs(store)

    const copy_lista = ref();
    const mensaje = ref(false)
    const mensaje_box = reactive({})

    const closeModal = () => emits("close-modal")

    const copyPaleta = async() => {
        const lista = copy_lista.value
            .textContent
            .split(")")
            .join(") \n")

        try {
            await navigator.clipboard.writeText(lista)
            mensaje.value = true
            mensaje_box.clase = "success"
            mensaje_box.texto = "La paleta se ha copiado la portapapeles"

            setTimeout(() => mensaje.value = false, 4000)

            } catch (error) {
            mensaje.value = true
            mensaje_box.clase = "error"
            mensaje_box.texto = "hubo un error, limpia la plaeta y vuelve a crearla"

            setTimeout(() => mensaje.value = false, 4000)
        }
    }
</script>

<template>
    <div class="color-modal">
        <button class="btn-close" @click="closeModal">X</button>
        <ul class="color-modal__list" ref="copy_lista">
            <li v-for="(color, index) in pallet" :key="color" class="color-modal__item">
                {{ `--color-${index+1}: ${color}` }}
            </li>
        </ul>
        <button class="btn-copy color-button" @click="copyPaleta">Copiar paleta</button>
        <Transition name="mensaje">
            <p v-if="mensaje" class="mensaje_box" :class="'mensaje_box--'+mensaje_box.clase">
                {{ mensaje_box.texto }}
            </p>
        </Transition>
    </div>
</template>