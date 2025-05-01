<script lang="ts">
	export let name: string;
	export let role: string;
	export let region: string;
	export let image: string;
	export let stats: { kda: string; wr: string; champs: string[] };

	const regionFlags: Record<string, string> = {
		OCE: '/flags/oce.png',
		KR: '/flags/kr.png',
		NA: '/flags/na.png',
		'EU-DE': '/flags/eu-de.png',
		BR: '/flags/br.png',
		JP: '/flags/jp.png'
	};

	const flagSrc = regionFlags[region] || '';
</script>

<div class="bg-zinc-900 text-white rounded-xl p-4 shadow-lg hover:scale-105 transition">
	<img src={image} alt={name} class="w-24 h-24 rounded-full mx-auto mb-2 object-cover" />

	<!-- Name + Flag -->
	<div class="flex items-center justify-center gap-2">
		<h2 class="text-xl font-bold">{name}</h2>
		{#if flagSrc}
			<img src={flagSrc} alt={region} class="w-6 h-4 rounded-sm border border-zinc-700" />
		{/if}
	</div>

	<p class="text-sm text-center text-zinc-400 mt-1">{role}</p>

	<div class="mt-2 text-sm text-center">
		<p>KDA: <strong>{stats.kda}</strong></p>
		<p>Winrate: <strong>{stats.wr}</strong></p>
		<p>Champs: {stats.champs.join(', ')}</p>
	</div>
</div>
