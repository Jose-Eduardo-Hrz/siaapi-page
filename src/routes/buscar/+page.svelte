<script lang="ts">
    import type { PageData } from "./$types";
    import { Card, StatusBadge } from "$lib";
    import { capitalizarPrimerLetra , capitalizarPrimerLetraConLimite , capitalizarCadaPalabras} from "$lib/funciones/utils";

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>Resultados de búsqueda | SIAAPI</title>
</svelte:head>

<div class="search-page-container">
    <!-- Banner superior de resultados de búsqueda -->
    <Card accentLeft={true} padding="md">
        <div class="results-header">
            <h1 class="results-title">Resultados de búsqueda</h1>
            <p class="results-count">
                {data.totalResultados} resultados encontrados
            </p>
        </div>
    </Card>

    <!-- Sección 1: Programas Académicos -->
    <Card accentLeft={true} padding="none">
        <div class="card-section-header">
            <div class="section-title-wrapper">
                <svg
                    class="section-icon"
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
                <h2 class="section-title-text">Programas Académicos</h2>
            </div>
            <span class="count-badge">{data.pias.length}</span>
        </div>

        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Área académica</th>
                        <th>Departamento</th>
                    </tr>
                </thead>

                <tbody>
                    {#each data.pias as programa (programa.id)}
                        <tr>
                            <td class="col-program-name">{capitalizarPrimerLetraConLimite(programa.nombre)}</td>
                            <td>{capitalizarPrimerLetra(programa.area)}</td>
                            <td>{capitalizarPrimerLetra(programa.departamento)}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </Card>

    <!-- Sección 2: Proyectos Académicos -->
    <Card accentLeft={true} padding="none">
        <div class="card-section-header">
            <div class="section-title-wrapper">
                <svg
                    class="section-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
                <h2 class="section-title-text">Proyectos Académicos</h2>
            </div>
            <span class="count-badge">{data.proyectos.length}</span>
        </div>

        <div class="table-container">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Clave</th>
                        <th>Nombre</th>
                        <th>Acuerdo</th>
                        <th>Responsable</th>
                        <th>Programa académico</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {#each data.proyectos as proyecto (proyecto.clave)}
                        <tr>
                            <td class="col-clave">{proyecto.clave}</td>
                            <td class="col-project-name">{capitalizarPrimerLetraConLimite(proyecto.nombre)}</td>
                            <td>{proyecto.acuerdo}</td>
                            <td>{capitalizarCadaPalabras(proyecto.responsable)}</td>
                            <td>{capitalizarPrimerLetra(proyecto.pia)}</td>
                            <td>
                                <StatusBadge status={proyecto.estado} />
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </Card>
</div>

<style>
    .search-page-container {
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
    }

    .results-header {
        display: flex;
        flex-direction: column;
        gap: var(--space-1);
    }

    .results-title {
        font-family: var(--font-family-base);
        font-size: var(--font-size-xl);
        font-weight: var(--font-weight-bold);
        color: var(--color-text);
        line-height: var(--line-height-tight);
        margin: 0;
    }

    .results-count {
        font-family: var(--font-family-base);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
        color: var(--color-primary);
        margin: 0;
    }

    .card-section-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-4) var(--space-6);
        border-bottom: var(--border-width-thin) solid var(--color-border-subtle);
    }

    .section-title-wrapper {
        display: flex;
        align-items: center;
        gap: var(--space-2);
    }

    .section-icon {
        width: 18px;
        height: 18px;
        color: var(--color-primary);
        flex-shrink: 0;
    }

    .section-title-text {
        font-family: var(--font-family-base);
        font-size: var(--font-size-md);
        font-weight: var(--font-weight-bold);
        color: var(--color-text);
        margin: 0;
    }

    .count-badge {
        font-family: var(--font-family-base);
        font-size: var(--font-size-xs);
        font-weight: var(--font-weight-semibold);
        color: var(--color-text-secondary);
        background-color: var(--color-surface-secondary);
        padding: 2px 10px;
        border-radius: var(--radius-sm);
        line-height: 1.4;
    }

    .table-container {
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .data-table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
        font-family: var(--font-family-base);
    }

    .data-table th {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-bold);
        color: var(--color-text-secondary);
        padding: var(--space-3) var(--space-6);
        border-bottom: var(--border-width-thin) solid var(--color-border-subtle);
        background-color: var(--color-surface);
        white-space: nowrap;
    }

    .data-table td {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        padding: var(--space-3) var(--space-6);
        border-bottom: var(--border-width-thin) solid var(--color-border-subtle);
        vertical-align: middle;
    }

    .data-table tbody tr:last-child td {
        border-bottom: none;
    }

    .data-table tbody tr:hover {
        background-color: var(--color-surface-secondary);
    }

    .col-program-name {
        font-weight: var(--font-weight-bold);
        color: var(--color-text) !important;
    }

    .col-project-name {
        color: var(--color-text-secondary);
    }

    .col-clave {
        font-weight: var(--font-weight-bold);
        color: var(--color-primary) !important;
        white-space: nowrap;
    }

    @media (max-width: 640px) {
        .card-section-header {
            padding: var(--space-3) var(--space-4);
        }

        .data-table th,
        .data-table td {
            padding: var(--space-2) var(--space-3);
        }
    }
</style>
