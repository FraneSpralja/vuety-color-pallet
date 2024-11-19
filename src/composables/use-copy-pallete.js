import { reactive, ref } from 'vue';

export const useCopyPaleta = () => {

    const mensaje = ref(false)
    const mensaje_box = reactive({})
    const copy_lista = ref();

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

    return {
        //data
        copy_lista,
        mensaje,
        mensaje_box,

        // functions
        copyPaleta
    }
}