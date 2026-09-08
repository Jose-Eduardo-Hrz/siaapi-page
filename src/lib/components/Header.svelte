<script lang="ts">
	interface Props {
		topLabel?: string;
		titlePrefix?: string;
		acronym?: string;
		titleSuffix?: string;
		class?: string;
	}

	let {
		topLabel = "PORTAL INSTITUCIONAL DE INVESTIGACIÓN",
		titlePrefix = "",
		acronym = "SIAAPI",
		titleSuffix = " — Sistema de Información para la Administración de Proyectos de Investigación",
		class: className = ""
	}: Props = $props();
</script>

<header class="siaapi-header {className}">
	{#if topLabel}
		<span class="top-label">{topLabel}</span>
	{/if}
	<h1 class="main-title">
		{#if titlePrefix}{titlePrefix} {/if}
		<span class="acronym">{acronym}</span>{titleSuffix}
	</h1>
	<div class="accent-line" aria-hidden="true"></div>
</header>

<style>
	.siaapi-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.top-label {
		font-family: var(--font-family-base);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-bold);
		color: var(--color-primary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.main-title {
		font-family: var(--font-family-base);
		font-size: var(--font-size-2xl);
		font-weight: var(--font-weight-bold);
		color: var(--color-text);
		line-height: var(--line-height-tight);
		margin: 0;
	}

	.acronym {
		color: var(--color-primary);
	}

	.accent-line {
		width: 48px;
		height: var(--accent-border-width);
		background-color: var(--color-primary);
		border-radius: var(--radius-full);
		margin-top: var(--space-2);
	}
</style>
