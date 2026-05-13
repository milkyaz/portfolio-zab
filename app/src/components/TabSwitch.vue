<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';
import PortfolioContent from './PortfolioContent.vue';
import SkillsContent from './SkillsContent.vue';



</script>

<template>
    <div class="tabs tabs-xl tabs-box justify-between bg-[#0B1218] px-3 py-3">
        <input type="radio" name="my_tabs_1" class="tab px-10 m-2" aria-label="Portfolio" />
        <div class="tab-content">
            <PortfolioContent />
        </div>
        <input type="radio" name="my_tabs_1" class="tab px-10 m-2" aria-label="Skills" checked="checked" />
        <div class="tab-content">
            <div class="overflow-x-auto">
                <SkillsContent />
            </div>
        </div>
    </div>
</template>

<style scoped>
@reference "@/style.css";
</style>