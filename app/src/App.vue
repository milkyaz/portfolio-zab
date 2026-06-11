<script setup lang="ts">
import AppFooter from './components/AppFooter.vue';
import ButtonTheme from './components/ButtonTheme.vue';
import ProfileButton from './components/ProfileButton.vue';
import ProfileFactList from './components/ProfileFactList.vue';
import ProfileInfo from './components/ProfileInfo.vue';
import TabSwitch from './components/TabSwitch.vue';
import ThemesContent from './components/ThemesContent.vue';
</script>

<template>
  <div class="app-container bg-base-100 text-base-content min-h-screen flex flex-col" style="scroll-padding-top: 80px;">
    <!-- Header with Theme Toggle -->
    <header class="bg-base-200">
      <div class="container mx-auto px-4 py-3.5 md:py-4">
        <div class="flex justify-end">
          <ButtonTheme />
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 container mx-auto px-4 py-7.5 md:py-10 w-full">
      <!-- Profile Hero Section -->
      <section class="mb-7.5 md:mb-10" aria-labelledby="profile-heading">
        <h1 id="profile-heading" class="sr-only">Profile</h1>
        <ProfileInfo />
      </section>

      <!-- Profile Facts Section -->
      <section class="mb-7.5 md:mb-10" aria-labelledby="facts-heading">
        <h2 id="facts-heading" class="sr-only">Professional Facts</h2>
        <ProfileFactList />
      </section>

      <!-- Call-to-Action Section -->
      <section class="mb-7.5 md:mb-10" aria-labelledby="cta-heading">
        <h2 id="cta-heading" class="sr-only">Call to Action</h2>
        <div class="flex flex-col items-center gap-4">
          <div class="flex flex-col sm:flex-row gap-3.5 justify-center">
            <ProfileButton text="Download CV" icon="mdi:arrow-collapse-down" icon-size="16" icon-height="14" />
            <ProfileButton text="Contact me" :is-link="true" />
          </div>
        </div>
      </section>

      <!-- Portfolio and Skills Section -->
      <section class="mb-7.5 md:mb-10 flex justify-center" aria-labelledby="portfolio-heading">
        <h2 id="portfolio-heading" class="sr-only">Portfolio and Skills</h2>
        <TabSwitch />
      </section>

      <!-- Themes Selection Section -->
      <section class="flex justify-center" aria-labelledby="themes-heading">
        <h2 id="themes-heading" class="sr-only">Theme Selection</h2>
        <ThemesContent />
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-base-200">
      <AppFooter />
    </footer>
  </div>
</template>

<style scoped>
@reference "@/style.css";

.app-container {
  background-color: hsl(var(--b1));
  color: hsl(var(--bc));
}
</style>
