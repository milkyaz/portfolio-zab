<script setup lang="ts">
import { Icon } from '@iconify/vue';

type Props = {
    title: string;
    icon: string;
    label: string;
    colorBg?: string;
}
const { title, icon, label, colorBg } = defineProps<Props>()

</script>

<template>
    <div class="card bg-base-100 flex flex-row items-center px-3">
        <div class="p-4 border flex items-center justify-center rounded-xl" :class="`bg-${colorBg}`">
            <Icon :icon="icon" width="30" height="30" />
        </div>
        <div class="card-body">
            <h2 class="card-title">{{ title }}</h2>
            <p>{{ label }}</p>
        </div>
    </div>
</template>

<style scoped>
@reference "@/style.css";
</style>