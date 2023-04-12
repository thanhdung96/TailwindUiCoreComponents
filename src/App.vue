<template>
	<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
		<MatiInput
			:id="'adawd'"
			:required="true"
			:placeholder="'sample placeholder'"
			:is-valid="false"
			:error-message="'fseufhseufsefes'"
		>
			<template #label>label slot</template>
			<template #require>require slot</template>
		</MatiInput>
	</div>
</template>

<script setup lang="ts">
import MatiInput from '@/core/MatiInput.vue'
</script>
