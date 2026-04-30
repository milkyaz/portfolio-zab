<script setup lang="ts">
import ButtonTheme from './components/ButtonTheme.vue';
import ProfileInfo from './components/ProfileInfo.vue';



</script>

<template>
  <div class="wrapp">
    <header>
      <ButtonTheme />
    </header>
    <main>
      <ProfileInfo />
    </main>
  </div>
</template>
<style scoped>
@reference "@/style.css";

.wrapp {
  @apply flex flex-col gap-7.5 p-5;
}
</style>
