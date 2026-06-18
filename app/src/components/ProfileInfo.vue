<script setup lang="ts">
import { Icon } from '@iconify/vue';

const social = [
  {
    link: 'https://github.com/milkyaz',
    icon: 'mdi:github',
    key: 'github'
  },
  {
    link: 'https://t.me/zab_dd',
    icon: 'mdi:telegram',
    key: 'telegram'
  },
  {
    link: 'mailto:zaburunov.2000@gmail.com',
    icon: 'mdi:gmail',
    key: 'mail'
  },
  {
    link: 'https://vk.com/zab_dd',
    icon: 'mdi:vk',
    key: 'vk'
  },
]
</script>

<template>
    <div class="flex flex-row justify-center">
        <div class="flex flex-col items-center gap-10">
            <div>
                <h1 class="profile-info__title">Zaburunov Daniil</h1>
                <p class="text-center text-base-content/60 text-xl mt-3 mb-5 leading-relaxed tracking-wide">Frontend Developer</p>
                <div  class="flex flex-row justify-center gap-10">
                  <template v-for="platform in social" :key="platform.key">
                    <a :href="platform.link" target="_blank" rel="noopener noreferrer" class="text-base-content hover:text-primary transition-all duration-300 ease-out hover:scale-110" aria-label="GitHub">
                      <Icon :icon="platform.icon" width="35" />
                    </a>
                  </template>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@reference "@/style.css";

.profile-info__title {
    @apply font-[--font-poppins] text-4xl md:text-5xl text-base-content font-bold tracking-tight leading-tight not-italic;
}
</style>
