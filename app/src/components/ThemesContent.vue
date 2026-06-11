<script setup lang="ts">
import { ref } from 'vue';

const currentTheme = ref(localStorage.getItem('portfolio-theme') || 'dark');

const themes = [
    'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 
    'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 
    'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 
    'acid', 'lemonade', 'night', 'coffee', 'winter', 'dim', 'nord', 'sunset', 'caramellatte', 
    'abyss', 'silk'
];

const selectTheme = (themeName: string) => {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('portfolio-theme', themeName);
    currentTheme.value = themeName;
};
</script>

<template>
    <div class="flex flex-col gap-4 pt-8 w-full max-w-md">
        <label class="text-sm font-medium text-base-content/80 uppercase tracking-wide">Select Theme</label>
        <select 
            :value="currentTheme" 
            @change="selectTheme(($event.target as HTMLSelectElement).value)"
            class="select select-bordered select-primary w-full rounded-xl bg-base-100 text-base-content"
        >
            <option v-for="theme in themes" :key="theme" :value="theme" class="capitalize">
                {{ theme.charAt(0).toUpperCase() + theme.slice(1) }}
            </option>
        </select>
    </div>
</template>

<style scoped>
@reference "@/style.css";
</style>
