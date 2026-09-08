<script lang="ts">
	import { Card, ProjectCard } from "$lib";
	import type { PageProps } from "./$types";
	import {
		capitalizarPrimerLetra,
		capitalizarCadaPalabras,
	} from "$lib/funciones/utils";

	import { asset } from "$app/paths";
	let { data }: PageProps = $props();

</script>

<svelte:head>
	<title>Proyectos de Investigación — {data.area.nombre} | SIAAPI</title>
</svelte:head>


<Card accentLeft={true} padding="lg">
	<!-- Page Header -->
	<header class="page-header">
		<h1 class="main-title">Proyectos de Investigación</h1>
		<div class="area-indicator">
			<svg
				class="book-icon"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
				<path
					d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
				/>
			</svg>
			<span class="area-label">
				Área Académica de <strong
					>{capitalizarPrimerLetra(data.area.nombre || "")}</strong
				>
			</span>
		</div>
	</header>

	<hr class="title-divider" />

	<!-- PIA Sections & Projects Grid -->
	<div class="pia-sections">
		{#each data.area.pias as pia}
			<section class="pia-group">
				<div class="pia-header">
					<span class="pia-badge">PIA</span>
					<h2 class="pia-title">
						{capitalizarPrimerLetra(pia.nombre)}
					</h2>
				</div>

				<div class="projects-grid">
					{#each pia.proyectos as proyecto}
						{#if proyecto}

							<ProjectCard
								project={{
									id: proyecto.id,
									nombre: capitalizarPrimerLetra(
										proyecto.nombre,
									),
									responsable: capitalizarCadaPalabras(
										proyecto.responsable,
									),
									clave: proyecto.clave,
									acuerdo: proyecto.acuerdo,
									estado: proyecto.estado,
									href: asset(proyecto.href)
								}}
							/>
						{/if}
					{/each}
				</div>
			</section>
		{/each}
	</div>
</Card>

<style>
	.page-header {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.main-title {
		font-family: var(--font-family-base);
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-bold);
		color: var(--color-text);
		line-height: var(--line-height-tight);
		margin: 0;
	}

	.area-indicator {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		margin-top: var(--space-1);
	}

	.book-icon {
		width: 16px;
		height: 16px;
		color: var(--color-primary);
		flex-shrink: 0;
	}

	.area-label {
		font-family: var(--font-family-base);
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
	}

	.area-label strong {
		color: var(--color-text);
		font-weight: var(--font-weight-semibold);
	}

	.title-divider {
		border: none;
		border-top: var(--border-width-thin) solid var(--color-border-subtle);
		margin-top: var(--space-4);
		margin-bottom: var(--space-6);
	}

	.pia-sections {
		display: flex;
		flex-direction: column;
		gap: var(--space-8);
	}

	.pia-group {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.pia-header {
		display: flex;
		align-items: center;
		gap: var(--space-2);
	}

	.pia-badge {
		font-family: var(--font-family-base);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-bold);
		background-color: var(--color-primary);
		color: var(--color-text-on-primary);
		padding: 2px 6px;
		border-radius: var(--radius-sm);
		letter-spacing: 0.04em;
		line-height: 1.2;
	}

	.pia-title {
		font-family: var(--font-family-base);
		font-size: var(--font-size-md);
		font-weight: var(--font-weight-bold);
		color: var(--color-text);
		margin: 0;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-4);
	}

	@media (max-width: 1100px) {
		.projects-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
