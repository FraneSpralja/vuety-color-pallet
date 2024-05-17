<script setup>
    import { computed } from 'vue';

    const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
    <footer class="footer">
        <div class="footer__grid">
            <div class="footer__start">
                Build and Design by Frane Spralja {{ currentYear }}
            </div>
            <div class="footer__end">
                <a href="mailto:spralja.frane@gmail.com">Write me an email</a>
            </div>
        </div>
    </footer>
</template>