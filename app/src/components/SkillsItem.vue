<script setup lang="ts">
import { Icon } from '@iconify/vue';

type Props = {
    title: string;
    icon: string;
    label: string;
    colorBg?: string;
    link?: string;
}
const { title, icon, label, colorBg, link } = defineProps<Props>()

</script>

<template>
    <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer" class="card bg-base-100 flex flex-row items-center px-3 hover:bg-base-200 transition-all duration-300 ease-out min-w-0 no-underline">
        <div class="p-4 rounded-xl flex items-center justify-center text-primary bg-primary/10 transition-all duration-300 flex-shrink-0">
            <Icon :icon="icon" width="30" height="30" class="transition-transform duration-300" />
        </div>
        <div class="card-body min-w-0">
            <h3 class="card-title text-base-content font-medium text-base leading-tight truncate">{{ title }}</h3>
            <p class="text-base-content/70 text-xs leading-relaxed truncate">{{ label }}</p>
        </div>
    </a>
    <div v-else class="card bg-base-100 flex flex-row items-center px-3 hover:bg-base-200 transition-all duration-300 ease-out min-w-0">
        <div class="p-4 rounded-xl flex items-center justify-center text-primary bg-primary/10 transition-all duration-300 flex-shrink-0">
            <Icon :icon="icon" width="30" height="30" class="transition-transform duration-300" />
        </div>
        <div class="card-body min-w-0">
            <h3 class="card-title text-base-content font-medium text-base leading-tight truncate">{{ title }}</h3>
            <p class="text-base-content/70 text-xs leading-relaxed truncate">{{ label }}</p>
        </div>
    </div>
</template>

<style scoped>
@reference "@/style.css";
</style>