<script setup lang="ts">
import ProfileFactItem from './ProfileFactItem.vue';


const profileFacts = [
    {
        id: 1,
        title: '4',
        description: 'Years of work experience',
    },
    {
        id: 2,
        title: '35+',
        description: 'Completed projects',
    },
    {
        id: 3,
        title: '20+',
        description: 'Personal side projects',
    },
]

</script>

<template>
    <div class="flex flex-row justify-center">
        <ProfileFactItem v-for="item in profileFacts" :key="item.id" :title="item.title"
            :description="item.description" />
    </div>
</template>
<style scoped>
@reference "@/style.css";

.profile-info__title {
    @apply font-[--font-poppins] text-3xl text-[#F1F2F4];
}
</style>
