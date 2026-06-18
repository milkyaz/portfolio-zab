<script setup lang="ts">


type Props = {
    title: string
    description: string
}
const {title, description} = defineProps<Props>()
</script>

<template>
    <div class="text-center font-[--font-poppins] max-w-[120px]">
        <h3 class="text-base text-base-content font-medium leading-tight">{{ title }}</h3>
        <p class="text-sm text-base-content/70 mt-2 leading-relaxed">{{ description }}</p>
    </div>
</template>

<style scoped>
@reference "@/style.css";

</style>