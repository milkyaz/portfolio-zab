<script setup lang="ts">
import SkillsItem from './SkillsItem.vue';

const skillsData = {
    'Frameworks': [
        { title: 'Vue.js', icon: 'material-icon-theme:vue', description: 'Web development', color: 'emerald-500/10' },
        { title: 'Nuxt.js', icon: 'material-icon-theme:nuxt', description: 'Web development', color: 'green-500/10' },
        { title: 'Pinia', icon: 'logos:pinia', description: 'Web development', color: 'amber-500/10' },
    ],
    'Languages': [
        { title: 'JavaScript', icon: 'material-icon-theme:javascript', description: 'Web development', color: 'yellow-500/10' },
        { title: 'TypeScript', icon: 'material-icon-theme:typescript', description: 'Web development', color: 'blue-500/10' },
    ],
    'Tools & Layout': [
        { title: 'HTML5', icon: 'material-icon-theme:html', description: 'Web layouts', color: 'orange-500/10' },
        { title: 'CSS3', icon: 'devicon:css3', description: 'Web design', color: 'sky-500/10' },
        { title: 'Tailwind', icon: 'devicon:tailwindcss', description: 'Web design', color: 'teal-500/10' },
        { title: 'Git', icon: 'material-icon-theme:git', description: 'Devops', color: 'red-500/10' },
        { title: 'Vite', icon: 'material-icon-theme:vite', description: 'Devops', color: 'indigo-500/10' },
    ]
};




</script>

<template>
    <div class="flex flex-col gap-8 pt-8">
        <!-- Итерируем группы: используем имя категории в качестве уникального :key -->
        <div v-for="(items, categoryName) in skillsData" :key="categoryName" class="flex flex-col gap-2">
            <!-- Оставляем вывод карточек одной колонкой (друг за другом) -->
            <h2 class="text-center">{{ categoryName }}</h2>
            <div v-for="skill in items" :key="skill.title" class="hover:bg-base-200/50 rounded-xl transition-colors">
                <!-- Передаем строго строку skill.title, а не весь объект -->
                <SkillsItem :title="skill.title" :label="skill.description" :icon="skill.icon"
                    :color-bg="skill.color" />
            </div>
        </div>
    </div>
</template>

<style scoped>
@reference "@/style.css";
</style>