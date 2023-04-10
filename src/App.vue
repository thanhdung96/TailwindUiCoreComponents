<template>
  <Button :style="'primary'" :size="'lg'" :disabled="true">
    hello
  </Button>
</template>

<script setup lang="ts">
  import Button from './core/Button.vue';
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
