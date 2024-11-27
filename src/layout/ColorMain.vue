<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { colorBuilderStore } from '../store/colorBuilderStore';
import ColorBuilder from '../components/ColorBuilder.vue';
import ColorDroper from '../components/ColorDroper.vue';
import ColorMix from '../components/ColorMix.vue';
import ColorList from '../components/ColorList.vue';
import ColorModal from '../components/ColorModal.vue';

const { pallet } = storeToRefs(colorBuilderStore())

const show_modal = ref(false)
const copy_modal = ref(true)

const showModal = (e) => {
    copy_modal.value = e === 'copy' ? true : false
    show_modal.value = !show_modal.value
}

</script>

<template>
    <main>
        <ColorBuilder />
        <ColorDroper />
        <ColorMix />
        <ColorList @show-colors="showModal" />
    </main>

    <div v-if="show_modal" class="overlay" @click="showModal"></div>
    <ColorModal v-if="show_modal" :copy_modal :pallet @close-modal="showModal" />
</template>