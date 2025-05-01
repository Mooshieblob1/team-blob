<script>
	import '../app.css';
</script>

<!-- Simulates the body -->
<div class="min-h-screen bg-black text-white">
	<!-- Sticky nav -->
	<nav
		class="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur text-white flex items-center justify-between px-6 py-4 shadow-md"
	>
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

	<!-- Main page content will render here -->
	<main class="pt-20">
		<slot />
	</main>
</div>
