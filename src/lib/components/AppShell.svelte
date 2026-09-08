<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		header?: Snippet;
		sidebar?: Snippet;
		children?: Snippet;
		class?: string;
	}

	let {
		header,
		sidebar,
		children,
		class: className = ""
	}: Props = $props();
</script>

<div class="siaapi-app-shell {className}">
	<div class="shell-container">
		{#if header}
			<div class="header-region">
				{@render header()}
			</div>
		{/if}

		<div class="body-grid">
			{#if sidebar}
				<div class="sidebar-region">
					{@render sidebar()}
				</div>
			{/if}

			<div class="main-region">
				{@render children?.()}
			</div>
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		background-color: var(--color-background);
		font-family: var(--font-family-base);
		color: var(--color-text);
	}

	.siaapi-app-shell {
		min-height: 100vh;
		background-color: var(--color-background);
		box-sizing: border-box;
	}

	.shell-container {
		max-width: 1280px;
		margin: 0 auto;
		padding: var(--container-padding);
		display: flex;
		flex-direction: column;
		gap: var(--layout-gap);
		box-sizing: border-box;
	}

	.header-region {
		width: 100%;
	}

	.body-grid {
		display: grid;
		grid-template-columns: minmax(var(--sidebar-min-width), var(--sidebar-width)) 1fr;
		gap: var(--layout-gap);
		align-items: start;
	}

	.sidebar-region {
		width: 100%;
	}

	.main-region {
		min-width: 0;
		width: 100%;
	}

	@media (max-width: 768px) {
		.shell-container {
			padding: var(--container-padding-mobile);
		}

		.body-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
