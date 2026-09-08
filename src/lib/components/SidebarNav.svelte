<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		children?: Snippet;
		class?: string;
	}

	let {
		children,
		class: className = ""
	}: Props = $props();
</script>

<aside class="siaapi-sidebar-nav {className}">
	<nav class="nav-container">
		{@render children?.()}
	</nav>
</aside>

<style>
	.siaapi-sidebar-nav {
		width: 100%;
		max-width: var(--sidebar-max-width);
		min-width: var(--sidebar-min-width);
		background-color: var(--color-surface);
		border: var(--border-width-thin) solid var(--color-border);
		border-radius: var(--radius-xl);
		padding: var(--space-6);
		box-shadow: var(--shadow-sm);
		box-sizing: border-box;
	}

	.nav-container {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}
</style>
