<script lang="ts">
	import { Card } from "$lib";
	import type { PageProps } from "./$types";
	import {
		capitalizarPrimerLetra,
		capitalizarCadaPalabras,
	} from "$lib/funciones/utils";

	import { asset } from "$app/paths";
	let { data }: PageProps = $props();

	const project = data.proyecto;
	const formatDate = (date: Date | null) =>
		date
			? date.toISOString().slice(0, 10).split("-").reverse().join("-")
			: "Sin registro";
</script>

{#if project}
	<div class="project-page">
		<a class="back-link" href={asset( `/departamentos/${project.id_departamento}/${project.id_area}`, )}>
			<span aria-hidden="true">&larr;</span> Volver al área
		</a>

		<Card variant="flat" padding="none">
			<div class="project-header">
				<div class="project-heading">
					<span class="eyebrow">Expediente oficial de proyecto</span>
					<h2>{capitalizarPrimerLetra(project.nombre)}</h2>
					<div class="project-context">
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#B21E27"><path d="M324-96q-54.69 0-93.34-38.66Q192-173.31 192-228v-504q0-54.69 38.66-93.34Q269.31-864 324-864h444v575q-25 0-42.5 17.91t-17.5 43.5q0 25.59 17.5 43.09Q743-167 768-167v71H324Zm-60-250q14-7 28.5-10.5T324-360h12v-432h-12q-25 0-42.5 17.5T264-732v386Zm144-14h288v-432H408v432Zm-144 14v-446 446Zm60 178h326q-7-14-10.5-28t-3.5-31.27q0-16.25 4-31.49Q644-274 651-288H324q-26 0-43 17.5T264-228q0 26 17 43t43 17Z"/></svg>
							PIA: {capitalizarPrimerLetra(
								project.nombre_pia,
							)}</span
						>
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#B21E27"><path d="M192-96v-72h240v-72h-48q-79.68 0-135.84-56.16T192-432q0-52 25.5-97t70.5-71q0-50 34.5-85t84.5-35h13l-19-49 56-22-18-47 67-26 18 46 56-22 123 313-56 22 18 47-67 26-19-47-55 23-25-66q-17 20-41 31t-50.19 11Q379-480 354-492.5 329-505 312-528q-23 17-35.5 41.8Q264-461.4 264-432q0 50 35 85t85 35h336v72H528v72h240v72H192Zm372-454 45-17-70-179-45 17 70 179Zm-122-16q14-14 14-34t-14-34q-14-14-34-14t-34 14q-14 14-14 34t14 34q14 14 34 14t34-14Zm122 16Zm-156-50Zm0 0Z"/></svg>
							Área: {capitalizarPrimerLetra(
								project.nombre_area,
							)}</span>
						<span>
						<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#B21E27"><path d="M192-264v-312h72v312h-72Zm252 0v-312h72v312h-72ZM96-144v-72h768v72H96Zm600-120v-312h72v312h-72ZM96-624v-96l384-192 384 192v96H96Zm113-72h542-542Zm0 0h542L480-831 209-696Z"/></svg>
							Departamento: {capitalizarPrimerLetra(
								project.nombre_departamento,
							)}</span
						>
					</div>
				</div>
				<span class="project-key">{project.clave}</span>
			</div>
		</Card>

		<div class="details-grid">
			<div class="details-column">
				<Card variant="flat" padding="none">
					<div class="section-heading">
						<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#B21E27"><path d="M216-600h528v-96H216v96Zm0 0v-96 96Zm0 504q-29.7 0-50.85-21.15Q144-138.3 144-168v-528q0-29 21.5-50.5T216-768h72v-96h72v96h240v-96h72v96h72q29 0 50.5 21.5T816-696v210q-17-7-35.03-11-18.04-4-36.97-6v-25H216v360h250q5 20 13.5 37.5T499-96H216Zm368-8.23q-56-56.22-56-136Q528-320 584.23-376q56.22-56 136-56Q800-432 856-375.77q56 56.22 56 136Q912-160 855.77-104q-56.22 56-136 56Q640-48 584-104.23ZM775-151l34-34-65-65v-86h-48v106l79 79Z"/></svg>
						<h3>Cronograma y vigencia</h3>
					</div>
					<div class="dates-grid">
						<div class="date-item">
							<span>Fecha de inicio</span>
							<strong>{formatDate(project.fecha_ini)}</strong>
						</div>
						<div class="date-item">
							<span>Fecha de término</span>
							<strong>{formatDate(project.fecha_fin)}</strong>
						</div>
						<div class="date-item date-item-highlight">
							<span>Fecha prórroga</span>
							<strong>{formatDate(project.fecha_prorroga)}</strong
							>
						</div>
					</div>
				</Card>

				<Card variant="flat" padding="none">
					<div class="section-heading">
						<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#B21E27"><path d="M495-167q5 0 9.5-2t7.5-5l307-308q10-10 15.5-23t5.5-26.75q0-14.67-5.5-27.96Q829-573 819-583L633-770q-11-10-23.89-15.5T582-791q-20 0-36.5 11.5T515-754l75 72q16 16 25.5 35.5T625-604q0 40-28 68t-67.88 28q-18.99 0-36.55-7Q475-522 461-536l-82-82-155 155q-3 4-5 8.24-2 4.23-2 9.08 0 9.68 7.25 16.68t16.92 7q4.83 0 8.83-2t8-5l119-118 50 50-119 119q-4 4-5.5 8.18-1.5 4.17-1.5 8.95 0 9.55 7.07 16.71t16.98 7.16q4.95 0 9.45-2 4.5-2 7.5-5l119-119 51 51-119 118q-4 4-5.5 8.75t-1.5 9.5q0 9.5 7.07 16.62 7.07 7.13 16.98 7.13 4.95 0 9.45-2 4.5-2 7.5-5l119-119 51 51-119 118q-3 4-5 8.42t-2 9.47q0 10.11 7 17.11t17 7Zm-1 70q-37 0-64-24.5T399-182q-33-3-56.5-27T314-266.13q-34-4.87-57.5-28.37T230-351q-37-2-61-30t-24-64.69q0-19.31 7-36.81 7-17.5 21-31.5l206-205 132 132q4 4 8 5.5t8.64 1.5q10.44 0 17.4-7 6.96-7 6.96-17.29 0-4.57-2-9.14t-5-7.57L396-770q-11-11-24.05-16t-27.45-5q-13.5 0-26.5 5.5T294-770L140.78-616.72Q131-607 125.5-593.5 120-580 120-566q0 8 2 15.5t5 15.5l-53 52q-13.39-17.69-19.7-38.85Q48-543 48-566q0-29 10.5-55.5T90-668l153-153q20-20 46.5-31t55.5-11q29 0 55.5 11t46.5 31l16 16 16-17q20-20 46.5-31t55.5-11q29 0 55 11t46 31l187 187q20 20 31 46t11 55q0 29-11 55.5T869-432L562-125q-14 14-31.53 21-17.52 7-36.47 7ZM338-628Z"/></svg>
						<h3>Acuerdo institucional</h3>
					</div>
					<div class="agreement">
						<span>Dictamen / resolución de consejo colegiado</span>
						<strong>{project.acuerdo}</strong>
					</div>
				</Card>

				<Card variant="flat" padding="none">
					<div class="section-heading">
						<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#B21E27"><path d="M480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170l-73-24q-9-62-56.5-103T480-648q-70 0-119 49t-49 119q0 63 41 110.5T456-313l24 73Zm44 141q-11 2-22 2.5t-22 .5q-79 0-149-30t-122.5-82.5Q156-261 126-331T96-480.5q0-79.5 30-149t82.5-122Q261-804 331-834t149.5-30q79.5 0 149 30t122 82.5Q804-699 834-629.5T864-480q0 11-.5 22t-1.5 22l-70-22v-22q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91q5 0 11-.5t11-.5l22 70Zm296 27L654-239 600-96 480-480l384 120-143 53 167 167-68 68Z"/></svg>
						<h3>Objetivos del proyecto</h3>
					</div>
					<p class="body-copy">{project.objetivos}</p>
				</Card>
			</div>

			<aside class="people-column">
				<Card variant="flat" padding="none" accentLeft>
					<div class="section-heading" >
						<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#B21E27"><path d="M378-522q-42-42-42-102t42-102q42-42 102-42t102 42q42 42 42 102t-42 102q-42 42-102 42t-102-42ZM192-192v-96q0-23 12.5-43.5T239-366q55-32 116.29-49 61.29-17 124.5-17t124.71 17Q666-398 721-366q22 13 34.5 34t12.5 44v96H192Zm72-72h432v-24q0-5.18-3.03-9.41-3.02-4.24-7.97-6.59-46-28-98-42t-107-14q-55 0-107 14t-98 42q-5 4-8 7.72-3 3.73-3 8.28v24Zm267-309.21q21-21.21 21-51T530.79-675q-21.21-21-51-21T429-674.79q-21 21.21-21 51T429.21-573q21.21 21 51 21T531-573.21ZM480-624Zm0 360Z"/></svg>
						<h3>Profesor responsable</h3>
					</div>
					<div class="responsible">
						<!-- <div class="avatar">
							{project.responsable.slice(0, 2).toUpperCase()}
						</div> -->
						<strong
							>{capitalizarCadaPalabras(
								project.responsable,
							)}</strong
						>
						<!-- <span>Investigador responsable</span> -->
					</div>
				</Card>

				<Card variant="flat" padding="none">
					<div class="section-heading">
						<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#B21E27"><path d="M48-144v-168q0-30 21-51t51-21h133q18 0 33 8.5t26 22.5q29 42 73 65.5t95 23.5q51 0 95-23.5t73-65.5q11-14 26-22.5t33-8.5h133q30 0 51 21t21 51v168H624v-90q-31 23-68.5 32.5T480-192q-38 0-75-9.5T336-234v90H48Zm432-156q-42 0-78-19.5T342-373q-14-19-33-31t-42-14q47-32 101.5-47T480-480q57 0 111.5 15T693-418q-23 2-42 14t-33 31q-24 34-60 53.5T480-300ZM168-432q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm624 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-312-96q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>
						<h3>Personal participante</h3>
						<span class="participant-count"
							>{project.participantes.length}</span
						>
					</div>
					<ul class="participant-list">
						{#each project.participantes as participante}
							<li>
								<span class="participant-avatar"
									>{participante.nombre
										.slice(0, 2)
										.toUpperCase()}</span
								>
								<span
									>{capitalizarCadaPalabras(
										participante.nombre,
									)}</span
								>
							</li>
						{/each}
					</ul>
				</Card>
			</aside>
		</div>
	</div>
{/if}

<style>
	.project-page {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.back-link {
		align-items: center;
		color: var(--color-text-secondary);
		display: inline-flex;
		font-size: var(--font-size-xs);
		gap: var(--space-2);
		text-decoration: none;
	}

	.back-link:hover {
		color: var(--color-primary);
	}

	.project-header {
		align-items: flex-start;
		display: flex;
		gap: var(--space-4);
		justify-content: space-between;
		padding: var(--space-5) var(--space-6);
	}

	.project-heading {
		min-width: 0;
	}

	.eyebrow,
	.project-context,
	.date-item span,
	.agreement span {
		color: var(--color-text-muted);
		font-size: var(--font-size-xs);
	}

	.eyebrow {
		font-weight: var(--font-weight-bold);
		text-transform: uppercase;
	}

	h2,
	h3 {
		margin: 0;
	}

	h2 {
		color: var(--color-text);
		font-size: var(--font-size-lg);
		line-height: var(--line-height-tight);
		margin: var(--space-2) 0 var(--space-3);
	}

	.project-context {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2) var(--space-4);
		margin-bottom: var(--space-3);
	}

	.project-key {
		background: var(--color-primary);
		border-radius: var(--radius-sm);
		color: var(--color-text-on-primary);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-bold);
		padding: var(--space-2) var(--space-3);
		white-space: nowrap;
	}

	.details-grid {
		display: grid;
		gap: var(--space-4);
		grid-template-columns: minmax(0, 1fr) minmax(220px, 0.48fr);
	}

	.details-column,
	.people-column {
		display: flex;
		flex-direction: column;
		gap: var(--space-4);
	}

	.section-heading {
		align-items: center;
		border-bottom: var(--border-width-thin) solid var(--color-border-subtle);
		display: flex;
		gap: var(--space-2);
		padding: var(--space-3) var(--space-4);
	}

	.section-icon {
		color: var(--color-primary);
		font-size: var(--font-size-sm);
	}

	h3 {
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-bold);
	}

	.dates-grid {
		display: grid;
		gap: var(--space-2);
		grid-template-columns: repeat(3, 1fr);
		padding: var(--space-4);
	}

	.date-item {
		background: var(--color-surface-secondary);
		border: var(--border-width-thin) solid var(--color-border);
		border-radius: var(--radius-sm);
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		padding: var(--space-3);
	}

	.date-item-highlight {
		border-color: var(--color-primary);
	}

	.date-item strong {
		font-size: var(--font-size-sm);
	}
	.body-copy {
		font-size: var(--font-size-sm);
		line-height: var(--line-height-relaxed);
		margin: 0;
		padding: var(--space-4);
	}
	.agreement {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		padding: var(--space-4);
	}
	.agreement strong {
		align-self: flex-start;
		background: var(--color-surface-secondary);
		border: var(--border-width-thin) solid var(--color-border);
		border-radius: var(--radius-sm);
		font-size: var(--font-size-sm);
		padding: var(--space-2) var(--space-3);
	}

	.responsible {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		padding: var(--space-5) var(--space-4);
		text-align: center;
	}
	.responsible strong {
		font-size: var(--font-size-sm);
	}
	.responsible span:last-child {
		color: var(--color-text-muted);
		font-size: var(--font-size-xs);
	}
	.avatar {
		align-items: center;
		background: var(--color-primary);
		border-radius: var(--radius-full);
		color: var(--color-text-on-primary);
		display: flex;
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-bold);
		height: 48px;
		justify-content: center;
		margin-bottom: var(--space-2);
		width: 48px;
	}
	.participant-count {
		background: var(--color-surface-secondary);
		border-radius: var(--radius-sm);
		color: var(--color-text-secondary);
		font-size: var(--font-size-xs);
		margin-left: auto;
		padding: var(--space-1) var(--space-2);
	}
	.participant-list {
		list-style: none;
		margin: 0;
		padding: var(--space-2) var(--space-4);
	}
	.participant-list li {
		align-items: center;
		border-bottom: var(--border-width-thin) solid var(--color-border-subtle);
		display: flex;
		font-size: var(--font-size-xs);
		gap: var(--space-2);
		padding: var(--space-2) 0;
	}
	.participant-list li:last-child {
		border-bottom: 0;
	}
	.participant-avatar {
		align-items: center;
		background: var(--color-surface-secondary);
		border-radius: var(--radius-full);
		color: var(--color-text-secondary);
		display: flex;
		flex: 0 0 auto;
		font-size: 0.625rem;
		font-weight: var(--font-weight-bold);
		height: 22px;
		justify-content: center;
		width: 22px;
	}

	@media (max-width: 768px) {
		.details-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 520px) {
		.project-header {
			flex-direction: column;
		}
		.dates-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
