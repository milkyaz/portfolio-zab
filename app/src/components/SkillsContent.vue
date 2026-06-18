<script setup lang="ts">
import SkillsItem from './SkillsItem.vue';

const skillsData = {
    'Frameworks': [
        { title: 'Vue.js', icon: 'material-icon-theme:vue', description: 'Web development', color: 'emerald-500/10', link: 'https://vuejs.org' },
        { title: 'Nuxt.js', icon: 'material-icon-theme:nuxt', description: 'Web development', color: 'green-500/10', link: 'https://nuxt.com' },
        { title: 'Pinia', icon: 'logos:pinia', description: 'Web development', color: 'amber-500/10', link: 'https://pinia.vuejs.org' },
    ],
    'Languages': [
        { title: 'JavaScript', icon: 'material-icon-theme:javascript', description: 'Web development', color: 'yellow-500/10', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { title: 'TypeScript', icon: 'material-icon-theme:typescript', description: 'Web development', color: 'blue-500/10', link: 'https://www.typescriptlang.org' },
    ],
    'Tools & Layout': [
        { title: 'HTML5', icon: 'material-icon-theme:html', description: 'Web layouts', color: 'orange-500/10', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { title: 'CSS3', icon: 'devicon:css3', description: 'Web design', color: 'sky-500/10', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { title: 'Tailwind', icon: 'devicon:tailwindcss', description: 'Web design', color: 'teal-500/10', link: 'https://tailwindcss.com' },
        { title: 'Git', icon: 'material-icon-theme:git', description: 'Devops', color: 'red-500/10', link: 'https://git-scm.com' },
        { title: 'Vite', icon: 'material-icon-theme:vite', description: 'Devops', color: 'indigo-500/10', link: 'https://vitejs.dev' },
    ]
};




</script>

<template>
    <div class="flex flex-col gap-8 pt-8 w-full">
        <!-- Итерируем группы: используем имя категории в качестве уникального :key -->
        <div v-for="(items, categoryName) in skillsData" :key="categoryName" class="flex flex-col gap-3 animate-fade-in w-full">
            <!-- Оставляем вывод карточек одной колонкой (друг за другом) -->
            <h2 class="text-center text-sm font-medium text-base-content/80 uppercase tracking-wide letter-spacing">{{ categoryName }}</h2>
            <div v-for="skill in items" :key="skill.title" class="hover:bg-base-200/50 rounded-xl transition-all duration-300 ease-out w-full">
                <!-- Передаем строго строку skill.title, а не весь объект -->
                <SkillsItem :title="skill.title" :label="skill.description" :icon="skill.icon"
                    :color-bg="skill.color" :link="skill.link" />
            </div>
        </div>
    </div>
</template>

<style scoped>
@reference "@/style.css";
</style>