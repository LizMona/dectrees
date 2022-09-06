<script>
    // shows the home page and sematic pipeline description
    export let nav = 1;
    const vs = ['Velocity', 'Variety', 'Veracity', 'Variability'];
    
    let key = ['selected V'];

    const quality = ['Functional Suitability', 'Reliability', 'Security', 'Maintainability', 'Performance Efficiency', 'Operability', 'Compatibility', 'Transferability']
    let qua = ['selected quality goal'];
    let text1 = '';
    let text2 = '';
    let text3 = ['','','',''];
    let text4 = ['','','','','','','',''];
    let text5 = '';
    let title = '';
    let activities = '';
    let consumer = '';
    let provider = '';
    const description = {
            title: title, consumer: consumer, activities: activities, provider: provider, requirements : text1, volume: text2, fourVs: key, vstext: text3, quality: qua, qualdesc: text4, constraints: text5
        }

    function handleSubmit(){
        description.requirements = text1
        description.volume = text2
        description.fourVs = key
        description.vstext = text3
        description.quality = qua
        description.qualdesc = text4
        description.constraints = text5
        description.title = title;
        description.consumer = consumer;
        description.provider = provider;
        description.activities = activities;
        alert(JSON.stringify(description))
    }

    
</script>

<!-- <h1 class="display-3">Big data decision trees</h1>
<p class="lead">Generate your big data benchmark or verify your results!</p> -->

