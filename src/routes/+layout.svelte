<script lang="ts">
	import '../app.css';
	import { showOnScrollToBottom } from '$lib/actions/showOnScrollToBottom';

	let mobileMenuOpen = false;

	const blobMessages = [
		"She's probably inting.",
		'She forgot to buy boots!',
		'Blob locked in Teemo again...',
		'Why is she splitting bot at 20 minutes?',
		"She just Flash-Q'd the tower.",
		'Blob is vibing in the fountain.',
		'She bought Mejai’s at 0/5/0.',
		'Coaching? Never heard of it.',
		'Solo queue menace spotted.',
		'Streaming with 2 viewers and 10 deaths!'
	];

	const randomMsg = blobMessages[Math.floor(Math.random() * blobMessages.length)];
</script>

<div class="min-h-screen bg-black text-white flex flex-col">
	<!-- Fixed top: nav + banner -->
	<div class="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur shadow-md">
		<!-- Navbar -->
		<nav class="flex items-center justify-between px-6 py-4">
			<div class="flex items-center space-x-4">
				<img src="/team-blob-logo.png" class="h-12 w-auto" alt="Team Blob Logo" />
				<span class="text-yellow-400 text-xl font-bold">Team Blob</span>

				<!-- Desktop sponsors -->
				<div class="hidden lg:flex items-center pl-4 border-l border-gray-700 space-x-3">
					<span class="text-xs text-gray-400 uppercase font-semibold">Sponsored by</span>
					<a href="https://legitcorp.com/" target="_blank" rel="noopener noreferrer">
						<img src="/sponsors/legitcorp.png" alt="LegitCorp" class="h-6 w-auto" />
					</a>
					<a href="https://axisorder.com" target="_blank" rel="noopener noreferrer">
						<img src="/sponsors/axis-order.png" alt="Axis Order" class="h-6 w-auto" />
					</a>
				</div>
			</div>

			<!-- Desktop nav -->
			<div class="hidden lg:flex space-x-6">
				<a href="/" class="hover:text-yellow-400 transition">Home</a>
				<a href="/roster" class="hover:text-yellow-400 transition">Roster</a>
				<a href="/schedule" class="hover:text-yellow-400 transition">Schedule</a>
				<a href="/news" class="hover:text-yellow-400 transition">News</a>
			</div>

			<!-- Mobile menu button -->
			<button class="lg:hidden text-white" on:click={() => (mobileMenuOpen = !mobileMenuOpen)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</nav>

		<!-- Mobile dropdown menu -->
		{#if mobileMenuOpen}
			<div class="lg:hidden flex flex-col items-center space-y-4 pb-4">
				<a href="/" class="hover:text-yellow-400 transition">Home</a>
				<a href="/roster" class="hover:text-yellow-400 transition">Roster</a>
				<a href="/schedule" class="hover:text-yellow-400 transition">Schedule</a>
				<a href="/news" class="hover:text-yellow-400 transition">News</a>

				<!-- Mobile sponsors -->
				<div class="flex items-center space-x-3 pt-2 border-t border-gray-700">
					<span class="text-xs text-gray-400 uppercase font-semibold">Sponsored by</span>
					<a href="https://legitcorp.com/" target="_blank" rel="noopener noreferrer">
						<img src="/sponsors/legitcorp.png" alt="LegitCorp" class="h-6 w-auto" />
					</a>
					<a href="https://axisorder.com" target="_blank" rel="noopener noreferrer">
						<img src="/sponsors/axis-order.png" alt="Axis Order" class="h-6 w-auto" />
					</a>
				</div>
			</div>
		{/if}

		<!-- Live banner -->
		<div
			class="bg-blob text-yellow-400 py-2 px-4 flex items-center justify-center gap-2 text-sm font-semibold"
		>
			<img
				src="/images/blob.png"
				alt="Blob"
				class="w-6 h-6 rounded-full object-cover border border-black"
			/>
			<span class="uppercase tracking-wide">Blob is currently live in solo queue</span>
			<span class="text-xs italic ml-2">({randomMsg})</span>
			<span class="animate-ping w-2 h-2 bg-red-500 rounded-full ml-2"></span>
		</div>
	</div>

	<!-- Main page content -->
	<main class="pt-[10.5rem] lg:pt-[7.5rem] flex-grow">
		<slot />
	</main>

	<!-- Footer shown only at bottom -->
	<footer
		class="w-full text-center text-sm text-gray-400 py-4 opacity-0 transition-opacity duration-300"
		use:showOnScrollToBottom
	>
		Yes this is clearly a fake team
	</footer>
</div>
