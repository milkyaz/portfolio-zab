<script setup lang="ts">
import PortfolioItem from './PortfolioItem.vue';
import qandyPreview from '@/assets/qandy-preview.png';
import instantPreview from '@/assets/instant-pay-preview.png';

</script>

<template>
    <div class="flex flex-col gap-8 pt-8">
        <PortfolioItem title="Qandy" :image="qandyPreview" link="https://qandyapp.ru/" />
        <PortfolioItem title="Instant-pay" :image="instantPreview" link="https://www.instant-pay.ru/" />
    </div>
</template>

<style scoped>
@reference "@/style.css";
</style>