<script setup lang="ts">
import ButtonTheme from './components/ButtonTheme.vue';
import ProfileButton from './components/ProfileButton.vue';
import ProfileFactList from './components/ProfileFactList.vue';
import ProfileInfo from './components/ProfileInfo.vue';



</script>

<template>
  <div class="wrapp">
    <header>
      <ButtonTheme />
    </header>
    <main class="flex flex-col gap-7.5">
      <ProfileInfo />
      <ProfileFactList />
      <section class="flex flex-row gap-3.5 justify-center">
        <ProfileButton text="Download CV" icon="mdi:arrow-collapse-down" icon-size="16" icon-height="14" />
        <ProfileButton text="Contact me" :is-link="true" />
      </section>
    </main>
  </div>
</template>
<style scoped>
@reference "@/style.css";

.wrapp {
  @apply flex flex-col gap-7.5 p-5;
}
</style>
