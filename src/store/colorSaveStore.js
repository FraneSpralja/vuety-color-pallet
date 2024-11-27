import { defineStore } from 'pinia';
import { ref } from 'vue';

export const colorSaveStore = defineStore('color-save', () => {

    const allPalletes = ref([])

    const savePallete = (pallete) => {
        const { name } = pallete
        const palletes = [ ...allPalletes.value ]

        pallete.id = Date.now()

        if(name === "Nombre de la paleta") {
            pallete.name = `pallete-${palletes.length + 1}`
        }

        palletes.push(pallete)
        allPalletes.value = [ ...palletes ]

        localStorage.setItem('palletes', JSON.stringify(palletes))
    }

    const getAllPalletes = () => {
        const palletes = localStorage.getItem('palletes')

        if(!palletes) {
            return
        }

        allPalletes.value =  [  ...JSON.parse(palletes) ]
    }

    const removePallete = (id) => {
        const palletes = [ ...allPalletes.value ]

        const cleanPalletes = palletes.filter(item => item.id !== id)

        allPalletes.value = [ ...cleanPalletes ]

        localStorage.setItem('palletes', JSON.stringify(allPalletes.value))
    }

    return {
        //State
        allPalletes,

        //Actions
        getAllPalletes,
        savePallete,
        removePallete,
    }
})