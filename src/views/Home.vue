<template>
	<section class="section">
		<h1 class="title">Welcome</h1>
		<h2 class="subtitle">Make it possible to create a new project</h2>
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
