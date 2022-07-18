<!-- Author Lisa Bucher -->
<script>
	
	//import Ff from './ff.svelte';
	import Home from './Home.svelte';
	//import Semantic from './Semantic.svelte';
	import Subtree from './Subtree.svelte';
	import Visu from './Visu.svelte';
	let topic = 'Big data';
	let usecase = 'create';
	let displaymode = 'Complete';
	let optimized = false;
	let name = '';
	let mode = '';

	$: if (optimized) {displaymode = 'optimized'}
	else { displaymode = 'complete'};

	let treesettings = {
		name: topic,
		type: 'default',
	}

	$: if (topic || optimized){
		treesettings.name = topic	
	}


	

	export let menu = 1
	$: if (menu === 2) {
		topic = 'Processing'
		usecase = 'create'
	}
	else if (menu === 3) {
		topic = 'DataPlatform'
		usecase = 'create'
	}
	else if (menu === 4) {
		topic = 'Infrastructure'
		usecase = 'create'
	}
	else if (menu === 5) {
		topic = 'Final big data'
	}
	$: if (menu === 1) {
		topic = 'Big data'}

</script>

<body>

	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div id = "navi" class="container-fluid">
		<a class="navbar-brand" href="/" on:click|preventDefault={() => (menu = 1)}>Home</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link active" aria-current="page" href="/Visu" on:click|preventDefault={() => (menu = 5)}>Big data application Tree</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/Processing" on:click|preventDefault={() => (menu = 2)}>Processing Frameworks</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/DataPlatforms" on:click|preventDefault={() => (menu = 3)}>Data Platforms</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="/Infrastructure" on:click|preventDefault={() => (menu = 4)}>Infrastructure Frameworks</a>
			</li>
			
			</ul>
		</div>
		</div>
	</nav>
	<h1 class="display-3">{topic} decision trees</h1>
	<p class="lead">Generate your big data benchmark or verify your results!</p>
	<!-- <p>{optimized}, {mode}, {name}</p> -->

	{#if menu === 1}
	<Home />
	
	{:else if menu === 5 && displaymode}
	<div class="d-flex justify-content-center p-3">
		<div class="d-flex justify-content-center p-3">
				<div class="form-check form-switch">
					<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" on:click={() => (optimized = !optimized)}>
					<label class="form-check-label" for="flexSwitchCheckDefault">{displaymode} tree display mode</label>
				</div>
		</div>
	</div>
		{#if displaymode === 'optimized'}
		<Visu name='Processing' displaymode='optimized'/>
		<Visu name='DataPlatform' displaymode='optimized'/>
		<Visu name='Infrastructure' displaymode='optimized'/>
		{:else}
		<Visu name='Processing' displaymode='complete'/>
		<Visu name='DataPlatform' displaymode='complete'/>
		<Visu name='Infrastructure' displaymode='complete'/>
		{/if}
	{:else if menu === 2 || 3 || 4}
	<div class="d-flex justify-content-center p-3">
		<div class="btn-group" role="group" aria-label="Basic example">
			<button type="button" class="btn btn-primary " on:click|preventDefault={() => (usecase = 'create')}>Create Decision Tree</button>
			<button type="buttons" class="btn btn-primary " on:click|preventDefault={() => (usecase = 'visu')}>Visualize Decision Tree</button>
		</div>
	</div>
	
	<p class="pb-5"></p>
	{#if usecase === 'visu' && displaymode}
		<div class="d-flex justify-content-center pt-3">
			<div class="d-flex justify-content-center pb-5">
					<div class="form-check form-switch">
						<input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" on:click={() => (optimized = !optimized)} >
						<!-- value={option} bind:group={value} -->
						<label class="form-check-label" for="flexSwitchCheckDefault">{displaymode} tree display mode</label>
					</div>
			</div>
		</div>
			{#if displaymode === 'optimized'}
			<Visu name={treesettings.name} displaymode='optimized'/>
			{:else}
			<Visu name={treesettings.name} displaymode='complete'/>
			{/if}
	{:else}
		<Subtree name={treesettings.name}/>
	{/if} 
	{:else}
		
	
	<h1>
		Page Not Found
	</h1>
	{/if} 

		
		
</body>
<footer class="footer mt-auto py-5"> 
	<div class="container">
		<span class="text-muted"> Copyright by Lisa Bucher | LinkedIn | 12.07.2022 </span>
	</div>
</footer>


<style>
	* {
		font-size: large;
	}
	h1 {
    text-align: center;
    letter-spacing: 5px;
    padding: 2rem;
	font-size: 48px;
    }
	p {
		text-align: center;
	}

	body {
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: rgb(248, 239, 228);
	padding-top: 3rem;
    padding-bottom: 3rem;
	height: 300rem;
	/* background-size: auto;
    text-align: center;
    padding-top: 100px; */
	
  	}
  	footer {
	  background-color: rgb(46, 33, 61);
	  color: white;
  	}

	#navi {
    	background-color: #dcd7e6;
		text-align: center;
		max-width: 90rem;
		display: flex;
  		align-items: center;
		border-radius: 1em;
		padding: 1em;
		letter-spacing: 1px;
  	} 

	.btn-primary {
        background-color: rgb(62, 19, 102);
        border: rgb(62, 19, 102);
    }

    .btn-primary:hover {
        background-color: blueviolet !important;
    }

	.btn-primary:focus {
        background-color: blueviolet !important;
		box-shadow: none;
    }

	 .form-check-input:focus {
		border-color:rgb(148, 65, 120);
		box-shadow: rgb(62, 19, 102) !important;
	} 

	.form-check-input:checked {
		color: purple;
		background-color: blueviolet;

		
	}
	.form-check-input {
		background-color: rgb(224, 216, 231);
		border-color: rgb(62, 19, 102);
	}

	.form-check-input:active {
		box-shadow: rgb(224, 216, 231);
		
	}
	
	label {
		font-style: oblique;
	}

	


	  /*color: #464545;class="rounded mx-auto d-block" */

</style>