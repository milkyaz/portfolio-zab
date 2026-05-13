<script setup lang="ts">
import PortfolioItem from './PortfolioItem.vue';

</script>

<template>
    <div class="flex flex-col gap-8 pt-8">
        <PortfolioItem title="item-1" />
        <PortfolioItem title="item-2" />
        <PortfolioItem title="item-3" />
        <PortfolioItem title="item-4" />
        <PortfolioItem title="item-5" />
        <PortfolioItem title="item-6" />
    </div>
</template>

<style scoped>
@reference "@/style.css";
</style>