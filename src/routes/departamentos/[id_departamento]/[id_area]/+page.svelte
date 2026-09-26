<script lang="ts">
	import { Card, ProjectCard, SectionTitle, CalloutBanner } from "$lib";
	import type { PageProps } from "./$types";
	import {
		capitalizarPrimerLetra,
		capitalizarCadaPalabras,
	} from "$lib/funciones/utils";

	import { asset } from "$app/paths";
	import { SvelteSet } from "svelte/reactivity";
	import { untrack } from "svelte";
	let { data }: PageProps = $props();

	let showObjeto = $state(false);
	let showObjetivoGeneral = $state(false);
	let showObjetivosEspecificos = $state(false);
	let showMiembros = $state(false);

	// SvelteSet es reactivo: .add() y .delete() actualizan la vista
	const expandedPias = new SvelteSet<number>();

	// Al navegar a otra área el componente se reutiliza: cerrar paneles y colapsar todas las PIAs
	$effect(() => {
		data.area.id;
		untrack(() => {
			showObjeto = false;
			showObjetivoGeneral = false;
			showObjetivosEspecificos = false;
			showMiembros = false;
			expandedPias.clear();
		});
	});

	function togglePia(index: number) {
		if (expandedPias.has(index)) {
			expandedPias.delete(index);
		} else {
			expandedPias.add(index);
		}
	}
</script>

<svelte:head>
	<title>Proyectos de Investigación — {data.area.nombre} | SIAAPI</title>
</svelte:head>

<!-- ═══════════════════════════════════════════════════════
     SECCIÓN 1 — Ficha del Área Académica
     ═══════════════════════════════════════════════════════ -->
