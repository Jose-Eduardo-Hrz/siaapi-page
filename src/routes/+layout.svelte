<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";
	import "$lib/styles/tokens.css";
	import { capitalizarPrimerLetra } from "$lib/funciones/utils";
	import {
		AppShell,
		Card,
		Header,
		SearchInput,
		SidebarNav,
		NavGroup,
		NavItem,
	} from "$lib";
	import { page } from "$app/state";
	import type { LayoutProps } from "./$types";
	import { goto } from "$app/navigation";
	import { asset } from "$app/paths";
	let { data, children }: LayoutProps = $props();

	let searchQuery = $state("");
	let openDeptos = $state<Record<string, boolean>>({
		"19": false,
		"18": false,
		"17": false,
		"16": false,
		"15": false,
	});

	// Auto-expand and keep open the department accordion that contains the active route/area
	$effect(() => {
		const currentPath = page.url.pathname;
		for (const depto of data.departamentos) {

			if (depto.areas.some((area) => asset(area.href) === currentPath)) {
				openDeptos[depto.id] = true;
			}
		}
	});

	function handleSearch(query: string) {
		if (searchQuery.trim()) {
			goto(asset(`/buscar?q=${encodeURIComponent(searchQuery.trim())}`));
		}
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#snippet headerSnippet()}
	<Card variant="flat" padding="lg">
		<Header
			topLabel="UAM AZCAPOTZALCO · DIVISIÓN DE CIENCIAS BÁSICAS E INGENIERÍA"
			titlePrefix="Sistema de Información de Áreas Académicas y Proyectos de Investigación CBI"
			acronym="(SIAAPI)"
			titleSuffix=""
		/>
	</Card>
{/snippet}

{#snippet sidebarSnippet()}
	<SidebarNav>
		<SearchInput
			bind:value={searchQuery}
			placeholder="Buscar"
			buttonLabel="Buscar"
			onsearch={handleSearch}
		/>

		<div class="nav-section">
			<!-- 1. INICIO (ENLACE A /) -->
			<NavItem
				label="Inicio"
				href={asset("/")}
				active={page.url.pathname === asset("/")}
			/>

			<!-- 2. DEPARTAMENTOS ACADÉMICOS (TÍTULO DE SECCIÓN ESTÁTICO) -->
			<NavGroup title="DEPARTAMENTOS ACADÉMICOS" variant="category">
				<!-- 3. ACORDEONES INDEPENDIENTES DE DEPARTAMENTOS -->
				{#each data.departamentos as depto (depto.id)}
					{@const isDeptoActive =
						openDeptos[depto.id] ||
						depto.areas.some(
							(area) => asset(page.url.pathname) === asset(area.href),
						)}
					<NavGroup
						title={capitalizarPrimerLetra(depto.nombre)}
						variant="department"
						bind:open={openDeptos[depto.id]}
						active={isDeptoActive}
					>
						{#each depto.areas as area (area.id)}
							<NavItem
								label={capitalizarPrimerLetra(area.nombre)}
								href={asset(area.href)}
								indent={true}
								active={page.url.pathname === asset(area.href)}
							/>
						{/each}
					</NavGroup>
				{/each}
			</NavGroup>

			<hr class="nav-divider" />

			<!-- 4. CONSULTA INSTITUCIONAL -->
			<NavItem
				label="Consejo Divisional CBI"
				href="https://consejodivcbi.azc.uam.mx/"
				showDot={true}
				active={(page.url.pathname as string) ===
					"/consulta-institucional"}
			/>
		</div>
	</SidebarNav>
{/snippet}

<AppShell header={headerSnippet} sidebar={sidebarSnippet}>
	{@render children()}
</AppShell>

<style>
	.nav-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}

	.nav-divider {
		border: none;
		border-top: var(--border-width-thin) solid var(--color-border-subtle);
		margin-top: var(--space-4);
		margin-bottom: var(--space-4);
	}
</style>
