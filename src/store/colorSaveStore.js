import { defineStore } from 'pinia';
import { ref } from 'vue';

export const colorSaveStore = defineStore('color-save', () => {

    const allPalletes = ref([])

    const savePallete = (pallete) => {
        const { name, colors } = pallete
        const palletes = [ ...allPalletes.value ]

        if(name === "Nombre de la paleta") {
            pallete.name = `pallete-${palletes.length + 1}`
        }

        palletes.push(pallete)
        allPalletes.value = [ ...palletes ]

        localStorage.setItem('palletes', JSON.stringify(palletes))
    }

    const getAllPalletes = () => {
        const palletes = localStorage.getItem('palletes')

        allPalletes.value =  [  ...JSON.parse(palletes) ]
    }

    return {
        //State
        allPalletes,

        //Actions
        getAllPalletes,
        savePallete,
    }
})