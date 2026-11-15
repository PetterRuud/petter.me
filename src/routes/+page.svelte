<script lang="ts">
	import { onMount, tick } from 'svelte';

	type Line = { kind: 'in' | 'out' | 'err'; text: string };

	const prompt = 'guest@petter.me:~$';

	const commands: Record<string, () => string | string[]> = {
		help: () => [
			'available commands:',
			'  whoami        who is this guy',
			'  ls            list stuff',
			'  cat stack.txt the tech, the myth, the legend',
			'  sudo hire-me  elevate privileges',
			'  coffee        refuel the developer',
			'  ping          check if anyone is home',
			'  date          what time is it in prod',
			'  clear         make it go away',
			'  exit          leave (good luck)'
		],
		whoami: () =>
			'petter — full-stack developer @ JPro. front-end by day, also front-end by night.',
		ls: () => 'projects/  side-projects/  unfinished-side-projects/  node_modules/ (do not open)',
		'cat stack.txt': () => [
			'TypeScript  Svelte  React  Node.js  CSS (yes, it is a real language)',
			'runtime dependency: coffee@latest'
		],
		'sudo hire-me': () => [
			'[sudo] password for recruiter: ********',
			'access granted ✓ — opening a secure channel: linkedin.com/in/petterr'
		],
		coffee: () => 'HTTP 418: I am a teapot. brewing anyway... ☕',
		ping: () => 'pong — 0.0ms (it is localhost in my heart)',
		date: () => `${new Date().toString()} — works on my machine™`,
		exit: () => 'you are in vim now. nobody exits vim.',
		':q': () => 'E37: No write since last change (add ! to override)',
		':q!': () => 'nice. you are one of the few. 🏆',
		'rm -rf /': () => 'permission denied. also: this site is static, there is nothing to delete.',
		'sudo rm -rf /': () => 'this incident will be reported. 📎',
		vim: () => 'already running. you never left.',
		emacs: () => 'segfault: holy war detected',
		hello: () => 'world',
		'hello world': () => 'congrats, you are now a programmer'
	};

	let lines: Line[] = [];
	let input = '';
	let history: string[] = [];
	let historyIndex = -1;
	let field: HTMLInputElement;
	let uptime = '00:00:00';

	function run(raw: string) {
		const cmd = raw.trim().replace(/\s+/g, ' ');
		lines = [...lines, { kind: 'in', text: cmd }];
		if (!cmd) return;
		history = [cmd, ...history];
		historyIndex = -1;

		if (cmd === 'clear') {
			lines = [];
			return;
		}

		const handler = commands[cmd.toLowerCase()];
		if (!handler) {
			lines = [...lines, { kind: 'err', text: `zsh: command not found: ${cmd}. try 'help'` }];
			return;
		}

		const out = handler();
		lines = [...lines, ...[out].flat().map((text) => ({ kind: 'out' as const, text }))];

		if (cmd === 'sudo hire-me') {
			setTimeout(() => window.open('https://www.linkedin.com/in/petterr', '_blank'), 900);
		}
	}

	async function onKey(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			run(input);
			input = '';
			await tick();
			field?.scrollIntoView({ block: 'nearest' });
		} else if (e.key === 'ArrowUp' && history.length) {
			e.preventDefault();
			historyIndex = Math.min(historyIndex + 1, history.length - 1);
			input = history[historyIndex];
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			historyIndex = Math.max(historyIndex - 1, -1);
			input = historyIndex === -1 ? '' : history[historyIndex];
		} else if (e.key === 'l' && e.ctrlKey) {
			e.preventDefault();
			lines = [];
		}
	}

	onMount(() => {
		console.log(
			'%c> hey, you opened devtools. respect.\n> the source is on github.com/PetterRuud — no minified secrets here.',
			'color: greenyellow; background: black; font-family: monospace; padding: 4px;'
		);

		const start = Date.now();
		const timer = setInterval(() => {
			const s = Math.floor((Date.now() - start) / 1000);
			uptime = [s / 3600, (s % 3600) / 60, s % 60]
				.map((n) => String(Math.floor(n)).padStart(2, '0'))
				.join(':');
		}, 1000);
		return () => clearInterval(timer);
	});
</script>

