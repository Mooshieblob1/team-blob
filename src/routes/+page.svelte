<script lang="ts">
	let email = '';
	let submitted = false;

	function fakeSubmit() {
		if (email.trim()) {
			submitted = true;
			setTimeout(() => {
				email = '';
				submitted = false;
			}, 3000);
		}
	}
</script>

<!-- Hero Section with Team Background -->
<section
	class="relative w-full h-[90vh] bg-black bg-cover bg-center overflow-hidden text-center flex flex-col justify-center items-center px-4 text-blob"
	style="background-image: url('/images/team-blob.jpg');"
>
	<!-- Optional dark overlay -->
	<div class="absolute inset-0 bg-black/60 z-0"></div>

	<!-- Main Content -->
	<div class="relative z-10">
		<h1
			class="text-6xl sm:text-7xl font-black tracking-widest uppercase drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]"
		>
			We Are Team Blob
		</h1>

		<p class="text-lg sm:text-xl mt-4 text-yellow-200 max-w-xl leading-relaxed">
			OCE’s most questionable League team,<br />
			powered by dreams and copium.
		</p>

		<a
			href="/roster"
			class="mt-8 inline-block bg-blob text-yellow-500 px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300"
		>
			View Roster
		</a>
	</div>
</section>

<!-- Subscribe Section -->
<section
	class="bg-zinc-900 text-white py-12 px-6 flex flex-col md:flex-row items-center justify-center gap-8 rounded-xl mx-auto max-w-6xl mt-20 shadow-lg"
>
	<!-- Smaller image -->
	<div class="w-full md:w-[40%]">
		<img
			src="/images/blob-subscribe.jpg"
			alt="Blob wins again"
			class="rounded-3xl w-full object-cover shadow-xl"
		/>
	</div>

	<!-- Blobby subscribe box -->
	<div class="w-full md:w-[60%] text-center md:text-left space-y-4">
		<h2 class="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-blob">
			Subscribe to our emails
		</h2>
		<p class="text-zinc-400 text-sm">Be the first to know when Blob streams and forgets boots.</p>

		{#if submitted}
			<p class="text-green-400 font-semibold">🎉 You're in. Time to pray for her KDA.</p>
		{:else}
			<div class="flex flex-col sm:flex-row items-center gap-3 mt-4">
				<input
					type="email"
					bind:value={email}
					placeholder="Email"
					class="bg-black border border-zinc-700 px-4 py-2 rounded-full w-full text-white placeholder-zinc-500 shadow-inner"
				/>
				<button
					class="bg-white text-black font-bold px-6 py-2 rounded-full hover:scale-105 transition-all shadow-md whitespace-nowrap"
					on:click={fakeSubmit}
				>
					Sign Up
				</button>
			</div>
		{/if}
	</div>
</section>
