<script setup lang="ts">
import { Icon } from '@iconify/vue';

</script>

<template>
    <div class="flex flex-row justify-center">
        <div class="flex flex-col items-center gap-10">
            <div class="bg-[url(./assets/profile-photo.svg)] w-31 h-31"></div>
            <div>
                <h1 class="profile-info__title">Zaburunov Daniil</h1>
                <p class="text-center text-base-content/60 text-sm mt-3 mb-5 leading-relaxed tracking-wide">Frontend Developer</p>
                <div class="flex flex-row justify-center gap-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-base-content hover:text-primary transition-all duration-300 ease-out hover:scale-110" aria-label="GitHub">
                        <Icon icon="mdi:github" width="24" />
                    </a>
                    <a href="https://telegram.me" target="_blank" rel="noopener noreferrer" class="text-base-content hover:text-primary transition-all duration-300 ease-out hover:scale-110" aria-label="Telegram">
                        <Icon icon="mdi:telegram" width="24" />
                    </a>
                    <a href="mailto:mail@example.com" class="text-base-content hover:text-primary transition-all duration-300 ease-out hover:scale-110" aria-label="Email">
                        <Icon icon="mdi:gmail" width="24" />
                    </a>
                    <a href="https://vk.com" target="_blank" rel="noopener noreferrer" class="text-base-content hover:text-primary transition-all duration-300 ease-out hover:scale-110" aria-label="VK">
                        <Icon icon="mdi:vk" width="24" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@reference "@/style.css";

.profile-info__title {
    @apply font-[--font-poppins] text-4xl md:text-5xl text-base-content font-medium tracking-tight leading-tight;
}
</style>
