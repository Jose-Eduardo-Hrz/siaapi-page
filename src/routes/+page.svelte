<script lang="ts">
	import { Card, SectionTitle, CalloutBanner, HeroBanner } from "$lib";
</script>

<svelte:head>
	<title
		>SIAAPI — Sistema de Información de Áreas Académicas y Proyectos de
		Investigación CBI</title
	>
</svelte:head>

<HeroBanner subtitle="" />

<div class="hero-spacer"></div>

<Card accentLeft={true} padding="lg">
	<div class="content-header">
		<SectionTitle
			topLabel="PORTAL INSTITUCIONAL DE INVESTIGACIÓN"
			title="Presentación del Sistema"
		/>
	</div>

	<hr class="title-divider" />

	<article class="content-body">
		<p>
			Bienvenido al Sistema de Información de Áreas Académicas y Proyectos
			de Investigación. Esta plataforma web centraliza la gestión y
			consulta de nuestra estructura académica, permitiendo a los usuarios
			explorar de forma ágil y transparente la producción científica de la
			institución.
		</p>

		<p>
			El sistema se organiza jerárquicamente a partir de nuestros cinco
			departamentos: Ciencias Básicas, Electrónica, Energía, Materiales y
			Sistemas. Desde aquí, podrás navegar fácilmente por sus respectivas
			áreas académicas y consultar de manera detallada los proyectos de
			investigación vinculados a cada una de ellas.
		</p>

		<!-- <div class="callout-wrapper">
			<CalloutBanner>
				<div class="callout-inner">
					<strong class="callout-title">Consulta el catálogo académico</strong>
					<p class="callout-text">
						Selecciona un departamento para consultar sus proyectos, responsables y
						líneas de investigación.
					</p>
				</div>
			</CalloutBanner>
		</div> -->
	</article>
</Card>

<style>
	.content-header {
		margin-bottom: var(--space-4);
	}

	.title-divider {
		border: none;
		border-top: var(--border-width-thin) solid var(--color-border-subtle);
		margin-top: var(--space-4);
		margin-bottom: var(--space-6);
	}

	.content-body {
		display: flex;
		flex-direction: column;
		gap: var(--space-5);
	}

	.content-body p {
		font-family: var(--font-family-base);
		font-size: var(--font-size-md);
		line-height: var(--line-height-relaxed);
		color: var(--color-text);
		margin: 0;
		text-align: justify;
	}

	.highlight-red {
		color: var(--color-primary);
		font-weight: var(--font-weight-bold);
	}

	.callout-wrapper {
		margin-top: var(--space-4);
	}

	.callout-inner {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
	}

	.callout-title {
		font-family: var(--font-family-base);
		font-size: var(--font-size-md);
		font-weight: var(--font-weight-bold);
		color: var(--color-text);
	}

	.callout-text {
		font-family: var(--font-family-base);
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		line-height: var(--line-height-normal);
		margin: 0 !important;
		text-align: left !important;
	}

	.hero-spacer {
		height: var(--space-5);
	}
</style>
