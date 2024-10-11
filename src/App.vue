<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="app-wrapper">
    <nav>
      <RouterLink to="/">Realisation</RouterLink>
      |
      <RouterLink to="/about">About the Task</RouterLink>
    </nav>

    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>

<style scoped>
.app-wrapper {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

nav {
  border-bottom: gray 1px solid;
  padding: 6px 0;
}
</style>
