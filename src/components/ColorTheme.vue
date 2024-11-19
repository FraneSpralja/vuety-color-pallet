<script setup>
    import { colorBuilderStore } from '../store/colorBuilderStore'
    import { ref } from 'vue';

    const store = colorBuilderStore()

    const theme_mode = ref("Light")
    const changeThemeMode = () => {
        store.changeThemeMode(theme_mode.value)
        if(theme_mode.value.includes("Light")) {
            theme_mode.value = "Dark"
        } else {
            theme_mode.value = "Light"    
        }
    }

</script>

<template>
    <div class="color-theme">
        <button class="theme-button" :class="theme_mode.includes('Light') ? 'theme-dark' : 'theme-light'" @click="changeThemeMode">{{ theme_mode }}</button>
    </div>
</template>