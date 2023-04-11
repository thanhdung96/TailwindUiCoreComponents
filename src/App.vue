<template>
	<MatiButton :style="'primary'" :size="'xl'"> mati button </MatiButton>
	<MatiInput
		:id="'adawd'"
		:required="true"
		:placeholder="'sample placeholder'"
	>
		fsdbiefbsefse
	</MatiInput>
</template>

<script setup lang="ts">
import MatiButton from './core/MatiButton.vue'
import MatiInput from './core/MatiInput.vue'
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
