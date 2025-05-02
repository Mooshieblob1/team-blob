<script lang="ts">
	import { players } from '$lib/data/players';
	import PlayerCard from '$lib/components/PlayerCard.svelte';
</script>

<h1 class="text-3xl pl-12 pr-12 font-bold mb-4 text-white">Team Roster</h1>

<div class="grid pl-12 pr-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
	{#each players as player}
		<PlayerCard {...player} />
	{/each}
</div>
