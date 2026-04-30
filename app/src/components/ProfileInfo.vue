<script setup lang="ts">
import { Icon } from '@iconify/vue';

</script>

<template>
    <div class="flex flex-row justify-center">
        <div class="flex flex-col items-center gap-10">
            <div class="bg-[url(./assets/profile-photo.svg)] w-31 h-31"></div>
            <div>
                <h2 class="profile-info__title">Zaburunov Daniil</h2>
                <p class="text-center text-[#A3ABB2] text-sm mt-2 mb-5">Frontend Developer</p>
                <div class="flex flex-row justify-center gap-6">
                    <Icon icon="mdi:github" width="24" />
                    <Icon icon="mdi:telegram" width="24" />
                    <Icon icon="mdi:gmail" width="24" />
                    <Icon icon="mdi:vk" width="24" />
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@reference "@/style.css";

.profile-info__title {
    @apply font-[--font-poppins] text-3xl text-[#F1F2F4];
}
</style>
