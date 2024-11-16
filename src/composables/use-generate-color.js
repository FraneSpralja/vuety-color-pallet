import { ref } from "vue"

export const useGenerateColor = () => {

    const color_box = ref()
    const computed_color = ref("")

    const generateColor = () => {

        const color = window.getComputedStyle(color_box.value).backgroundColor
        if (color === "rgba(0, 0, 0, 0)") {
            computed_color.value = color
        } else {
            let numbers = color.replace("color(srgb ", "").replace(")", "").replace("/ ", "").split(" ")
            const cleanNumbers = [];
            let opacity;
    
            for (let i = 0; i < numbers.length; i++) {
                let num = Number(numbers[i])
                if (numbers.length < 4) {
                    cleanNumbers.push(parseInt(num * 250))
                }
                if (numbers.length === 4) {
                    if (i !== 3) cleanNumbers.push(parseInt(num * 250))
                    if (i === 3) opacity = Number(numbers[3])
                }
            }
    
            if (numbers.length === 4) {
                cleanNumbers.splice(3, 0, "/")
                cleanNumbers.push(opacity)
                computed_color.value = `rgb(${cleanNumbers.join(" ")})`
            } else {
                computed_color.value = `rgb(${cleanNumbers.join(" ")})`
            }
        }
    
    }

    return {
        // data
        color_box,
        computed_color,

        // functions
        generateColor,
    }
}