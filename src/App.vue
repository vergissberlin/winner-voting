<template>
	<header>
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/create">Create</router-link> |
			<router-link to="/style-guide">StyleGuide</router-link>
		</nav>
	</header>
	<main>
		<router-view />
	</main>
	<footer>Made with love and firebase</footer>
</template>

<style>
	@import "./assets/css/properties.css";

	/* Layout */
	@import "./assets/css/layout/app.css";
	@import "./assets/css/layout/header.css";
	@import "./assets/css/layout/main.css";
	@import "./assets/css/layout/footer.css";

	/* Import components */
	@import "./assets/css/components/a.css";
	@import "./assets/css/components/button.css";
	@import "./assets/css/components/nav.css";
</style>
