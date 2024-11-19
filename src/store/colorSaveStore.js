import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const colorSaveStore = defineStore('color-save', () => {

    const allPalletes = reactive([])

    const savePallete = (pallete) => {
        
    }

    return {
        //State
        allPalletes,

        //Actions
        savePallete,
    }
})