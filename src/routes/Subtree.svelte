<script >
// @ts-nocheck

export let name;

const tree = {Processing: {name: "Processing", type: "default", complete: [{Eschersheim: [{Crowded : "Yes"}, {Distance: "<10min"},{FreeParking : "Yes"}, {Price : "3,30€"} ]},
                  {Brentanobad: [{Crowded : "Yes"}, {Distance : "<10min"},{FreeParking : "No"}, {Price : "3,30€"}]},
                  {Taunabad: [{Crowded : "No"}, {Distance : ">10min<20min"}, {FreeParking : "Yes"}, {Price : "4€"}]},
                   {Kronberg: [{Crowded : "No"}, {Distance : ">10min<20min"}, {FreeParking : "Yes"},  {Price : "3€"}]},
                   {Seedammbad: [{Crowded : "Yes"},{Distance : ">10min<20min"}, {FreeParking : "Yes"}, {Price : "4€"}]},
          ], optimized: [{Kronberg: [{Price : "3€"}]},
 {Eschersheim: [{Price : "3,30€"}, {FreeParking : "Yes"}]},
 {Brentanobad: [{Price : "3,30€"}, {FreeParking : "No"}]},
 {Taunabad: [{Price : "4€"}, {Crowded : "No"}]},
 {Seedammbad: [{Price : "4€"}, {Crowded : "Yes"}]}
 ]}}

 const test = [{Eschersheim: [{Crowded : "1"}, {Distance: "3"},{FreeParking : "5"}, {Price : "7"},  {1: "9"}]},
                  {Brentanobad: [{Crowded : "1"}, {Distance : "3"},{FreeParking : "5"}, {Price : "7"}, {1: "10"}]},
                  {Taunabad: [{Crowded : "1"}, {Distance : "3"}, {FreeParking : "5"}, {Price : "8"}, {1: "10"}]},
                   {Kronberg: [{Crowded : "1"}, {Distance : "3"}, {FreeParking : "6"},  {Price : "8"}, {1: "10"}]},
                   {Seedammbad: [{Crowded : "1"},{Distance : "4"}, {FreeParking : "6"}, {Price : "8"}, {1: "10"}]},
                   {test1: [{Crowded : "2"},{Distance : "4"}, {FreeParking : "6"}, {Price : "8"}, {1: "10"}]}
          ]


	let i = 0;
    let selected = "";
    //let leaves = ["Samza", "Solr", "Flink", "Storm", "Kafka"];
    let leaves = [];
    let newleaf = "";
    // let nodes = [
    //     { name: "Stream/Batch" , description: "How fast should the data be updated"},
    //     { name: "Max data volumes" , description: "What amount of data should the component handle"},
    //     { name: "APIs" , description: "What APIs are available"},
    // ];
    let nodes = [{name: 'decision', description: 'description'}];
    // @ts-ignore
    let labelsequence = [];
    let labels = [];

    let newname = "";
    let newdescription = "";
    let key = "";
    const subtree = {};

    function addleaf() {
        leaves.push(newleaf);
        leaves = leaves;
    }

	function update() {
		leaves[selected] = newleaf;
		leaves = leaves;
	}

	function remove() {
        leaves = leaves.filter(leaf => leaf != leaves[selected]);
        leaves = leaves;
		i = Math.min(i, leaves.length);
	}

    function addNode() {
        nodes.push({name: newname, description: newdescription});
        nodes = nodes;
        //console.log(nodes);
    }

    function updateNode() {
        nodes[i] = {name: newname, description: newdescription};
        nodes = nodes;
        //console.log(nodes);
    }

    function removeNode() {
        nodes = nodes.filter(node => node != nodes[i]);
        nodes = nodes;
		//i = Math.min(i, nodes.length);
        i=0;
        console.log(nodes);
    }
            
    function createLabels() {
            labelsequence.push(leaves[key]);
            labelsequence = labelsequence;
            labels.push([]);
            labels = labels;
            let y = "";
            y = labelsequence.length
            y = y
            nodes.forEach(node => {
                labels[labelsequence.length-1].push("");
            }) 
            labels = labels;
            //console.log(labels);
            labelsequence = labelsequence;
        }
    
    
    function createSubtree() {
            subtree.name = name
            subtree.type = 'new'
            subtree.complete = [];
            labelsequence.forEach(function (el, count) {
                subtree['complete'].push({[el] : []})
                nodes.forEach(function (node, index) {
                    subtree['complete'][count][el].push({[node.name] : labels[count][index]})
                    
                })
                //name: "Processing", type: "default", complete:
            });console.log(subtree)
            let complete = subtree.complete
            subtree.optimized = optimize(complete)
            alert(JSON.stringify(subtree));
            
    };

    function optimize(complete) {
        //initializes optimized tree and calculate decision nodes. Afterwards start recursive process
        let optimized = [];
        for (let leaf of complete){
            let key = Object.keys(leaf)[0]
            let objkey = {[key]: []}
            optimized.push(objkey)}
        let treedepths = [];
        // compute levels
        complete.forEach((leaf) => treedepths.push((Object.values(leaf)[0].length)))
        let levels = [...Array(Math.max(...treedepths)).keys()]
        console.log('levels',levels)
        // first result for first chosen level
        let result = buildLevels(levels, optimized, complete)
        let newlevels = result[0];
        optimized = result[1];
        //console.log('compare',result[1], optimized, result[1]==optimized)
        // second result
        let finalresL1 = [];
        let finalresL2 = [];
        let finalresL3 = [];
        let finalresL4 = [];
        //let L0 = [...optimized];
        console.log('second run', optimized)
        finalresL1 = finalizetree(optimized, newlevels, complete, result)
        console.log('result before next run', finalresL1)
        //console.log(Object.values(finalresL1[0])[0], L0, optimized)
        //console.log(optimized == L0)
        //if (Object.values(finalresL1[0])[0] == L0){
        //return Object.values(finalresL1[0])[0]}
        let treelevels = [];
        let treesets = [];
        for (let subset of finalresL1[1]){
            treelevels.push(subset[0])
            treesets.push(subset[1])
        }
        // third run
        //let checksets = [...treesets]
        //let checklevels = [...treelevels]
        let end = treelevels.length 
        let counter = 0;
        for (let subset of treelevels){
            console.log('third run', optimized, treesets)
        finalresL2.push(finalizetree(treesets[counter], treelevels[counter], complete, result))
        if (finalresL2[counter][1] == 'end'){
            end -= 1;
        }
        counter ++;
    }
        if (end == 0){
            return optimized
        }
        
        counter = 0;
        let treelevelsL2 = [];
        let treesetsL2 = [];
        console.log(finalresL2, finalresL2[0][1] )
        for (let subset of finalresL2[0][1]){
            treelevelsL2.push(subset[0])
            treesetsL2.push(subset[1])
        }
        end = treelevelsL2.length
        for (let subset of treelevelsL2){
            console.log('4 run', optimized, treesetsL2)
        finalresL3.push(finalizetree(treesetsL2[counter], treelevelsL2[counter], complete, result))
        if (finalresL3[counter][1] == 'end'){
            end -= 1;
        }
        counter ++;
        }
        if (end == 0){
            return optimized
        }

        counter = 0;
        let treelevelsL3 = [];
        let treesetsL3 = [];
        console.log(finalresL3, finalresL3[0][1] )
        for (let subset of finalresL3[0][1]){
            treelevelsL3.push(subset[0])
            treesetsL3.push(subset[1])
        }
        //end = treelevelsL3.length
        for (let subset of treelevelsL3){
            console.log('5 run')
        finalresL4.push(finalizetree(treesetsL3[counter], treelevelsL3[counter], complete, result))
        if (finalresL4[counter][1] == 'end'){
            end -= 1;
        }
        counter ++;
        }
        console.log(optimized, finalresL4)
        return optimized

    }

    function finalizetree(optimized, newlevels, complete, result) {
        let level1 = [];
        let notifier = 0;
        
        let occurrences = getOccurences(optimized);
        // split current level into subtrees based on label distribution
            for (let i of Object.keys(occurrences)){
                let section = [];
                console.log(i)
                console.log(occurrences[i])
                if (occurrences[i] > 1){
                    for (let item of optimized) {
                        let access = (Object.values(item)[0]).length -1
                        console.log('log', access, Object.values(item)[0][1], newlevels, item, optimized, Object.values(Object.values(item)[0][access])[0], i)
                        if (Object.values(Object.values(item)[0][access])[0] == i){
                            section.push(item)
                            notifier ++
                            console.log(section)
                        }
                    }
                    level1.push(section)
                }
                
                }if (notifier === 0){
                    return [optimized, 'end']
            } //console.log(section, level1)
                    
        let res = [] ;
        // append new levels for each subtree        
        for (let subtree of level1){
            let newlevelsL1 = [...newlevels];
            //console.log(newlevelsL1, newlevels)
            res.push(buildLevels(newlevelsL1, subtree, complete))}
            console.log("res",res)
            console.log("final", result[1].sort())
            let obj = {optimized : result[1]}
            return [obj, res]
    }

    

    function getOccurences(optimized){
         // get label distribution of current tree to create sublevels or splits
         console.log("occurences")
        let occurrences = [];
        console.log(optimized)
            if (Object.values(optimized[0])[0].length > 0){
                for (let item of optimized){
                    //console.log(Object.values(item)[0].length - 1)
                    let index = Object.values(optimized[0])[0].length -1
                    //console.log(Object.values((Object.values(item)[0]).length-1)[0])
                    console.log('item', item, index, Object.values(item)[0][index])
                    occurrences.push(Object.values(Object.values(Object.values(item)[0])[index])[0]);
                }
                occurrences.sort()
                console.log(occurrences)
               occurrences = occurrences.reduce(function (acc, cur){
                return acc[cur] ? ++acc[cur] : acc[cur] = 1,acc
                }, {});
                console.log(occurrences)
        }    // => {2: 5, 4: 1, 5: 3, 9: 1}
        return occurrences}

    function buildLevels(levels, optimized, complete){
        console.log("build levels")
        if (levels.length === 0) {return optimized}
        let uniqueLabels = [];
        // get remaining tree
        let arr = [];
        let remainingtree = []
        for (let leaf of complete){
            optimized.forEach(leaf => arr.push(Object.keys(leaf)[0]))
            //console.log(arr)
            if (arr.includes(Object.keys(leaf)[0]))
            {remainingtree.push(leaf)}
        } console.log("rem tree", remainingtree)
       
        for (let level of levels){
            uniqueLabels.push(getuniqueLabels(remainingtree, level))
        }
        let maxLabels = Math.max(...uniqueLabels)
        //console.log(maxLabels, uniqueLabels)
        let startlevel = uniqueLabels.indexOf(maxLabels)
        // choose next best splitting level to create next level
        console.log("choose", startlevel)
        for (let leaf of remainingtree){
            console.log(Object.values(leaf)[0][levels[startlevel]])
            let val = Object.values(leaf)[0][levels[startlevel]]
            let pos = remainingtree.indexOf(leaf)
            if (pos != -1){
            Object.values(optimized[pos])[0].push(val)
            console.log(optimized)}
        }
        console.log(levels)
        levels.splice(startlevel, 1)
        console.log(levels, optimized)
        //return buildLevels(levels, optimized)
        return [levels, optimized]
    }


    function getuniqueLabels(remainingtree, level){
        // returns for one level the number of unique labels
        console.log("get unique levels")
        let allLabels = [];
        let uniqueLabels = [];
        remainingtree.forEach((leaf) => allLabels.push(Object.values((Object.values(leaf)[0])[level])[0]));
        console.log("all labels", allLabels);
        uniqueLabels = allLabels.filter((item, i, ar) => ar.indexOf(item) === i);
        return uniqueLabels.length
    }

