<script lang="ts">
	interface Props {
		status: "Activo" | "Inactivo";
		class?: string;
	}

	let { status, class: className = "" }: Props = $props();
</script>

<span class="status-badge status-{status.toLowerCase()} {className}">
	{status}
</span>

<style>
	.status-badge {
		font-family: var(--font-family-base);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-semibold);
		padding: 2px 10px;
		border-radius: var(--radius-full);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		line-height: 1.2;
		white-space: nowrap;
	}

	.status-activo {
		background-color: var(--color-status-active-bg);
		color: var(--color-status-active-text);
	}

	.status-inactivo {
		background-color: var(--color-status-inactive-bg);
		color: var(--color-status-inactive-text);
	}
</style>
