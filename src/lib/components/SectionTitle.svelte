<script lang="ts">
	interface Props {
		title: string;
		topLabel?: string;
		as?: "h1" | "h2" | "h3";
		class?: string;
	}

	let {
		title,
		topLabel,
		as = "h2",
		class: className = ""
	}: Props = $props();
</script>

<div class="siaapi-section-title {className}">
	{#if topLabel}
		<span class="top-label">{topLabel}</span>
	{/if}
	{#if as === "h1"}
		<h1 class="title">{title}</h1>
	{:else if as === "h3"}
		<h3 class="title">{title}</h3>
	{:else}
		<h2 class="title">{title}</h2>
	{/if}
</div>

<style>
	.siaapi-section-title {
		display: flex;
		flex-direction: column;
	}

	.top-label {
		font-family: var(--font-family-base);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-bold);
		color: var(--color-text-secondary);
		text-transform: uppercase;
		margin-bottom: var(--space-1);
		letter-spacing: 0.05em;
	}

	.title {
		font-family: var(--font-family-base);
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-bold);
		color: var(--color-text);
		line-height: var(--line-height-tight);
		margin: 0;
	}
</style>
