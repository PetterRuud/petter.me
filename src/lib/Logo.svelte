<script lang="ts">
	let { size = 48 }: { size?: number } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 100 100"
	width={size}
	height={size}
	fill="none"
	stroke="currentColor"
	stroke-linecap="round"
	stroke-linejoin="round"
	role="img"
	aria-label="Petter Ruud"
>
	<path d="M50 6 88.1 28v44L50 94 11.9 72V28Z" stroke-width="6" />
	<path d="M36.4 74V35L52 26l15.6 9v18L52 62l-15.6-9" stroke-width="8" />
</svg>