<svelte:head>
	<title>Petter Ruud — Full-stack developer</title>
	<meta
		name="description"
		content="Petter Ruud — full-stack developer at JPro. Mostly front-end. Powered by coffee."
	/>
</svelte:head>

<div class="crt" aria-hidden="true" />

<div class="container">
	<header class="header">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.5 290.29">
			<title>Petter</title>
			<path
				d="M27.16,224.37C17.72,218.72,10,205.1,10,194.1V90.1c0-11,7.9-24.3,17.57-29.56l85.61-46.6c9.67-5.26,25.47-5.25,35.12,0L234,60.76C243.6,66,251.5,79.35,251.5,90.35V194.1c0,11-7.72,24.62-17.16,30.27l-86.43,51.69c-9.44,5.64-24.88,5.64-34.32,0Z"
				fill="none"
				stroke="currentcolor"
				stroke-miterlimit="1"
				stroke-width="10"
			/>
			<path
				d="M56.41,199.32V108.66c0-5.5,4-12.15,8.79-14.76l56.67-30.65c4.84-2.62,12.75-2.6,17.57,0l56.49,30.9c4.82,2.64,8.77,9.3,8.77,14.8v66.5c0,5.5-3.86,12.32-8.57,15.15l-56.81,34.19c-4.71,2.84-12.42,2.83-17.12,0L84.89,202.18c-4.7-2.86-8.56-.69-8.57,4.81l0,11.14c0,5.5-3.88,7.69-8.59,4.86L65,221.36c-4.71-2.83-8.57-9.64-8.57-15.14Zm65.81,2.7c4.69,2.87,12.37,2.87,17.05,0l37.16-22.79c4.68-2.88,8.52-9.73,8.52-15.23V121c0-5.5-3.95-12.16-8.77-14.8L139.33,86c-4.83-2.64-12.73-2.65-17.56,0L85.23,106c-4.83,2.63-8.78,9.29-8.78,14.79V164c0,5.5,3.84,12.35,8.53,15.22Z"
				fill="currentcolor"
				stroke-miterlimit="1"
			/>
		</svg>
		<nav>
			<ul class="links">
				<li>
					<a href="https://www.linkedin.com/in/petterr" title="LinkedIn">./linkedin</a>
				</li>
				<li>
					<a href="https://github.com/PetterRuud/" title="GitHub">./github</a>
				</li>
			</ul>
		</nav>
	</header>

	<main>
		<article>
			<p class="cmd boot">
				<span class="ps1">{prompt}</span> <span class="typed">whoami</span>
			</p>
			<h1 class="reveal r1" data-text="Hello">Hello<span class="sr-only">, world</span></h1>
			<p class="bio reveal r2">
				Petter Ruud is an experienced full-stack developer at JPro, where he has a primary focus on
				front-end development
				<span class="carret">_</span>
			</p>

			<ul class="stats reveal r3">
				<li><span class="ok">[ OK ]</span> compiling personality… 0 errors, 42 warnings</li>
				<li><span class="ok">[ OK ]</span> loaded <code>tabs</code> &gt; <code>spaces</code> (fight me)</li>
				<li>
					<span class="warn">[WARN]</span> <code>coffee.level</code> below threshold — refilling
				</li>
			</ul>

			<div class="term reveal r4" on:click={() => field?.focus()} role="presentation">
				{#each lines as line}
					{#if line.kind === 'in'}
						<p><span class="ps1">{prompt}</span> {line.text}</p>
					{:else}
						<p class:err={line.kind === 'err'} class="out">{line.text}</p>
					{/if}
				{/each}
				<label class="input-line">
					<span class="ps1">{prompt}</span>
					<input
						bind:this={field}
						bind:value={input}
						on:keydown={onKey}
						spellcheck="false"
						autocomplete="off"
						autocapitalize="off"
						aria-label="Terminal input. Type help for commands."
						placeholder="type 'help'"
					/>
				</label>
			</div>
		</article>
	</main>

	<footer class="statusbar">
		<span class="mode">-- NORMAL --</span>
		<span>⎇ master ✓</span>
		<span class="hide-sm">utf-8</span>
		<span class="hide-sm">200 OK</span>
		<span class="grow" />
		<span class="hide-sm">uptime {uptime}</span>
		<span>:q to exit</span>
	</footer>
</div>
