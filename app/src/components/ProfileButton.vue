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
    <button v-if="icon" class="btn btn-lg bg-[#FFE071] text-[#3D3D3D] rounded-xl">
        <span class="text-xs px-2.5">{{ text }}</span>
        <Icon :icon="icon" :width="iconWidth" :height="iconHeight" />
    </button>
    <button v-if="isLink" class="btn btn-lg btn-ghost bg-[#171F26] text-[#3D3D3D] rounded-xl">
        <span class="text-xs text-[#A3ABB2] px-6">{{ text }}</span>
    </button>
</template>

<style scoped>
@reference "@/style.css";
</style>