<Card accentLeft={true} padding="lg">
	<div class="content-header">
		<SectionTitle
			topLabel="ÁREA ACADÉMICA"
			title={capitalizarPrimerLetra(data.area.nombre || "")}
		/>
	</div>

	<hr class="title-divider" />

	<!-- Ficha del responsable -->
	<div class="area-responsable-card">
		<span class="responsable-label">Responsable del área</span>
		<div class="responsable-name">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="16px"
				viewBox="0 -960 960 960"
				width="16px"
				fill="currentColor"
			>
				<path
					d="M378-522q-42-42-42-102t42-102q42-42 102-42t102 42q42 42 42 102t-42 102q-42 42-102 42t-102-42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.29-49 61.29-17 124.5-17t124.71 17Q666-398 721-366q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.18-3.03-9.41-3.02-4.24-7.97-6.59-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.72-3 3.73-3 8.28v24Zm267-309.21q21-21.21 21-51T530.79-675q-21.21-21-51-21T429-674.79q-21 21.21-21 51T429.21-573q21.21 21 51 21T531-573.21ZM480-624Zm0 360Z"
				/>
			</svg>
			<span>{capitalizarCadaPalabras(data.area.responsable || "")}</span>
		</div>
	</div>

	<!-- Botones de información del área -->
	<div class="area-actions">
		<button
			class="btn-area"
			class:btn-active={showObjeto}
			onclick={() => (showObjeto = !showObjeto)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="16px"
				viewBox="0 -960 960 960"
				width="16px"
				fill="currentColor"
				><path
					d="M288-96q-33 0-52.5-19.5T216-168v-624q0-33 19.5-52.5T288-864h210.37q13.63 0 26.63 5 13 5 24 16l174 174q11 11 16 23.89t5 27.11v450q0 33-19.5 52.5T672-96H288Zm144-696H288v624h384v-408H540q-45 0-76.5-31.5T432-684v-108Zm72 6v102.48q0 14.52 10.35 25.02T540-648h102L504-786ZM396-240q-15.3 0-25.65-10.29Q360-260.58 360-275.79t10.35-25.71Q380.7-312 396-312h96q15.3 0 25.65 10.29Q528-291.42 528-276.21t-10.35 25.71Q507.3-240 492-240h-96Zm0-144q-15.3 0-25.65-10.29Q360-404.58 360-419.79t10.35-25.71Q380.7-456 396-456h168q15.3 0 25.65 10.29Q600-435.42 600-420.21t-10.35 25.71Q579.3-384 564-384H396Z"
				/></svg
			>
			Objeto del Área
		</button>
		<button
			class="btn-area"
			class:btn-active={showObjetivoGeneral}
			onclick={() => (showObjetivoGeneral = !showObjetivoGeneral)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="16px"
				viewBox="0 -960 960 960"
				width="16px"
				fill="currentColor"
				><path
					d="M480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170l-73-24q-9-62-56.5-103T480-648q-70 0-119 49t-49 119q0 63 41 110.5T456-313l24 73Zm44 141q-11 2-22 2.5t-22 .5q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480.5q0-79.5 30-149t82.5-122Q261-804 331-834t149.5-30q79.5 0 149 30t122 82.5Q804-699 834-629.5T864-480q0 11-.5 22t-1.5 22l-70-22v-22q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91q5 0 11-.5t11-.5l22 70Zm296 27L654-239 600-96 480-480l384 120-143 53 167 167-68 68Z"
				/></svg
			>
			Objetivo General
		</button>
		<button
			class="btn-area"
			class:btn-active={showObjetivosEspecificos}
			onclick={() =>
				(showObjetivosEspecificos = !showObjetivosEspecificos)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="16px"
				viewBox="0 -960 960 960"
				width="16px"
				fill="currentColor"
				><path
					d="M280-600v-80h560v80H280Zm0 160v-80h560v80H280Zm0 160v-80h560v80H280ZM160-600q-17 0-28.5-11.5T120-640q0-17 11.5-28.5T160-680q17 0 28.5 11.5T200-640q0 17-11.5 28.5T160-600Zm0 160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440Zm0 160q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360q17 0 28.5 11.5T200-320q0 17-11.5 28.5T160-280Z"
				/></svg
			>
			Objetivos Específicos
		</button>
		<button
			class="btn-area"
			class:btn-active={showMiembros}
			onclick={() => (showMiembros = !showMiembros)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="16px"
				viewBox="0 -960 960 960"
				width="16px"
				fill="currentColor"
				><path
					d="M48-144v-168q0-30 21-51t51-21h133q18 0 33 8.5t26 22.5q29 42 73 65.5t95 23.5q51 0 95-23.5t73-65.5q11-14 26-22.5t33-8.5h133q30 0 51 21t21 51v168H624v-90q-31 23-68.5 32.5T480-192q-38 0-75-9.5T336-234v90H48Zm432-156q-42 0-78-19.5T342-373q-14-19-33-31t-42-14q47-32 101.5-47T480-480q57 0 111.5 15T693-418q-23 2-42 14t-33 31q-24 34-60 53.5T480-300ZM168-432q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm624 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-312-96q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"
				/></svg
			>
			Profesores Investigadores ({data.area.miembros?.length || "0"})
		</button>
	</div>

	<!-- Paneles desplegables -->
	{#if showObjeto}
		<CalloutBanner class="panel-callout">
			<div class="panel-inner">
				<strong class="panel-title">Objeto del Área</strong>
				{#if data.area.objeto.length > 1}
					<p class="panel-text">{data.area.objeto}</p>
				{:else}
					<p class="panel-text panel-empty">
						No se tiene registro del objeto.
					</p>
				{/if}
			</div>
		</CalloutBanner>
	{/if}

	{#if showObjetivoGeneral}
		<CalloutBanner class="panel-callout">
			<div class="panel-inner">
				<strong class="panel-title">Objetivo General</strong>
				{#if data.area.objetivo_general.length > 1}
					<p class="panel-text">{data.area.objetivo_general}</p>
				{:else}
					<p class="panel-text panel-empty">
						No se tiene registro del Objetivo General.
					</p>
				{/if}
			</div>
		</CalloutBanner>
	{/if}

	{#if showObjetivosEspecificos}
		<CalloutBanner class="panel-callout">
			<div class="panel-inner">
				<strong class="panel-title">Objetivos Específicos</strong>
				{#if data.area.objetivos_especificos.length > 1}
					<p class="panel-text">{data.area.objetivos_especificos}</p>
				{:else}
					<p class="panel-text panel-empty">
						No se tiene registro de los Objetivos Específicos.
					</p>
				{/if}
			</div>
		</CalloutBanner>
	{/if}

	{#if showMiembros}
		<CalloutBanner class="panel-callout">
			<div class="panel-inner">
				<strong class="panel-title">Miembros del Área</strong>
				{#if data.area.miembros}
					<ul class="participant-list">
						{#each data.area.miembros as participante}
							<li>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="14px"
									viewBox="0 -960 960 960"
									width="14px"
									fill="currentColor"
									><path
										d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z"
									/></svg
								>
								<span
									>{capitalizarCadaPalabras(
										participante.nombre,
									)}</span
								>
							</li>
						{/each}
					</ul>
				{:else}
					<p class="panel-text panel-empty">
						No se tiene registro de los miembros.
					</p>
				{/if}
			</div>
		</CalloutBanner>
	{/if}
</Card>

<div class="section-spacer"></div>

<!-- ═══════════════════════════════════════════════════════
     SECCIÓN 2 — Proyectos de Investigación por PIA
     ═══════════════════════════════════════════════════════ -->
<Card accentLeft={true} padding="lg">
	<div class="content-header">
		<SectionTitle
			topLabel="CATÁLOGO DE PROYECTOS"
			title="Proyectos de Investigación"
			as="h1"
		/>
	</div>

	<hr class="title-divider" />

	<!-- PIA Sections & Projects Grid -->
	<div class="pia-sections">
		{#each data.area.pias as pia, i}
			<section class="pia-group">
				<div class="pia-header">
					<span class="pia-badge">PIA</span>
					<h2 class="pia-title">
						{capitalizarPrimerLetra(pia.nombre)}
					</h2>
				</div>

				<div class="projects-grid">
					{#each expandedPias.has(i) ? pia.proyectos : pia.proyectos.slice(0, 3) as proyecto}
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
									href: asset(proyecto.href),
								}}
							/>
						{/if}
					{/each}
				</div>

				{#if pia.proyectos.filter(Boolean).length > 3}
					<button class="btn-ver-mas" onclick={() => togglePia(i)}>
						{expandedPias.has(i)
							? "Ver menos"
							: `Ver más (${pia.proyectos.filter(Boolean).length - 3} restantes)`}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="16px"
							viewBox="0 -960 960 960"
							width="16px"
							fill="currentColor"
							class="btn-ver-mas-icon"
							class:rotated={expandedPias.has(i)}
						>
							<path
								d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
							/>
						</svg>
					</button>
				{/if}
			</section>
		{/each}
	</div>
</Card>

<style>
	/* ────────────────────────────────────────────────────
	   Layout & Spacing
	   ──────────────────────────────────────────────────── */

	.content-header {
		margin-bottom: var(--space-4);
	}

	.section-spacer {
		height: var(--space-5);
	}

	.title-divider {
		border: none;
		border-top: var(--border-width-thin) solid var(--color-border-subtle);
		margin-top: var(--space-4);
		margin-bottom: var(--space-6);
	}

	/* ────────────────────────────────────────────────────
	   Área — Responsable Card
	   ──────────────────────────────────────────────────── */

	.area-responsable-card {
		background-color: var(--color-surface-secondary);
		border: var(--border-width-thin) solid var(--color-border);
		border-radius: var(--radius-md);
		padding: var(--space-3) var(--space-4);
		display: inline-flex;
		flex-direction: column;
		gap: var(--space-1);
		margin-bottom: var(--space-4);
	}

	.responsable-label {
		display: block;
		font-family: var(--font-family-base);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		color: var(--color-text-muted);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.responsable-name {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-family: var(--font-family-base);
		font-weight: var(--font-weight-semibold);
		font-size: var(--font-size-sm);
		color: var(--color-text);
	}

	.responsable-name svg {
		color: var(--color-primary);
		flex-shrink: 0;
	}

	/* ────────────────────────────────────────────────────
	   Área — Action Buttons
	   ──────────────────────────────────────────────────── */

	.area-actions {
		display: flex;
		gap: var(--space-2);
		flex-wrap: wrap;
	}

	.btn-area {
		display: inline-flex;
		align-items: center;
		gap: var(--space-1);
		padding: var(--button-padding-y) var(--button-padding-x);
		font-family: var(--font-family-base);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		border-radius: var(--radius-sm);
		cursor: pointer;
		transition: all 0.2s ease;
		background-color: var(--color-surface);
		border: var(--border-width-thin) solid var(--color-border);
		color: var(--color-text-secondary);
	}

	.btn-area svg {
		color: var(--color-primary);
		transition: color 0.2s ease;
	}

	.btn-area:hover {
		background-color: var(--color-surface-secondary);
		border-color: var(--color-primary);
		color: var(--color-text);
	}

	.btn-active {
		background-color: var(--color-primary);
		border-color: var(--color-primary);
		color: var(--color-text-on-primary);
	}

	.btn-active svg {
		color: var(--color-text-on-primary);
	}

	.btn-active:hover {
		background-color: var(--color-primary-hover);
		border-color: var(--color-primary-hover);
		color: var(--color-text-on-primary);
	}

	/* ────────────────────────────────────────────────────
	   Área — Collapsible Panels (using CalloutBanner)
	   ──────────────────────────────────────────────────── */

	:global(.panel-callout) {
		margin-top: var(--space-4);
	}

	.panel-inner {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.panel-title {
		font-family: var(--font-family-base);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-bold);
		color: var(--color-text);
	}

	.panel-text {
		font-family: var(--font-family-base);
		font-size: var(--font-size-sm);
		color: var(--color-text);
		line-height: var(--line-height-relaxed);
		margin: 0;
		text-align: justify;
	}

	.panel-empty {
		color: var(--color-text-muted);
		font-style: italic;
	}

	/* ────────────────────────────────────────────────────
	   Área — Participant List
	   ──────────────────────────────────────────────────── */

	.participant-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: var(--space-2);
	}

	.participant-list li {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		font-family: var(--font-family-base);
		font-size: var(--font-size-sm);
		color: var(--color-text);
		padding: var(--space-2) var(--space-3);
		background-color: var(--color-surface-secondary);
		border-radius: var(--radius-sm);
		border: var(--border-width-thin) solid var(--color-border-subtle);
		transition: border-color 0.15s ease;
	}

	.participant-list li:hover {
		border-color: var(--color-primary);
	}

	.participant-list li svg {
		color: var(--color-primary);
		flex-shrink: 0;
	}

	/* ────────────────────────────────────────────────────
	   PIA Sections & Projects Grid
	   ──────────────────────────────────────────────────── */

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
		padding: 2px 8px;
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

	/* ────────────────────────────────────────────────────
	   Ver más / Ver menos Button
	   ──────────────────────────────────────────────────── */

	.btn-ver-mas {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-1);
		margin: var(--space-4) auto 0;
		padding: var(--button-padding-y) var(--button-padding-x);
		font-family: var(--font-family-base);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		color: var(--color-primary);
		background-color: transparent;
		border: var(--border-width-thin) solid var(--color-primary);
		border-radius: var(--radius-sm);
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.btn-ver-mas:hover {
		background-color: var(--color-primary);
		color: var(--color-text-on-primary);
	}

	.btn-ver-mas-icon {
		transition: transform 0.3s ease;
	}

	.rotated {
		transform: rotate(180deg);
	}
</style>
