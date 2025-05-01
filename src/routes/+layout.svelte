<script lang="ts">
	import '../app.css';

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

<div class="min-h-screen bg-black text-white">
	<!-- Fixed top: nav + banner -->
	<div class="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur shadow-md">
		<!-- Navbar -->
		<nav class="flex items-center justify-between px-6 py-4">
			<div class="flex items-center space-x-3">
				<img src="/team-blob-logo.png" class="h-12 w-auto" alt="Team Blob Logo" />
				<span class="text-yellow-400 text-xl font-bold">Team Blob</span>
			</div>

			<div class="space-x-6">
				<a href="/" class="hover:text-yellow-400 transition">Home</a>
				<a href="/roster" class="hover:text-yellow-400 transition">Roster</a>
				<a href="/schedule" class="hover:text-yellow-400 transition">Schedule</a>
				<a href="/news" class="hover:text-yellow-400 transition">News</a>
			</div>
		</nav>

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

	<!-- Main page content will render here -->
	<main class="pt-[7.5rem]">
		<slot />
	</main>
</div>
