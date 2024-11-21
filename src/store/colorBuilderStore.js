import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const colorBuilderStore = defineStore('color-builder', () => {


        const primary_colors = reactive([
            "red",
            "blue",
            "yellow",
            "black",
            "white"
        ])
        const color_position =  ref("first")
        const first_choose_color =  ref("")
        const second_choose_color =  ref("")
        const first_color_number =  ref(null)
        const second_color_number =  ref(null)
        const pallet = ref([])
        const theme = ref("dark")

        const colorPosition = (position) => color_position.value = position

        const chooseAColor = (color) => {
            if(color_position.value.includes("first")) {
                first_choose_color.value = ""
                setTimeout(() => first_choose_color.value = color, 120)
            }
            if(color_position.value.includes("second")) {
                second_choose_color.value = ""
                setTimeout(() => second_choose_color.value = color, 120)
            }
        }

        const selectColorNumber = (number, place) => {
            if(place.includes("first")) first_color_number.value = number 
            if(place.includes("second")) second_color_number.value = number
        }

        const addColorToPallet = (color) => {
            const colors = [ ...pallet.value ]
            colors.push(color)
            pallet.value = [ ...colors ]
        }

        const resetPallet = () => {
            pallet.value = []
        }

        const changeThemeMode = (mode) => theme.value = mode.toLowerCase()


        return {
            // state
            first_choose_color,
            second_choose_color,
            first_color_number,
            second_color_number,
            primary_colors,
            pallet,
            theme,

            //actions
            chooseAColor,
            colorPosition,
            selectColorNumber,
            addColorToPallet,
            resetPallet,
            changeThemeMode,
        }
})