</script>


<div class="container pt-5">
    <div class="row">
        <div class="col font border-end border-secondary"><p>Which software components do you want to choose for your decision? The max limit is set to 10.</p></div>
        <div class="col">
            <h2 class="pb-3">Decision tree leaf nodes</h2>
            <select class="form-select" bind:value={selected} size={10}>
                {#each leaves as leaf, index}
                    <option value={index}>{leaf}</option>
                {/each}
            </select>
            <label><input class= "form-control" type="text" bind:value={newleaf} placeholder={leaves[selected]}></label>
            <div class='buttons'>
                <!-- <button on:click={addleaf} disabled="{leafs.includes(leafs[selected]) === newleaf || leafs.length == 10}">create</button> -->
                <button class= "btn btn-secondary" on:click={addleaf} disabled="{leaves.includes(newleaf) || leaves.length == 10}">create</button>
                <button class= "btn btn-secondary" on:click={update} >update</button>
                <button class= "btn btn-secondary" on:click={remove} >remove</button>
            </div>
        </div>
    </div>
</div>


<div class="container pt-5">
    <div class="row">
        <div class="col font border-end border-secondary"><p>Which decision criteria do you want to select? The decision needs to be applicable to all components and seperate at least one component from the others</p></div>
        <div class="col">
            <h2 class="pb-3">Decision tree decision nodes</h2>

            <select class="form-select" bind:value={i} size={10}>
                {#each nodes as node, i}
                    <option value={i}>{node.name}, {node.description}</option>
                {/each}
            </select>
                <label><input class= "form-control" type="text"
                    placeholder={nodes[i].name}
                    bind:value={newname}
                ></label>
                <label><input class= "form-control" type="text"
                    placeholder={nodes[i].description}
                    bind:value={newdescription}
                ></label>

                <div class='buttons'>
                    <button class="btn btn-secondary" on:click={addNode} >create</button>
                    <button class="btn btn-secondary" on:click={updateNode} >update</button>
                    <button class="btn btn-secondary" on:click={removeNode} >delete</button>
                </div> 
        </div>
    </div>
</div>

<div class="container pt-5 ">
    <div class="row">
        <div class="col font border-end border-secondary"><p>For your designed decision criteria you need to define the individual decision. To finalize the Processing Component Tree all individual decisions have to be filled. Click on the respective leaf node to fill on the labels.</p></div>
        <div class="col">
                <h2 class="pb-3">Decision Tree Labels</h2>
                <select on:click={createLabels} class="form-select" bind:value={key} size={10}>
                    {#each leaves as leaf, index}
                        <option value={index}>{leaf}</option>
                    {/each}
                </select>
            </div>
    </div>
</div>


<div class="container pt-5">
    <div class="col pb-3">
        {#if key!== "" }  
            {#each labels as part, i}
                    <span class="p-2 ">
                        <h3 class="p-2">{labelsequence[i]}</h3>
                    </span>
                {#each part as sec, j}
                    <label class="p-2 ">
                        <p class="border-bottom border-dark" >{nodes[j].name}</p> 
                        <input class= "form-control" type="text" bind:value={labels[i][j]} placeholder="enter label here">
                    </label>
                {/each} 
            {/each} 
            <div class="container p-5 d-flex justify-content-center">
                <button on:click={createSubtree} type="button" class="btn btn-secondary btn-lg btn-block" disabled="{labels.find(el => el.includes("")) || labelsequence.length != leaves.length}">Submit your processing tree!</button>
            </div>
            
        {/if} 
    </div>
    
</div>  


    
 



<style>
    input {
        display: block;
        margin: 0 0 0.5em 0;
        width: 20em;
    }
    
    select {
        float: left;
        margin: 0 1em 1em 0;
        width: 30em;
    }
    
    .buttons {
        clear: both;
    }

    p {
        text-align: center;
    }

    .col.font p {
    text-align: center;
    font-style: italic;
    font-size: 1.7rem;
    font-family: 'Charis SIL', serif;
    padding: 4rem;
    border-right: 2em;
    }


    /* h1 {
    text-align: center;
    letter-spacing: 5px;
    padding: 2rem;
    }

    .btn-primary {
        background-color: rgb(62, 19, 102);
        border: rgb(62, 19, 102);
    }

    .btn-primary:hover {
        background-color: blueviolet;
    }

    .btn-primary:active {
        background-color: blueviolet;
    } */

   /*
	.done {
		opacity: 0.4;
	}
    */

    
</style>