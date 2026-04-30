<script setup lang="ts">


type Props = {
    title: string
    description: string
}
const {title, description} = defineProps<Props>()
</script>

<template>
    <div class="text-center font-[--font-poppins]">
        <h2 class="text-base text-[#C3C7CB]">{{ title }}</h2>
        <p class="text-sm text-[#A3ABB2]">{{ description }}</p>
    </div>
</template>

<style scoped>
@reference "@/style.css";

</style>