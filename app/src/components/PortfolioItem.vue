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
    <div class="w-full h-52.5 rounded-xl overflow-hidden">
        <a :href="link" target="__blank">
            <img :src="image" :alt="title" class="w-full h-full object-content" />
        </a>
    </div>
</template>

<style scoped>
@reference "@/style.css";
</style>