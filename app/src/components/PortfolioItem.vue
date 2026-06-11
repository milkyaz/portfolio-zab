<script setup lang="ts">



type Props = {
    title: string;
    image?: string;
    link?: string;
}
const { title, image, link } = defineProps<Props>();


// https://www.instant-pay.ru/
//https://qandyapp.ru/
</script>

<template>
    <div>
        <h2 class="text-center text-base-content font-medium mb-3">{{ title }}</h2>
        <div class="w-full h-65 rounded-xl overflow-hidden group">
            <a :href="link" target="_blank" rel="noopener noreferrer" class="block transition-transform hover:scale-105">
                <img :src="image" :alt="title" class="w-full h-full object-cover" />
            </a>
        </div>
    </div>
</template>

<style scoped>
@reference "@/style.css";
</style>