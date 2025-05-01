<script lang="ts">
	import { news } from '$lib/data/news';

	const pageSize = 3;
	let currentPage = 1;

	$: totalPages = Math.ceil(news.length / pageSize);
	$: paginated = news.slice((currentPage - 1) * pageSize, currentPage * pageSize);
</script>

<section
	class="min-h-screen bg-black text-white px-4 py-20 bg-cover bg-center bg-no-repeat relative"
	style="background-image: url('/images/landscape.png');"
>
	<!-- Dark overlay -->
	<div class="absolute inset-0 bg-black/80 pointer-events-none"></div>

	<!-- Content wrapper -->
	<div class="relative z-10">
		<h1 class="text-center text-4xl font-bold text-blob mb-10 uppercase tracking-wide">
			Team News
		</h1>

		<div class="max-w-3xl mx-auto space-y-6">
			{#each paginated as article}
				<div class="bg-zinc-900/90 p-6 rounded-lg shadow">
					<h2 class="text-2xl font-bold">{article.title}</h2>
					<p class="text-sm text-zinc-400 mb-2">{article.date}</p>
					<p class="text-zinc-300">{article.content}</p>
				</div>
			{/each}
		</div>

		<!-- Pagination controls -->
		<div class="mt-10 flex justify-center gap-4 text-sm text-yellow-400">
			<button
				on:click={() => currentPage--}
				disabled={currentPage === 1}
				class="disabled:opacity-30"
			>
				Prev
			</button>
			<span>Page {currentPage} of {totalPages}</span>
			<button
				on:click={() => currentPage++}
				disabled={currentPage === totalPages}
				class="disabled:opacity-30"
			>
				Next
			</button>
		</div>
	</div>
</section>