{#if nav === 1}
<div class="card mb-3 mx-auto " style="max-width: 100rem;">
    <div class="card-header text-center">
        Get started!
    </div>
    <div class="row g-0">
        <div class="col-md-6">
            <img id="pic1" src="src/Referencemodel.png" class="img-fluid rounded-start" alt="BigDataReferenceModel" >
        </div>
        <div class="col-md-6">
            <div class="card-body">
            <h5 class="card-title">The big data reference model</h5>
            <p class="card-text NIST">
                <p class='NIST'>The semantic model for big data archictures defines the technology agnostic framework for big data architecture setups.
                NIST as part of the U.S Department of Commerce, hosts a series of special publications to capture external perspectives to NIST standards, measurements and testing-related efforts. 
                It released the special publication named NIST Big Data Interoperability Framework: Volume 6, Reference Architecture (NBDRA) in 2015 with its latest version 3 published in October 2019. 
                This work aims to provide consensus on fundamental concepts related to big data, to characterize big data from an architecture perspective and to finally present a conceptual model as a big data reference architecture. 
                                        </p>
                                        <p class='NIST'>A technology agnostic approach is essential for being adaptable to technology changes and new tools and concepts. To realize a technology agnostic, adaptable and holistic benchmark concept the is build on top of the NIST big data reference model. It provides the necessary context to understand the role of big data framework providers and their
groups of Processing, Data Plattforms and Infrastructure Frameworks. The basic structure
starts with a data provider introducing new data to the system. In the end this data should be transformed and manipulated to provide valuable information to the data
consumer. The process of manipulation activities is described with a data pipeline which covers sequential activities of collection, preparation, analytics, visualization
and data access. The most crucial part is the selection of the appropriate technology components supported by the big data framework provider to perform the
data manipulation requirements of the application provider, delivering big data technologies, tools and methods of software and hardware components. 
                                        </p>
                                        <p class='NIST'>
Among the big data framework provider three subroles can be identified namely
infrastructure frameworks, data platforms and processing frameworks which can be applied modular or in hybrid composition.
The real world application scenario which represents the system under test, is
embedded in the big data reference architecture modeling its design decisions on the
big data framework provider with visual representations of decision trees. Decisions
are evaluated on the big data framework technology provider without restricting on
respective technologies. Defining the decision trees’ starting point with a semantic
description of the activity within the application provider, it defines the integration
point in the reference architecture to understand how the technical composition of
the framework provider can leverage its IT value to the solution. 
With this approach a modular big data architecture can be composed by several
decision trees. In the benchmark context
one path through all related decision trees through the technology stack of the
framework provider, defines one benchmark in the benchmark suite and manifests the
context of comparison with other SUTs. The big data ecosystem aims to be vendor-neutral and a technology and infrastructure independent ecosystem as a reference model for big data applications. The NBDRA consists of several functional components each representing different roles with executive actors (software, hardware, organizations or individuals) performing activities within the ecosystem. </p>

<p>
            </p>
            <p class="card-text"><small class="text-muted">>> Find out more about the NIST big data concept</small></p>
            <p><a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1500-6r2.pdf">NIST Big Data Interoperability
                Framework:
                Volume 6, Reference Architecture</a></p>
            </div>
        </div>
    </div>
</div>

<div class="card mb-3 mx-auto " style="max-width: 100rem;">
    <div class="card-header text-center">
        Why decision trees?
    </div>
    <div class="row g-0">
    <div class="col-md-6">
        <img id="pic1" src="src/DecisionTrees.png" class="img-fluid rounded-start" alt="BigDataReferenceModel" width="600" height="600">
    </div>
    <div class="col-md-6">
        <div class="card-body">
        <h5 class="card-title">Why decision trees?</h5>
        <p class="card-text">The semantic model for big data archictures defines the technology agnostic framework for big data architecture setups</p>
        <p class="card-text"><small class="text-muted">>> Find out more about the NIST big data concept</small></p>
        </div>
    </div>
    </div>
</div>

<div class="card mb-3 mx-auto " style="max-width: 100rem;">
    <div class="card-header text-center">
        Describe your application pipeline
    </div>
    <div class="row g-0">
    <div class="col-md-6">
        <img id="pic1" src="src/Application_pipeline.png" class="img-fluid rounded-start" alt="BigDataReferenceModel" width="600" height="600">
    </div>
    <div class="col-md-6">
        <div class="card-body">
        <h5 class="card-title">Semantic description of the big data benchmark</h5>
        <p class="card-text">The semantic model for big data archictures defines the technology agnostic framework for big data architecture setups</p>
        <p class="card-text"><small class="text-muted">>> Find out more about the NIST big data concept</small></p>
        <button type="button" class="btn btn-secondary" on:click|preventDefault={() => (nav = 2)}>Create semantic model</button>
        <!-- <a class="nav-link" href="/Processing" on:click|preventDefault={() => (menu = 2)}>Processing Frameworks</a> -->
        </div>
    </div>
    </div>
</div>

<div class="card mb-3 mx-auto " style="max-width: 100rem;">
    <div class="card-header text-center">
        Watch the benchmark for the BLAST example!
    </div>
    <div class="row g-0">
    <div class="col-md-6">
        <img id="pic1" src="src/pocblast.png" class="img-fluid rounded-start" alt="blast" width="600" height="600">
    </div>
    <div class="col-md-6">
        <div class="card-body">
        <h5 class="card-title">Watch the benchmark for the BLAST example!</h5>
        <a href='https://bmcbioinformatics.biomedcentral.com/track/pdf/10.1186/s12859-017-1902-7.pdf'>Proof of Concept | Real world application</a>
        <p></p>
        <button type="button" class="btn btn-secondary" on:click|preventDefault={() => (nav = 2)}>Architecture Decisions for BLAST</button>
        </div>
    </div>
    </div>
</div>
{:else}
<div class="container pt-5">
    <span>
<button type="button" class="btn btn-secondary" on:click|preventDefault={() => (nav = 1)}>Back</button>

<img id="pic1" src="src/semantic.png" class="img-fluid rounded-start" alt="semantic" width="700" height="700">

<h1 class='pt-2'>NIST reference architecture with ARC 42 Template addons</h1>
</span>
<div>
    <h4>About arc42</h4>
<p class='arc'>arc42, the Template for documentation of software and system architecture. Created and maintained by Dr. Peter Hruschka, Dr. Gernot Starke and contributors. Template Revision: 8.0 EN (based on asciidoc), February 2022
    © We acknowledge that this document uses material from the arc 42 architecture template. **Changes to the template: 
    Stakeholder are out of scope as the community are the stakeholder for benchmarking.
    Listed documentation steps are preliminary steps to create the decision trees. <a href='https://arc42.org'>source: https://arc42.org</a></p>
<!-- <p class='arc'>   Created and maintained by Dr. Peter Hruschka, Dr. Gernot Starke and contributors. </p> 
<p class='arc'>   Template Revision: 8.0 EN (based on asciidoc), February 2022
    © We acknowledge that this document uses material from the arc 42 architecture template </p> -->

<!-- <p class='arc'>**Changes to the template: 
    Stakeholder are out of scope as the community are the stakeholder for benchmarking.
    Listed documentation steps are preliminary steps to create the decision trees.</p> -->


</div>

<div class="col-md-6">
   
</div>
<div>
    <hr>
    <ul>
        <li>
            <section>
            <h4>Application Title</h4>
            <input class='p-1' bind:value={title}>
            </section>
        </li>
        <li>
            <h4 class='p-1'>1. Orchestrator Requirements Overview</h4>
        </li>
        
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Short description of the functional requirements, driving forces, extract (or abstract) of requirements. 
                From the point of view of the end users a system is created or modified to improve support of a business activity and/or improve the quality</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" bind:value={text1}></textarea>
           
                <h4 class='p-1'>1.1 Data provider</h4>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" bind:value={provider}></textarea>
           
            <h4 class='p-1'>1.2 Activities of big data application provider</h4>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" bind:value={activities}></textarea>
            <h4 class='p-1'>1.3 Big Data 5V's</h4>
            <select multiple class="form-select" bind:value={key} size={5}>
                {#each vs as v, index}
                    <option value={v} >{v}</option>
                {/each}
            </select>
            <span >
                <label class="p-1 bold">Volume</label>
            </span>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" bind:value={text2}></textarea>
            {#each key as selv, x}
                    <span >
                        <label class="p-2 bold">{selv}</label>
                    </span>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" bind:value={text3[x]}></textarea>
            {/each}
        </div>
      
            <h4 class='p-1'>1.4 Data consumer</h4>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" bind:value={consumer}></textarea>
      
        <li>
            <h4 class='p-1'>2. Quality Goals</h4>
        </li>
        <div class="form-group">
            <label for="exampleFormControlSelect2">The top three (max five) quality goals for the architecture whose fulfillment is of highest importance </label>
            <select multiple class="form-control" id="exampleFormControlSelect2" bind:value={qua} size={8}>
              {#each quality as q, index}
                <option value={q}>{q}</option>
              {/each}
            </select>
            {#each qua as elem, y}
            <span >
                <label class="p-1 bold">{elem}</label>
            </span>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" bind:value={text4[y]}></textarea>
            {/each}
        </div>
       
        <li>
            <h4 class='p-1'>3. Architecture Constraints</h4>
        </li>
        <div class="form-group">
            <label class='bold' for="exampleFormControlTextarea1">Underlying decision constraints</label>
            <div>Any requirement that constraints software architects in their freedom of design and implementation decisions or decision about the development process.
                 These constraints sometimes go beyond individual systems and are valid for whole organizations and companies. Architects should know exactly where they are free in their design decisions and where they must adhere to constraints. 
                 Constraints must always be dealt with; they may be negotiable, though</div>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" bind:value={text5}></textarea>
        </div>
        <li>
            <h4 class='p-1'>4. Decision making</h4>
        </li>
        <button type="button" class="btn btn-secondary" on:click={handleSubmit} on:click|preventDefault={() => (nav = 1)}>Submit | Create your first decision tree</button>
        <p class='pb-5'></p>
       
    </ul>
    <hr>
    <hr>
    <h2>Alternative:</h2>
    <form>
        <div class="form-group"> <span>Visit</span> <a href='https://arc42.org/download'>arc42 downloads</a> <span>to download your detailed documentation template.</span>
          <label for="exampleFormControlFile1">Upload your filled ARC 42 software architecture documentation</label>
          <input type="file" class="form-control-file" id="exampleFormControlFile1">
        </div>
      </form>
</div>
</div>

{/if}

<style>
p {
    text-align: center;
}
/* h1 {
    text-align: center;
    letter-spacing: 5px;
    padding: 2rem;
} */

#pic1 {
		padding: 1rem;
	}
.NIST {
    text-align: justify;
    font-size: 0.7rem;
}
.arc {
    text-align: justify;
}
.bold {
    font-weight: bold;
}




</style>