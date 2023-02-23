<template>
	<header>
		<nav
			class="navbar"
			role="navigation"
			aria-label="main navigation"
		>
			<div class="navbar-brand">
				<router-link
					class="navbar-item"
					to="/"
				>Home</router-link>
				<router-link
					class="navbar-item"
					to="/about"
				>About</router-link>
				<router-link
					class="navbar-item"
					to="/user/create"
				>User-Create</router-link>
				<router-link
					class="navbar-item"
					to="/user/edit"
				>User-Edit</router-link>
				<router-link
					class="navbar-item"
					to="/style-guide"
				>StyleGuide</router-link>
			</div>
		</nav>
	</header>
	<main class="container">
		<router-view />
	</main>
	<footer class="footer">Made with love and firebase</footer>
</template>

<style>
	@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
	@import "https://unpkg.com/bulma-prefers-dark";
    /* import font awesome */
    @import "https://use.fontawesome.com/releases/v5.10.0/css/all.css";
</style>
