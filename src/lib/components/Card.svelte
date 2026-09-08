<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		variant?: "default" | "flat" | "outlined";
		padding?: "none" | "sm" | "md" | "lg";
		accentLeft?: boolean;
		class?: string;
		children?: Snippet;
	}

	let {
		variant = "default",
		padding = "md",
		accentLeft = false,
		class: className = "",
		children
	}: Props = $props();
</script>

<div
	class="siaapi-card variant-{variant} padding-{padding} {className}"
	class:accent-left={accentLeft}
>
	{@render children?.()}
</div>

<style>
	.siaapi-card {
		background-color: var(--color-surface);
		border-radius: var(--radius-xl);
		box-sizing: border-box;
	}

	.variant-default {
		border: var(--border-width-thin) solid var(--color-border);
		box-shadow: var(--shadow-sm);
	}

	.variant-flat {
		border: var(--border-width-thin) solid var(--color-border);
		box-shadow: var(--shadow-none);
	}

	.variant-outlined {
		border: var(--border-width-thin) solid var(--color-border-subtle);
		box-shadow: var(--shadow-none);
	}

	.accent-left {
		border-left: var(--accent-border-width) solid var(--color-primary);
	}

	.padding-none {
		padding: 0;
	}

	.padding-sm {
		padding: var(--space-3);
	}

	.padding-md {
		padding: var(--space-6);
	}

	.padding-lg {
		padding: var(--space-8);
	}
</style>
