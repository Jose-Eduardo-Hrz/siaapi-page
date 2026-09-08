<script lang="ts">
	interface Props {
		value?: string;
		placeholder?: string;
		buttonLabel?: string;
		onsearch?: (value: string) => void;
		class?: string;
	}

	let {
		value = $bindable(""),
		placeholder = "Buscar en el portal...",
		buttonLabel = "Buscar",
		onsearch,
		class: className = ""
	}: Props = $props();

	function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		onsearch?.(value);
	}
</script>

<form class="siaapi-search-form {className}" onsubmit={handleSubmit} role="search">
	<div class="input-wrapper">
		<svg
			class="search-icon"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<circle cx="11" cy="11" r="8"></circle>
			<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
		</svg>
		<input
			type="text"
			bind:value
			{placeholder}
			class="search-input"
		/>
	</div>
	<button type="submit" class="search-button">
		{buttonLabel}
	</button>
</form>

<style>
	.siaapi-search-form {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		width: 100%;
	}

	.input-wrapper {
		position: relative;
		display: flex;
		align-items: center;
		flex: 1;
	}

	.search-icon {
		position: absolute;
		left: var(--input-padding-x);
		width: 16px;
		height: 16px;
		color: var(--color-text-secondary);
		pointer-events: none;
	}

	.search-input {
		width: 100%;
		height: var(--input-height);
		padding-top: var(--input-padding-y);
		padding-bottom: var(--input-padding-y);
		padding-left: calc(var(--input-padding-x) * 2.5);
		padding-right: var(--input-padding-x);
		font-family: var(--font-family-base);
		font-size: var(--font-size-sm);
		color: var(--color-text);
		background-color: var(--color-surface);
		border: var(--border-width-thin) solid var(--color-border);
		border-radius: var(--radius-sm);
		box-sizing: border-box;
		outline: none;
		transition: border-color 0.2s ease;
	}

	.search-input::placeholder {
		color: var(--color-text-secondary);
	}

	.search-input:focus {
		border-color: var(--color-primary);
	}

	.search-button {
		height: var(--button-height);
		padding-left: var(--button-padding-x);
		padding-right: var(--button-padding-x);
		padding-top: var(--button-padding-y);
		padding-bottom: var(--button-padding-y);
		font-family: var(--font-family-base);
		font-size: var(--font-size-sm);
		font-weight: var(--font-weight-semibold);
		color: var(--color-text-on-primary);
		background-color: var(--color-primary);
		border: none;
		border-radius: var(--radius-sm);
		cursor: pointer;
		white-space: nowrap;
		transition: background-color 0.2s ease;
	}

	.search-button:hover {
		background-color: var(--color-primary-hover);
	}

	.search-button:active {
		background-color: var(--color-primary-active);
	}
</style>
