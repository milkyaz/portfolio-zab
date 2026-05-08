<script setup lang="ts">

type Props = {
    title: string
}
const { title } = defineProps<Props>()

</script>

<template>
        <div class="w-full h-52.5 bg-amber-600 rounded-xl">{{ title }}</div>
</template>

<style scoped>
@reference "@/style.css";
</style>