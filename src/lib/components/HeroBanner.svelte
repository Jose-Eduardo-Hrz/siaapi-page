<script lang="ts">
	import { asset } from "$app/paths";
	interface Props {
		topLabel?: string;
		title?: string;
		subtitle?: string;
		backgroundImage?: string;
		class?: string;
	}

	let {
		topLabel = "UAM AZCAPOTZALCO · DIVISIÓN DE CIENCIAS BÁSICAS E INGENIERÍA",
		title = "Sistema de Información de Áreas Académicas y Proyectos de Investigación CBI",
		subtitle = "Plataforma institucional de gestión y consulta de proyectos y áreas académicas de investigación.",
		backgroundImage = "/fondo.jpeg",
		class: className = "",
	}: Props = $props();
</script>

<section
	class="hero-banner {className}"
	style="background-image: url({asset(backgroundImage)});"
>
	<div class="hero-overlay"></div>
	<div class="hero-content">
		{#if topLabel}
			<span class="hero-top-label">{topLabel}</span>
		{/if}
		<h1 class="hero-title">{title}</h1>
		{#if subtitle}
			<p class="hero-subtitle">{subtitle}</p>
		{/if}
	</div>
</section>

<style>
	.hero-banner {
		position: relative;
		width: 100%;
		min-height: 260px;
		border-radius: var(--radius-xl);
		overflow: hidden;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		align-items: flex-end;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.1) 0%,
			rgba(0, 0, 0, 0.2) 25%,
			rgba(0, 0, 0, 0.5) 50%
		);
		z-index: 1;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		padding: var(--space-8) var(--space-8) var(--space-8);
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		max-width: 720px;
	}

	.hero-top-label {
		font-family: var(--font-family-base);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-bold);
		color: rgba(255, 255, 255, 0.85);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.hero-title {
		font-family: var(--font-family-base);
		font-size: var(--font-size-3xl);
		font-weight: var(--font-weight-bold);
		color: #ffffff;
		line-height: var(--line-height-tight);
		margin: 0;
	}

	.hero-subtitle {
		font-family: var(--font-family-base);
		font-size: var(--font-size-sm);
		color: rgba(255, 255, 255, 0.8);
		line-height: var(--line-height-relaxed);
		margin: 0;
		margin-top: var(--space-1);
	}

	@media (max-width: 768px) {
		.hero-banner {
			min-height: 200px;
		}

		.hero-content {
			padding: var(--space-5) var(--space-5) var(--space-5);
		}

		.hero-title {
			font-size: var(--font-size-2xl);
		}
	}
</style>
