<script lang="ts">
	interface Props {
		label: string;
		href?: string;
		active?: boolean;
		showDot?: boolean;
		hasChevron?: boolean;
		indent?: boolean;
		onclick?: (e: MouseEvent) => void;
		class?: string;
	}

	let {
		label,
		href,
		active = false,
		showDot = false,
		hasChevron = false,
		indent = false,
		onclick,
		class: className = ""
	}: Props = $props();
</script>

{#if href}
	<a
		{href}
		class="siaapi-nav-item {className}"
		class:active
		class:has-dot={showDot || active}
		class:indented={indent}
		{onclick}
	>
		{#if showDot || active}
			<span class="indicator-line" aria-hidden="true"></span>
		{/if}
		<span class="label">{label}</span>
		{#if hasChevron}
			<svg
				class="chevron-icon"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="6 9 12 15 18 9"></polyline>
			</svg>
		{/if}
	</a>
{:else}
	<button
		type="button"
		class="siaapi-nav-item {className}"
		class:active
		class:has-dot={showDot || active}
		class:indented={indent}
		{onclick}
	>
		{#if showDot || active}
			<span class="indicator-line" aria-hidden="true"></span>
		{/if}
		<span class="label">{label}</span>
		{#if hasChevron}
			<svg
				class="chevron-icon"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="6 9 12 15 18 9"></polyline>
			</svg>
		{/if}
	</button>
{/if}

<style>
	.siaapi-nav-item {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		width: 100%;
		height: var(--nav-item-height);
		padding-left: var(--nav-item-padding-x);
		padding-right: var(--nav-item-padding-x);
		padding-top: var(--nav-item-padding-y);
		padding-bottom: var(--nav-item-padding-y);
		font-family: var(--font-family-base);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-regular);
		color: var(--color-text);
		background-color: transparent;
		border: none;
		border-radius: var(--radius-md);
		text-decoration: none;
		box-sizing: border-box;
		cursor: pointer;
		text-align: left;
		transition: background-color 0.15s ease, color 0.15s ease;
	}

	.siaapi-nav-item.indented {
		padding-left: var(--space-6);
	}

	.siaapi-nav-item:hover {
		background-color: var(--color-selection-background);
		color: var(--color-text);
	}

	.siaapi-nav-item.active {
		background-color: var(--color-selection-background);
		color: var(--color-primary);
		font-weight: var(--font-weight-bold);
	}

	.indicator-line {
		display: inline-block;
		width: 3px;
		height: 16px;
		border-radius: var(--radius-full);
		background-color: var(--color-primary);
		flex-shrink: 0;
	}

	.label {
		flex: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.chevron-icon {
		width: 14px;
		height: 14px;
		color: var(--color-text-secondary);
		flex-shrink: 0;
	}
</style>
