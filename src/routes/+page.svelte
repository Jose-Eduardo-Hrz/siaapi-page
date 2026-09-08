<script lang="ts">
	import { Card, SectionTitle, CalloutBanner } from "$lib";
</script>

<svelte:head>
	<title>SIAAPI — Sistema de Información de Áreas Académicas y Proyectos de Investigación CBI</title>
</svelte:head>

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
			El Sistema de Información para la Administración de Proyectos de
			Investigación es la evolución del sistema de información de áreas
			académicas y proyectos de investigación. Las presentes modificaciones
			obedecen a la reforma relacionada con la organización básica de las
			funciones sustantivas y la carrera académica en la Universidad, aprobadas
			por el Colegio Académico en la sesión 522, celebrada el 10 de marzo y
			17 de abril de 2023, al Reglamento Orgánico (RO).
		</p>

		<p>
			Con el propósito de atender las problemáticas expuestas, en esta
			reforma se modifica el artículo 3 para precisar que la división y los
			departamentos les corresponden el desarrollo de las tres funciones y se
			da una nueva definición al área, llamándola
			<strong class="highlight-red">área académica</strong>, en cuyo seno se
			deberán atender la docencia, la investigación y la preservación y
			difusión de la cultura.
		</p>

		<p>
			Además, se indica que este espacio organizativo puede integrarse por
			personal académico de uno o varios departamentos y divisiones, lo que
			posibilita la interdisciplinariedad y un enfoque transdisciplinario en la
			atención de las actividades académicas. Con esta reforma se pretende que
			la planeación académica se apruebe en los órganos colegiados,
			fortalecida por el trabajo colectivo de las áreas académicas, al ser
			armonizada y regulada en los departamentos, las divisiones, así como en
			las unidades y a nivel institucional.
		</p>

		<div class="callout-wrapper">
			<CalloutBanner>
				<div class="callout-inner">
					<strong class="callout-title">Consulta el catálogo académico</strong>
					<p class="callout-text">
						Selecciona un departamento para consultar sus proyectos, responsables y
						líneas de investigación.
					</p>
				</div>
			</CalloutBanner>
		</div>
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
</style>
