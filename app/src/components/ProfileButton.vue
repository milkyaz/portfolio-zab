<script setup lang="ts">
import { Icon } from '@iconify/vue';



type Props = {
    text: string;
    isLink?: boolean;
    icon?: string;
    iconWidth?: string;
    iconHeight?: string;
}

const { text, isLink, icon = '' } = defineProps<Props>()

</script>

<template>
    <button v-if="icon" class="btn btn-lg btn-primary rounded-xl font-medium text-base-100 transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1">
        <span class="text-xs px-2.5">{{ text }}</span>
        <Icon :icon="icon" :width="iconWidth" :height="iconHeight" class="transition-transform duration-300" />
    </button>
    <button v-if="isLink" class="btn btn-lg btn-outline btn-primary rounded-xl font-medium transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1">
        <span class="text-xs px-6">{{ text }}</span>
    </button>
</template>

<style scoped>
@reference "@/style.css";
</style>