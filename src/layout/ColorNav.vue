<template>
    <nav class="color-nav">
        <RouterLink :to="{ name: 'home' }" class="color-nav__link">Home</RouterLink>
        <RouterLink :to="{ name: 'saved-palletes' }" class="color-nav__link">Mis paletas</RouterLink>
    </nav>
</template>