<script setup lang="ts">
import PortfolioContent from './PortfolioContent.vue';
import SkillsContent from './SkillsContent.vue';
</script>

<template>
    <div class="tabs tabs-xl tabs-box justify-center bg-base-200 px-3 py-3 mx-3 max-w-md">
        <input type="radio" name="my_tabs_1" class="tab px-10 m-2" aria-label="Portfolio" checked />
        <div class="tab-content">
            <PortfolioContent />
        </div>
        <input type="radio" name="my_tabs_1" class="tab px-10 m-2" aria-label="Skills" />
        <div class="tab-content overflow-hidden">
            <SkillsContent />
        </div>
    </div>
</template>

<style scoped>
@reference "@/style.css";
</style>