<script setup>
import { ref } from 'vue';
import { useCopyPaleta } from '../composables/use-copy-pallete';
import ColorPalleteShow from '../components/ColorPalleteShow.vue';
import ColorModal from '../components/ColorModal.vue';

const { } = useCopyPaleta()

const show_modal = ref(false)
const copy_modal = ref(true)
const pallet = ref()

const showModal = () => show_modal.value = !show_modal.value

const openCopyModal = (e) => {
    pallet.value = [...e.colors]

    showModal()
}

</script>

<template>
    <h2>Paletas Guardadas</h2>
    <ColorPalleteShow @copy-pallete="openCopyModal" />

    <div v-if="show_modal" class="overlay" @click="showModal"></div>
    <ColorModal v-if="show_modal" :copy_modal :pallet @close-modal="showModal" />
</template>