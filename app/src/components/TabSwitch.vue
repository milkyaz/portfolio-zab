<script setup lang="ts">
import { ref } from 'vue';
import TabContent from './TabContent.vue';

const isChecked = ref(false);

console.log('isChecked', isChecked.value)

</script>

<template>
    <div class="tabs tabs-xl tabs-box justify-between bg-[#0B1218]">
        <input type="radio" name="my_tabs_1" class="tab px-10 m-2" aria-label="Portfolio" checked="checked" />
        <div class="tab-content bg-[#0C151D] border-none">
            <TabContent />
        </div>
        <input type="radio" name="my_tabs_1" class="tab px-10 m-2" aria-label="Skills" />
        <div class="tab-content bg-[#0C151D] border-none">
            <!-- Контейнер секции навыков -->
            <section id="skills" class="skills-section">
                <!-- Группа переключателей (уже есть на вашем макете) -->
                <div class="tabs-nav">
                    <button class="tab-btn">Portfolio</button>
                    <button class="tab-btn active">Skills</button>
                </div>

                <!-- Контент навыков -->
                <div class="skills-grid">
                    <!-- Категория навыков -->
                    <div class="skill-category">
                        <h3>Frontend</h3>
                        <ul class="skill-list">
                            <li><i class="fab fa-js"></i> JavaScript</li>
                            <li><i class="fab fa-react"></i> React</li>
                            <li><i class="fab fa-css3-alt"></i> CSS/Tailwind</li>
                        </ul>
                    </div>

                    <div class="skill-category">
                        <h3>Backend</h3>
                        <ul class="skill-list">
                            <li><i class="fab fa-python"></i> Python (Django/FastAPI)</li>
                            <li><i class="fas fa-database"></i> PostgreSQL</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>

</template>

<style scoped>
@reference "@/style.css";
</style>