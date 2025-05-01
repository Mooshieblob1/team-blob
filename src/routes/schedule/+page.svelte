<script lang="ts">
	import { matches } from '$lib/data/matches';
</script>

<section
	class="min-h-screen bg-black text-white px-4 py-20 bg-cover bg-center bg-no-repeat relative"
	style="background-image: url('/images/victory.png');"
>
	<!-- Dark overlay -->
	<div class="absolute inset-0 bg-black/80 pointer-events-none"></div>

	<!-- Content wrapper -->
	<div class="relative z-10">
		<h1 class="text-center text-4xl font-bold text-blob mb-10 uppercase tracking-wide">
			Match Schedule
		</h1>

		<div class="max-w-3xl mx-auto space-y-6">
			{#each matches as match}
				<div
					class="bg-zinc-900/90 p-4 rounded-lg shadow flex flex-col sm:flex-row justify-between items-center"
				>
					<div class="text-center sm:text-left">
						<p class="text-xl font-bold">{match.opponent}</p>
						<p class="text-sm text-zinc-400">{match.date} • {match.time}</p>
					</div>

					<!-- Animated result -->
					<div class="mt-2 sm:mt-0 text-sm font-bold">
						{#if match.result}
							<span class="text-green-400 animate-pulse">{match.result}</span>
						{:else}
							<span class="text-zinc-400 italic">Upcoming</span>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
