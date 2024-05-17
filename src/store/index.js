import { defineStore } from 'pinia';

export const colorBuilderStore = defineStore('color-builder', {
    state: () => ({
        primary_colors: [
            "red",
            "blue",
            "yellow",
            "black",
            "white"
        ],
        color_position: "first",
        first_choose_color: "",
        second_choose_color: "",
        first_color_number: null,
        second_color_number: null,
        pallet: [],
        monochrome: false,
        theme: "dark"
    }),

    actions: {
        colorPosition(position) { this.color_position = position },
        chooseAColor(color) {
            if(this.color_position.includes("first")) {
                this.first_choose_color = ""
                setTimeout(() => this.first_choose_color = color, 120)
            }
            if(this.color_position.includes("second")) {
                this.second_choose_color = ""
                setTimeout(() => this.second_choose_color = color, 120)
            }
        },
        selectColorNumber(number, place) {
            if(place.includes("first")) this.first_color_number = number 
            if(place.includes("second")) this.second_color_number = number
        },
        addColorToPallet(color) {
            const colors = [ ...this.pallet ]
            colors.push(color)
            this.pallet = [ ...colors ]
        },
        changeThemeMode(mode) {
            this.theme = mode.toLowerCase()
        }
    }
})