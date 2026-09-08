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

<div class="siaapi-callout-banner {className}">
	<div class="callout-content">
		{@render children?.()}
	</div>
</div>

<style>
	.siaapi-callout-banner {
		background-color: var(--color-selection-background);
		border: var(--border-width-thin) solid var(--color-border-subtle);
		border-left: var(--accent-border-width) solid var(--color-primary);
		border-radius: var(--radius-md);
		padding: var(--space-4);
		box-sizing: border-box;
	}

	.callout-content {
		font-family: var(--font-family-base);
		font-size: var(--font-size-sm);
		color: var(--color-text);
		line-height: var(--line-height-relaxed);
	}
</style>
