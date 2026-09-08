<script lang="ts">
	import StatusBadge from "./StatusBadge.svelte";

	export interface Project {
		id: number;
		nombre: string;
		responsable: string;
		clave: string;
		acuerdo: string;
		estado: "Activo" | "Inactivo";
		href?: string;
	}

	interface Props {
		project: Project;
		selected?: boolean;
		class?: string;
	}

	let { project, selected = false, class: className = "" }: Props = $props();
</script>

<div class="project-card {className}" class:selected>
	<!-- Top Bar -->
	<div class="card-header">
		<div class="project-type-tag">
			<svg
				class="type-icon"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<!-- Flask / Science Icon -->
				<path
					d="M10 2v7.313a1 1 0 0 1-.316.732L3.29 16.34A2 2 0 0 0 4.708 19.7h14.584a2 2 0 0 0 1.418-3.36l-6.394-6.295A1 1 0 0 1 14 9.313V2"
				/>
				<path d="M8.5 2h7" />
				<path d="M7 16h10" />
			</svg>
			<span class="type-label">PROYECTO</span>
		</div>
		<StatusBadge status={project.estado} />
	</div>

	<!-- Title -->
	<h3 class="project-title">{project.nombre}</h3>

	<!-- Responsible -->
	<p class="project-responsible">
		<span class="label">Responsable:</span>
		{project.responsable}
	</p>

	<!-- Footer Info -->
	<div class="card-footer">
		<div class="meta-info">
			<span>Clave: {project.clave} &nbsp;|&nbsp;</span>
			<span>Acuerdo: {project.acuerdo}</span>
		</div>
		<a href={project.href || "#"} class="action-link">
			Ver proyecto &rarr;
		</a>
	</div>
</div>

<style>
	.project-card {
		background-color: var(--color-surface);
		border: var(--border-width-thin) solid var(--color-border);
		border-radius: var(--radius-md);
		padding: var(--space-4);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-shadow: var(--shadow-sm);
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease,
			transform 0.2s ease,
			background-color 0.2s ease;
		cursor: pointer;
	}

	.project-card:hover {
		border-color: var(--color-primary);
		box-shadow: 0 4px 14px rgba(178, 30, 39, 0.15);
		transform: translateY(-3px);
	}

	.project-card.selected {
		border-color: var(--color-primary);
		background-color: var(--color-selection-background);
		box-shadow: 0 4px 14px rgba(178, 30, 39, 0.18);
		transform: translateY(-2px);
	}

	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: var(--space-3);
	}

	.project-type-tag {
		display: flex;
		align-items: center;
		gap: var(--space-1);
		color: var(--color-primary);
	}

	.type-icon {
		width: 14px;
		height: 14px;
	}

	.type-label {
		font-family: var(--font-family-base);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-bold);
		letter-spacing: 0.04em;
	}

	.project-title {
		font-family: var(--font-family-base);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-bold);
		color: var(--color-text);
		line-height: var(--line-height-normal);
		margin: 0 0 var(--space-3) 0;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.project-responsible {
		font-family: var(--font-family-base);
		font-size: var(--font-size-xs);
		color: var(--color-text-secondary);
		margin: 0 0 var(--space-4) 0;
		line-height: 1.4;
	}

	.project-responsible .label {
		color: var(--color-text-muted);
	}

	.card-footer {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
		margin-top: auto;
		padding-top: var(--space-3);
		border-top: var(--border-width-thin) solid var(--color-border-subtle);
	}

	.meta-info {
		font-family: var(--font-family-base);
		font-size: 0.72rem;
		color: var(--color-text-muted);
		line-height: 1.3;
	}

	.action-link {
		font-family: var(--font-family-base);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		color: var(--color-primary);
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		margin-top: var(--space-1);
		transition: text-decoration 0.15s ease;
	}

	.action-link:hover {
		text-decoration: underline;
	}
</style>
