<script setup>
    import { colorBuilderStore } from '../store/'
    import { storeToRefs } from 'pinia'
    import { ref, watch } from 'vue';

    const store = colorBuilderStore()
    const { first_choose_color, second_choose_color } = storeToRefs(store)

    const choose = ref("first")
    const value_first = ref("100")
    const value_second = ref("0")

    const chooseColor = (position) => {
        choose.value = position
        store.colorPosition(position)
    }

    const defineValue = (e, place) => store.selectColorNumber(e.target.value, place)

    watch(value_first.value, (newValue) => defineValue(newValue, "first"))
    watch(value_second.value, (newValue) => defineValue(newValue, "second"))
</script>

<template>
    <section class="color-choose">
        <h2>Tus colores</h2>
        <div class="color-choose__colors">
            <div class="color-choose__chooser">
                <label for="first-color" class="color-choose__label">
                    primer color
                    <input type="radio" name="first-color" :checked="choose.includes('first')" @change="chooseColor('first')">
                </label>
                <label for="second-color" class="color-choose__label">
                    segundo color
                    <input type="radio" name="second-color" :checked="choose.includes('second')" @change="chooseColor('second')">
                </label>
            </div>
            <div class="color-choose__box">
                <div class="color-choose__color" :class="first_choose_color ? 'color-choose__color--'+first_choose_color : ''" @click="chooseColor('first')"></div>
                <input class="color-choose__range" type="range" min="0" max="100" @change="defineValue($event, 'first')" v-model="value_first">
                <input class="color-choose__value" v-model="value_first" @change="defineValue($event, 'first')">
            </div>
            <div class="color-choose__box">
                <div class="color-choose__color" :class="second_choose_color ? 'color-choose__color--'+second_choose_color : ''" @click="chooseColor('second')"></div>
                <input class="color-choose__range" type="range" min="0" max="100" @change="defineValue($event, 'second')" v-model="value_second">
                <input class="color-choose__value" v-model="value_second" @change="defineValue($event, 'second')">
            </div>
        </div>
    </section>
</template>