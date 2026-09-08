<script lang="ts">
	import type { Snippet } from "svelte";

	interface Props {
		title: string;
		open?: boolean;
		active?: boolean;
		variant?: "category" | "department";
		children?: Snippet;
		class?: string;
	}

	let {
		title,
		open = $bindable(false),
		active = false,
		variant = "department",
		children,
		class: className = ""
	}: Props = $props();

	function toggle() {
		if (variant === "department") {
			open = !open;
		}
	}
</script>

<div class="siaapi-nav-group variant-{variant} {className}">
	{#if variant === "category"}
		<div class="category-header">
			<span class="category-title">{title}</span>
		</div>
		<div class="group-content">
			{@render children?.()}
		</div>
	{:else}
		<button
			type="button"
			class="group-header"
			class:active
			onclick={toggle}
			aria-expanded={open}
		>
			<span class="department-title" class:active>{title}</span>
			<svg
				class="chevron-icon"
				class:rotated={open}
				class:active
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
		</button>

		{#if open}
			<div class="group-content">
				{@render children?.()}
			</div>
		{/if}
	{/if}
</div>

<style>
	.siaapi-nav-group {
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	/* CATEGORY HEADER (STATIC) */
	.category-header {
		padding-left: var(--nav-item-padding-x);
		padding-right: var(--nav-item-padding-x);
		padding-top: var(--space-3);
		padding-bottom: var(--space-2);
	}

	.category-title {
		font-family: var(--font-family-base);
		font-size: var(--font-size-xs);
		font-weight: var(--font-weight-bold);
		color: var(--color-text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	/* DEPARTMENT HEADER (INTERACTIVE ACCORDION) */
	.group-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-2);
		width: 100%;
		min-height: var(--nav-item-height);
		padding-left: var(--nav-item-padding-x);
		padding-right: var(--nav-item-padding-x);
		padding-top: var(--nav-item-padding-y);
		padding-bottom: var(--nav-item-padding-y);
		background-color: transparent;
		border: none;
		border-radius: var(--radius-md);
		cursor: pointer;
		text-align: left;
		transition: background-color 0.15s ease, color 0.15s ease;
		box-sizing: border-box;
	}

	.group-header:hover {
		background-color: var(--color-selection-background);
	}

	.group-header.active {
		background-color: var(--color-selection-background);
	}

	.department-title {
		font-family: var(--font-family-base);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-regular);
		color: var(--color-text);
		flex: 1;
		transition: color 0.15s ease;
	}

	.department-title.active {
		color: var(--color-primary);
		font-weight: var(--font-weight-bold);
	}

	.chevron-icon {
		width: 14px;
		height: 14px;
		color: var(--color-text-secondary);
		transition: transform 0.2s ease, color 0.15s ease;
		flex-shrink: 0;
	}

	.chevron-icon.rotated {
		transform: rotate(180deg);
	}

	.chevron-icon.active {
		color: var(--color-primary);
	}

	.group-content {
		display: flex;
		flex-direction: column;
		gap: var(--space-1);
		margin-top: var(--space-1);
	}
</style>
