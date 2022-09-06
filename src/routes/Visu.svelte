
<script>
//----------------DOCS-------------------------------------//
// This component takes the tree object and renders the decision tree based on the given props. Based on the prop the respective tree section is selected. 
// The mode (complete or optimized) defines the relevant part for the subtree variable. 
// Every mode change indicates a complete re-render.
// Based on the prop the subtree is created. For every level (bootstrap container level) the subtree creates new variables, that are referenced in the html section. 
// Every change to the interactive tree indicates a new definition of the variables and creates a dynamic change in state.
// Based on the remaining leaf nodes, the icons are rendered. If it is a single choice it is highlighted with special color.
// -------Activity Diagramm check out the Wiki---------------
// The decisionState is the array which is manipulated by the user and represents the state of the rendered tree.
// Based on the decisionState the treepath is derived which translates the userinput to the current selection on the treestructure, 
// which indicates selected labels by true or false.
// Based on the treepath the respective treelevels (part of subtree that is still selected by the user) are rendered for each level. 
// Based on the treelevel all relevant labels/edges are shown with the sankey UI element.
// The unique labels are needed to show the arrow icons to lead to the next level.
// Future work is to apply generic variables for every level and not to define every level on its own. 
// To make the code more comprehensible for now each level is explicitly defined.
//---------------HTML Part--------------------------
// Each level (bootstrap container new row) starts with the current treelevel selection of remaining tree components. 
// Based on all labels the sankey UI is rendered with a button group.
// Based on the unique labels the arrows are shown and made interactively with the decisionstate.
// The last level just shows the remaining leaf nodes with a suitable icon

//--------------TEST--------for test objects----------------//
let treePathexample = [{HDFS : [{"No": true}, {"Yes": true}]},
                {GoogleFS :[{"No": true}, {"Yes": false}]},
                {MongoDB :[{"Yes" : true},
                        {"Yes": true},
                        {"Yes": false}]},
                {Cassandra :[{"Yes" : true},
                        {"Yes": true},
                        {"No": true},
                        {"Yes": true}]},
                {Redis :[{"Yes" : true},
                        {"Yes": true},
                        {"No": true},
                        {"Yes": false}]},
                {PostgreSQL :[{"Yes" : true},
                        {"No": false}]},
                ]  
let treePathexample2 = [{HDFS : [{"No": false}, {"Yes": false}]},
                {GoogleFS :[{"No": false}, {"Yes": false}]},
                {MongoDB :[{"Yes" : false},
                        {"Yes": false},
                        {"Yes": false}]},
                {Cassandra :[{"Yes" : false},
                        {"Yes": false},
                        {"No": false},
                        {"Yes": false}]},
                {Redis :[{"Yes" : false},
                        {"Yes": false},
                        {"No": false},
                        {"Yes": false}]},
                {PostgreSQL :[{"Yes" : false},
                        {"No": false}]},
                ]  


                
 let decisionexample = [
                         [{Indexed : {"Yes": true, "No": true}}], 
                         [{OpenSource: {"Yes": false, "No": false}}, {Distributed: {"Yes": false, "No": false}}],
                         [{Schema: {"Yes":false, "No": false}}],
                         [{10: {"Yes": false, "No": false}}]
                     ];


//   const subtree = [{HDFS: [{Indexed : "No"}, {OpenSource : "Yes"}]},
//                   {GoogleFS: [{Indexed : "No"}, {OpenSource : "No"}]},
//                   {MongoDB: [{Indexed : "Yes"},
//                           {Distributed: "Yes"},
//                           {Schema: "Yes"}]},
//                  {Cassandra: [{Indexed : "Yes"},
//                           {Distributed: "Yes"},
//                           {Schema: "No"},
//                           {10: "Yes"}]},
//                   {Redis: [{Indexed : "Yes"},
//                           {Distributed: "Yes"},
//                           {Schema: "No"},
//                           {10: "No"}]},
//                   {PostgreSQL: [{Indexed : "Yes"},
//                           {Distributed: "No"}]}
//           ];

//   const subtree = [{Eschersheim: [{Crowded : "Yes"}, {Distance: "<10min"},{FreeParking : "Yes"}, {Price : "3,30€"} ]},
//                   {Brentanobad: [{Crowded : "Yes"}, {Distance : "<10min"},{FreeParking : "No"}, {Price : "3,30€"}]},
//                   {Taunabad: [{Crowded : "No"}, {Distance : ">10min<20min"}, {FreeParking : "Yes"}, {Price : "4€"}]},
//                   {Kronberg: [{Crowded : "No"}, {Distance : ">10min<20min"}, {FreeParking : "Yes"},  {Price : "3€"}]},
//                   {Seedammbad: [{Crowded : "Yes"},{Distance : ">10min<20min"}, {FreeParking : "Yes"}, {Price : "4€"}]},
//          ];

// const subtree = [{Kronberg: [{Price : "3€"}]},
// {Eschersheim: [{Price : "3,30€"}, {FreeParking : "Yes"}]},
// {Brentanobad: [{Price : "3,30€"}, {FreeParking : "No"}]},
// {Taunabad: [{Price : "4€"}, {Crowded : "No"}]},
// {Seedammbad: [{Price : "4€"}, {Crowded : "Yes"}]}
// ];




//--------------PRODUCTION---------default big data decision trees---------//
export let name = 'Processing';
export let type = 'default';
//export let mode;
export let mode;
export let displaymode = 'complete'


const tree = {Swimming: {name: "Processing", type: "default", complete: [{Eschersheim: [{Crowded : "Yes"}, {Distance: "<10min"},{FreeParking : "Yes"}, {Price : "3,30€"} ]},
                  {Brentanobad: [{Crowded : "Yes"}, {Distance : "<10min"},{FreeParking : "No"}, {Price : "3,30€"}]},
                  {Taunabad: [{Crowded : "No"}, {Distance : ">10min<20min"}, {FreeParking : "Yes"}, {Price : "4€"}]},
                   {Kronberg: [{Crowded : "No"}, {Distance : ">10min<20min"}, {FreeParking : "Yes"},  {Price : "3€"}]},
                   {Seedammbad: [{Crowded : "Yes"},{Distance : ">10min<20min"}, {FreeParking : "Yes"}, {Price : "4€"}]},
          ], optimized: [{Kronberg: [{Price : "3€"}]},
 {Eschersheim: [{Price : "3,30€"}, {FreeParking : "Yes"}]},
 {Brentanobad: [{Price : "3,30€"}, {FreeParking : "No"}]},
 {Taunabad: [{Price : "4€"}, {Crowded : "No"}]},
 {Seedammbad: [{Price : "4€"}, {Crowded : "Yes"}]}
 ]}, Processing: {name: "Processing", type: "default", complete: [{MapReduce: [{ProcessingType : "Batch"}, {ProcessingGuarantees: "Exactly-once-processing"},{ComputationMode : "Disk I/O"} ]},
                  {Spark: [{ProcessingType : "Batch"}, {ProcessingGuarantees: "Exactly-once-processing"},{ComputationMode : "In memory"}]},
                  {Storm: [{ProcessingType : "Stream"}, {ProcessingGuarantees: "At-least-once-processing"}, {ComputationMode : "In memory"}]},
                   {Flink: [{ProcessingType : "Hybrid"}, {ProcessingGuarantees: "Exactly-once-processing"}, {ComputationMode : "In memory"}]}
                   
          ], 
          optimized: [{MapReduce: [{ProcessingType : "Batch"}, {ComputationMode : "Disk I/O"} ]},
                  {Spark: [{ProcessingType : "Batch"}, {ComputationMode : "In memory"}]},
                  {Storm: [{ProcessingType : "Stream"}, {ComputationMode : "In memory"}]},
                   {Flink: [{ProcessingType : "Hybrid"}, {ComputationMode : "In memory"}]}
                   
          ]},
 
 
 DataPlatform: {name: "Data Plattform", type: "default", 
 complete: [{HDFS: [{CAP : "CP"}, {QuerySupport : "Read, Write"},  {InMemory : "No"}, {Index : "No"} ]},
            {Redis: [{CAP : "P"}, {QuerySupport : "Read by key, atomic operations"},  {InMemory : "Yes"}, {Index : "Primary & secondary Index"} ]},
            {MongoDB: [{CAP : "CP"}, {QuerySupport : "Ad-hoc queries"},  {InMemory : "No"}, {Index : "Primary & secondary Index"} ]},
            {Cassandra: [{CAP : "AP"}, {QuerySupport : "Read by key, atomic operations"},  {InMemory : "Yes"}, {Index : "Primary & secondary Index"} ]}
                 
          ]
          , optimized: [{HDFS: [{CAP : "CP"}, {QuerySupport : "Read, Write"}]},
            {Redis: [{CAP : "P"}, {QuerySupport : "Read by key, atomic operations"} ]},
            {MongoDB: [{CAP : "CP"}, {QuerySupport : "Ad-hoc queries"}]},
            {Cassandra: [{CAP : "AP"}, {QuerySupport : "Read by key, atomic operations"} ]}
          ]}, 
Infrastructure: {name: "Infrastructure", type: "default", 
 complete: [{IaaS_customized: [{Network : "Low sensitivity"}, {Storage : "Low-High sensitivity"}, {Computing: "Low-High sensitivity"}]},
                  {HPC_Cluster: [{Network : "High sensitivity"}, {Storage : "High sensitivity"}, {Computing: "High sensitivity"}]},
                  {Fog_Edge_Computing: [{Network : "High sensitivity"},
                          {Storage: "Low sensitivity"},
                          {Computing: "Low sensitivity"}]}
                
          ]
          , optimized: [{IaaS_customized: [{Network : "Low sensitivity"}, {Storage : "Low-High sensitivity"}]},
                  {HPC_Cluster: [{Network : "High sensitivity"}, {Storage : "High sensitivity"}]},
                  {Fog_Edge_Computing: [{Network : "High sensitivity"},
                          {Storage: "Low sensitivity"}]
                          }
          ]}}



let subtree = tree[name][displaymode]

// Initialize: the treePath shows which path is selected along the subtree

let treePath = [];
let i = 0;

for (let elem of subtree) {
        treePath.push({[Object.keys(elem)[0]] : []});
        //console.log(treePath)
        for (let part of subtree[i][Object.keys(elem)[0]]) {
            
             Object.values(treePath[i])[0].push({[Object.values(part)[0]] : false});
             //console.log(Object.values(part)[0], treePath[i])
            
        }
    i += 1;
} console.log("DOM, Treepath initialization:", treePath)
//$: console.log("DOM, Treepath initialization:", treePath);





// colors for leafes and button group
const labelColors = ["rgb(209, 188, 209)", "rgb(173, 154, 173)", "rgb(120, 105, 120)", "rgb(64, 54, 64)" ];
const leafesColors = ["rgb(213, 197, 230)", "rgb(162, 145, 181)", "rgb(94, 80, 110)", "rgb(99, 69, 133)", "rgb(99, 50, 156)", "rgb(102, 8, 212)" ];
const leafesColorsL0 = ["rgb(240, 204, 206)", "rgb(240, 168, 172)","rgb(242, 136, 142)","rgb(245, 105, 113)","rgb(242, 68, 78)"];
const leafesColorsL1 = ["rgb(237, 213, 218)", "rgb(237, 187, 198)","rgb(242, 167, 184)","rgb(242, 138, 162)","rgb(245, 108, 139)"];
const leafesColorsL2 = ["rgb(235, 199, 228)", "rgb(235, 160, 220)","rgb(237, 126, 215)","rgb(240, 93, 211)","rgb(242, 61, 206)"];
const leafesColorsL3 = ["rgb(231, 196, 242)", "rgb(223, 162, 242)","rgb(214, 129, 240)","rgb(208, 94, 242)","rgb(203, 61, 245)"];
const leafesColorsL4 = ["rgb(188, 170, 227)", "rgb(185, 157, 245)","rgb(158, 119, 242)","rgb(127, 76, 237)","rgb(104, 43, 237)"];


// construct tree Levels to name the container classes


let treedepths = [];
subtree.forEach((leaf) => treedepths.push((Object.values(leaf)[0].length)))
const levels = [...Array(Math.max(...treedepths)).keys()]
console.log("Levels: ", levels)


// react on change of treePath
$: console.log("DOM: curr TreePath", treePath);

//intialized decisionState which is manipulated by the levels via toggle
let decisionState = [];
let levellist = [];
let keylist = [];
let counter = 0;

for (let level of levels){
    for (let leaf of subtree){
        console.log("Leaf", leaf)
       //console.log(Object.values(leaf)[0].length)
        console.log(level)
        if (Object.values(leaf)[0].length > level){
            console.log("I am in", keylist);
            if (!keylist.includes(Object.keys(Object.values(leaf)[0][level])[0])) {
                let obj = {[Object.keys(Object.values(leaf)[0][level])[0]]: {[Object.values(Object.values(leaf)[0][level])[0]]: false}}
                levellist.push(obj)
                keylist.push(Object.keys(Object.values(leaf)[0][level])[0])
                console.log("pushed", obj,"to level", level, levellist)
            }
        
            else { 
                for (let elem of keylist){
                    console.log((Object.keys(Object.values(leaf)[0][level])[0]),elem,!Object.keys(Object.values(elem)[0])[0].includes(Object.values(Object.keys(Object.values(leaf)[0][level])[0])[0]))
                    if ((Object.keys(Object.values(leaf)[0][level])[0]) === elem && !Object.keys(Object.values(elem)[0])[0].includes(Object.values(Object.keys(Object.values(leaf)[0][level])[0])[0])){
                        counter = keylist.indexOf(elem)
                        console.log("test", Object.values(Object.values(leaf)[0][level])[0]);
                        let item = Object.values(Object.values(leaf)[0][level])[0];
                        console.log(levellist, counter, elem, item)
                        levellist[counter][elem][item] = false;
                       
                    }
                }
            }
        } 
    }
    decisionState.push(levellist) 
       console.log("dec State for level",level, decisionState)
       levellist = [];
       keylist = [];
}
console.log("decState:", decisionState);




$: if (decisionState) {
    console.log("Change TP:", treePath)
let treeindex = 0;

looptree:
for (let item of subtree){
     // {Eschersheim: [{Crowded : "Yes"}, {Distance: "<10min"},{FreeParking : "Yes"}, {Price : "3,30€"} ]}
     console.log(Object.keys(item)[0])
     //let nodeindex = 0;
    for (let node of Object.values(item)[0]){
        // {Crowded : "Yes"} {Crowded : "No"}
        let level = Object.values(item)[0].indexOf(node)
        console.log(decisionState[level]);
        for (let decision of decisionState[level]){

                console.log(Object.keys(decision)[0], Object.keys(node)[0], Object.values(decision)[0][Object.values(node)[0]], Object.values(treePath[subtree.indexOf(item)])[0][Object.values(item)[0].indexOf(node)][Object.values(node)[0]])
                if (Object.keys(decision)[0] == Object.keys(node)[0] && Object.values(decision)[0][Object.values(node)[0]] != Object.values(treePath[subtree.indexOf(item)])[0][Object.values(item)[0].indexOf(node)][Object.values(node)[0]]){
                                    //console.log("The same?", Object.keys(node)[0], Object.keys(criterium)[0],item,node, decision, level)
                                    //console.log("I toggle", Object.values(treePath[treeindex])[0][nodeindex][newkey], decision[1])
                                    console.log("I toggle", Object.values(treePath[subtree.indexOf(item)])[0][Object.values(item)[0].indexOf(node)][Object.values(node)[0]])
                                    let newkey = Object.values(node)[0] 
                                    Object.values(treePath[subtree.indexOf(item)])[0][Object.values(item)[0].indexOf(node)][newkey] = !Object.values(treePath[subtree.indexOf(item)])[0][Object.values(item)[0].indexOf(node)][newkey]
                                    treePath = treePath;
                                    console.log(treePath);
                                    
                }
                if (Object.keys(decision)[0] != Object.keys(node)[0]){continue}
                if (Object.values(treePath[subtree.indexOf(item)])[0][Object.values(item)[0].indexOf(node)][Object.values(node)[0]] === false){
                                    console.log("break", Object.values(treePath[subtree.indexOf(item)])[0][Object.values(item)[0].indexOf(node)])
                                    continue looptree;
                
                }
        
           
        }  
        }  
    }
}
$: if (treePath) {console.log("Hello DOM", treePath)}
        
 

// initialize remaining Labels2
let remainingLabels = [];
     for (let elem of treePath) {
         remainingLabels.push(Object.keys(elem)[0]);
     }
// function returns remaining Labels by current selection
function getremainingLabels () {
    remainingLabels = [];
    // first all labels are pushed and sequentially removed
    for (let elem of treePath) {
        remainingLabels.push(Object.keys(elem)[0]);
        remainingLabels = remainingLabels;
    }
    for (let level of levels) {
    let iterator1 = 0;
    console.log("level:", level)
    
        for (let elem of treePath) {
            if (remainingLabels.includes(Object.keys(elem)[0]) && Object.values(elem)[0].length > level){
                //console.log("in", elem, level, Object.values(Object.values(elem)[0][level])[0])
                if (Object.values(Object.values(elem)[0][level])[0]){
                    console.log("Element with selected decisions", Object.keys(elem)[0]);
                    console.log(iterator1);
                    let decision = Object.keys(Object.values(subtree[iterator1])[0][level])[0];
                    console.log("Decision: ", decision)
                    let iterator2 = 0;
                    for (let part of treePath) {
                        if (remainingLabels.includes(Object.keys(part)[0]) && Object.values(part)[0].length > level) {
                            console.log(Object.keys(Object.values(subtree[iterator2])[0][level])[0], Object.values(Object.values(part)[0][level])[0])
                            if (Object.keys(Object.values(subtree[iterator2])[0][level])[0] == decision && Object.values(Object.values(part)[0][level])[0] == false){
                                let thisindex = remainingLabels.indexOf(Object.keys(part)[0]);
                                console.log(Object.keys(part)[0]);
                                if (thisindex > -1){
                                    remainingLabels.splice(thisindex, 1);
                                    console.log(remainingLabels);
                                    remainingLabels = remainingLabels
                                }
                            }
                        }
                        iterator2 += 1; 
                    }
                }
                
            } iterator1 += 1;
        } 
    }
 return remainingLabels }

$: if (remainingLabels) {console.log("DOM:my current remaining labels:", remainingLabels)}

function rightorder(sequence) {
    let orderedseq = [];
    let unique = sequence.filter((item, i, ar) => ar.indexOf(item) === i);
    for (let u of unique){
        for (let s of sequence){
            if (u === s){
                orderedseq.push(s)
            }
        }
    } return orderedseq
}



//------------LEVEL 0--------------//

// destruct Labels from Tree

let allLabels = [];
let uniqueLabels = [];
subtree.forEach((leaf) => allLabels.push(Object.values((Object.values(leaf)[0])[0])[0]));
console.log("level0 all labels", allLabels);

// destruct unique Labels and add tokens for setting active state
uniqueLabels = allLabels.filter((item, i, ar) => ar.indexOf(item) === i);
console.log("Level0 unique Labels", uniqueLabels);



//-----------------Level 1 -------------------//

// adjust treeLevel1
let treeLevel1 = [];
let allLabelsL1 = []
let uniqueLabelsL1 = [];

// create subtree subselection treelevel 1
function prepareLevel1() {
    // create TreeLevel1
    treeLevel1 = []
        for (let leaf of treePath) {
            console.log(leaf)
            console.log(Object.values(Object.values(leaf)[0][0])[0])
            if (Object.values(Object.values(leaf)[0][0])[0] === true) {
                treeLevel1.push(subtree[treePath.indexOf(leaf)])
                treeLevel1 = treeLevel1;
                console.log("treelevel1:", treeLevel1);
            }
        } treeLevel1 = treeLevel1;
}

 
//create all labels
 $: if (treeLevel1 && treeLevel1.length > 0) {console.log("treeL1", treeLevel1);
                    allLabelsL1 = [];
                for (let dec of treeLevel1.filter(x => Object.values(x)[0].length > 1).map(x => Object.keys(Object.values(x)[0][1])[0]).filter((item, i, ar) => ar.indexOf(item) === i)){
                    let obj = {}
                    obj[dec] = []
                    for (let leaf of treeLevel1.filter(x => Object.values(x)[0].length > 1).filter((x) => Object.keys(Object.values(x)[0][1])[0] == dec).map(x => Object.values(Object.values(x)[0][1])[0])){
                        obj[dec].push(leaf)
                    } allLabelsL1.push(obj)
                    allLabelsL1 = allLabelsL1;
                }
                console.log("This are the all LabelsL1", allLabelsL1)
                }


                

// create unique labels
$: if (allLabelsL1) {   // create unique labels
    uniqueLabelsL1 = [];
    for (let dec of allLabelsL1) {
        
        console.log(uniqueLabelsL1, dec)
        if (Object.values(dec)[0].length > 1) {
            //console.log(uniqueLabelsL1.indexOf(dec), Object.values(dec)[0], Object.values(dec).filter((item, i, ar) => ar.indexOf(item) === i))
            let temp  = Object.values(dec)[0].filter((item, i, ar) => ar.indexOf(item) === i)
            uniqueLabelsL1.push(temp);
            uniqueLabelsL1 = uniqueLabelsL1;}
        else {uniqueLabelsL1.push(Object.values(dec)[0]);}
        //console.log("This are the unique Labels L1", uniqueLabelsL1);
        uniqueLabelsL1 = uniqueLabelsL1;}
    
console.log("TreePath", treePath, "TL1:", treeLevel1, "AllL1:", allLabelsL1, "UniqueL1:", uniqueLabelsL1, "decState", decisionState);

} 

$: if (uniqueLabelsL1) {console.log("DOM: success ULabelsL1", uniqueLabelsL1);}





//----------------------Level 2------------------------//

// adjust treeLevel2
let treeLevel2 = [];
let allLabelsL2 = []
let uniqueLabelsL2 = [];

function prepareLevel2() {
    // create TreeLevel1
    treeLevel2 = []
    console.log("I prepare Level2 now!", decisionState)
        for (let leaf of treePath) {
            console.log(leaf)
            //console.log(Object.values(Object.values(leaf)[0][1])[0])
            if (Object.values(leaf)[0][1] && Object.values(Object.values(leaf)[0][1])[0] === true) {
                treeLevel2.push(subtree[treePath.indexOf(leaf)])
                treeLevel2 = treeLevel2;
                console.log("treelevel2:", treeLevel2);
            }
        } treeLevel2 = treeLevel2;
}
// create all labels
$: if (treeLevel2 && treeLevel2.length > 0) {console.log("treeL2", treeLevel2);
                    allLabelsL2 = [];
                    
                        for (let dec of treeLevel2.filter(x => Object.values(x)[0].length > 2).map(x => Object.keys(Object.values(x)[0][2])[0]).filter((item, i, ar) => ar.indexOf(item) === i)){
                            let obj = {}
                            obj[dec] = []
                            for (let leaf of treeLevel2.filter(x => Object.values(x)[0].length > 2).filter((x) => Object.keys(Object.values(x)[0][2])[0] == dec).map(x => Object.values(Object.values(x)[0][2])[0])){
                                obj[dec].push(leaf)
                            } allLabelsL2.push(obj)
                            allLabelsL2 = allLabelsL2;
                        }
                    
                console.log("This are the all LabelsL2", allLabelsL2)
                }

// create unique labels
$: if (allLabelsL2) {   // create unique labels
    uniqueLabelsL2 = [];
    for (let dec of allLabelsL2) {
        
        console.log(uniqueLabelsL2, dec)
        if (Object.values(dec)[0].length > 1) {
            //console.log(uniqueLabelsL1.indexOf(dec), Object.values(dec)[0], Object.values(dec).filter((item, i, ar) => ar.indexOf(item) === i))
            let temp  = Object.values(dec)[0].filter((item, i, ar) => ar.indexOf(item) === i)
            uniqueLabelsL2.push(temp);
            uniqueLabelsL2 = uniqueLabelsL2;}
        else {uniqueLabelsL2.push(Object.values(dec)[0]);}
        //console.log("This are the unique Labels L1", uniqueLabelsL1);
        uniqueLabelsL2 = uniqueLabelsL2;}
    
console.log("TreePath", treePath, "TL2:", treeLevel2, "AllL2:", allLabelsL2, "UniqueL2:", uniqueLabelsL2, "decState", decisionState);

} 

$: if (uniqueLabelsL2) {console.log("DOM: success", "TreePath", treePath, "TL2:", treeLevel2, "AllL2:", allLabelsL2, "UniqueL2:", uniqueLabelsL2, "decState", decisionState)}



// ----------------------------Level 3 -----------------------------//

// adjust treeLevel2
let treeLevel3 = [];
let allLabelsL3 = []
let uniqueLabelsL3 = [];

function prepareLevel3() {
    // create TreeLevel1
    treeLevel3 = []
    console.log("I prepare Level3 now!")
        for (let leaf of treePath) {
            console.log(leaf)
            if (Object.values(leaf)[0].length > 2){
                console.log(Object.values(Object.values(leaf)[0][2])[0])
                //(Object.values(Object.values(leaf)[0][2])[0] === true)
                if (Object.values(leaf)[0][2] && Object.values(Object.values(leaf)[0][2])[0] === true) {
                    treeLevel3.push(subtree[treePath.indexOf(leaf)])
                    treeLevel3 = treeLevel3;
                    console.log("treelevel3:", treeLevel3);
                }
            }
        } treeLevel3 = treeLevel3;
}

// create all labels
$: if (treeLevel3 && treeLevel3.length > 0) {console.log("treeL3", treeLevel3);
                    allLabelsL3 = [];
                    // if (Object.values(treeLevel2[0])[0][2]){
                        for (let dec of treeLevel3.filter(x => Object.values(x)[0].length > 3).map(x => Object.keys(Object.values(x)[0][3])[0]).filter((item, i, ar) => ar.indexOf(item) === i)){
                            let obj = {}
                            obj[dec] = []
                            for (let leaf of treeLevel3.filter(x => Object.values(x)[0].length > 3).filter((x) => Object.keys(Object.values(x)[0][3])[0] == dec).map(x => Object.values(Object.values(x)[0][3])[0])){
                                obj[dec].push(leaf)
                            } allLabelsL3.push(obj)
                            allLabelsL3 = allLabelsL3;
                        }
                    // }
                console.log("This are the all LabelsL3", allLabelsL3)
                }

// create unique labels
$: if (allLabelsL3) {   // create unique labels
    uniqueLabelsL3 = [];
    for (let dec of allLabelsL3) {
        //uniqueLabelsL1.push([])
        console.log(uniqueLabelsL3, dec)
        if (Object.values(dec)[0].length > 1) {
            //console.log(uniqueLabelsL1.indexOf(dec), Object.values(dec)[0], Object.values(dec).filter((item, i, ar) => ar.indexOf(item) === i))
            let temp  = Object.values(dec)[0].filter((item, i, ar) => ar.indexOf(item) === i)
            uniqueLabelsL3.push(temp);
            uniqueLabelsL3 = uniqueLabelsL3;}
        else {uniqueLabelsL3.push(Object.values(dec)[0]);}
        //console.log("This are the unique Labels L1", uniqueLabelsL1);
        uniqueLabelsL3 = uniqueLabelsL3;}

console.log("TreePath", treePath, "TL3:", treeLevel3, "AllL3:", allLabelsL3, "UniqueL3:", uniqueLabelsL2, "decState", decisionState);

} 

$: if (uniqueLabelsL3) {console.log("DOM: success", "TreePath", treePath, "TL3:", treeLevel3, "AllL3:", allLabelsL3, "UniqueL3:", uniqueLabelsL3, "decState", decisionState)}



</script>


<div class="container Level{levels[0]} pt-1">
    
    <div class="row justify-content-sm-center">
        <div class ="col text-center">
            <button class="btn btn-light btn-circle btn-xl">{Object.keys(decisionState[0][0])[0]}</button>
            <div class="btn-group-lg d-flex justify-content-center p-3" role="group" aria-label="Basic example">
                {#each rightorder(allLabels) as label, i}
                    <button type="button" class="btn centered" style="background-color:{leafesColorsL0[uniqueLabels.indexOf(label)]};"></button>
                {/each}
                
            </div>
            
    </div>
    <div class="row justify-content-sm-center"> <hr style="width:50%;text-align:left;margin-left:0"></div>
       
    <div class="row"> 
        <span class = "d-flex justify-content-center">
            {#each uniqueLabels as arrow, i}
                <p class="btn">{arrow} 
                    {#if uniqueLabels.length % 2 === 1 && i === (uniqueLabels.length-1)/2}
                    <svg class:active={decisionState[0][0][Object.keys(decisionState[0][0])[0]][arrow]} on:click="{() => decisionState[0][0][Object.keys(decisionState[0][0])[0]][arrow] = !decisionState[0][0][Object.keys(decisionState[0][0])[0]][arrow]}" id={[arrow, levels[0]]} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16" on:click={getremainingLabels} on:click={prepareLevel1}  >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                    </svg>
                    {:else if i <= (uniqueLabels.length-1)/2}
                    
                    <svg class:active={decisionState[0][0][Object.keys(decisionState[0][0])[0]][arrow]} on:click="{() => decisionState[0][0][Object.keys(decisionState[0][0])[0]][arrow] = !decisionState[0][0][Object.keys(decisionState[0][0])[0]][arrow]}" id={[arrow, levels[0]]} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16" on:click={getremainingLabels} on:click={prepareLevel1} >
                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"/>
                    </svg>
                    {:else}
                    <svg class:active={decisionState[0][0][Object.keys(decisionState[0][0])[0]][arrow]} on:click="{() => decisionState[0][0][Object.keys(decisionState[0][0])[0]][arrow] = !decisionState[0][0][Object.keys(decisionState[0][0])[0]][arrow]}" id={[arrow, levels[0]]} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" class="bi bi-arrow-down-right-circle-fill" viewBox="0 0 16 16" on:click={getremainingLabels} on:click={prepareLevel1} >
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768L5.904 5.197z"/>
                    </svg>
                    {/if}
                </p>
            {/each}
        </span>
         </div>
    </div>
</div>


{#if treeLevel1.length > 0}
    <div class="container Level{levels[1]}">
        <div class="row">
            
            {#each treeLevel1.filter(x => Object.values(x)[0].length > 1).map(x => Object.keys(Object.values(x)[0][1])[0]).filter((item, i, ar) => ar.indexOf(item) === i) as col, j}
            
                <div class="col">
                    <div class="row justify-content-sm-center">
                        <div class="col">
                           
                            <button class="btn btn-light btn-circle btn-xl" >{col}</button>
                            <div class="btn-group-lg d-flex justify-content-center p-3" role="group" aria-label="Basic example">
                                {#each rightorder(Object.values(allLabelsL1[j])[0]) as label, i}
                                    <button type="button" class="btn centered" style="background-color:{leafesColorsL1[uniqueLabelsL1[j].indexOf(label)]};"></button>
                                    
                                {/each}
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-sm-center"><hr style="width:70%"></div>
                    <div class="row">
                      
                         <span class = "d-flex justify-content-center">
                            {#each uniqueLabelsL1[j] as arr, i}
                                <p class="btn">{arr} 
                                   
                                    {#if uniqueLabelsL1[j].length % 2 === 1 && i === (uniqueLabelsL1[j].length-1)/2}
                                    <svg class:active={decisionState[1][decisionState[1].findIndex((element) => Object.keys(element)[0] == col)][col][arr]} on:click="{() => decisionState[1][decisionState[1].findIndex((element) => Object.keys(element)[0] == col)][col][arr] = !decisionState[1][decisionState[1].findIndex((element) => Object.keys(element)[0] == col)][col][arr]}" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16" on:click={getremainingLabels} on:click={prepareLevel2}>
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                    </svg>
                                    {:else if i <= (uniqueLabelsL1[j].length-1)/2}
                                    <svg class:active={decisionState[1][decisionState[1].findIndex((element) => Object.keys(element)[0] == col)][col][arr]} on:click="{() => decisionState[1][decisionState[1].findIndex((element) => Object.keys(element)[0] == col)][col][arr] = !decisionState[1][decisionState[1].findIndex((element) => Object.keys(element)[0] == col)][col][arr]}" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16" on:click={getremainingLabels} on:click={prepareLevel2}>
                                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"/>
                                    </svg>
                                    {:else}
                                    <svg class:active={decisionState[1][decisionState[1].findIndex((element) => Object.keys(element)[0] == col)][col][arr]} on:click="{() => decisionState[1][decisionState[1].findIndex((element) => Object.keys(element)[0] == col)][col][arr] = !decisionState[1][decisionState[1].findIndex((element) => Object.keys(element)[0] == col)][col][arr]}" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" class="bi bi-arrow-down-right-circle-fill" viewBox="0 0 16 16" on:click={getremainingLabels} on:click={prepareLevel2}>
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768L5.904 5.197z"/>
                                    </svg>
                                    {/if}
                                </p>
                                
                            {/each}
                        </span>
                    </div>

                </div>
                {:else} {col} 
               
             {/each}

        </div>  
    </div>
{:else}
    <p class="else">Else</p>
{/if}




{#if treeLevel2.length > 0}
    <div class="container Level{levels[2]}">
        <div class="row">
            
            {#each treeLevel2.filter(x => Object.values(x)[0].length > 2).map(x => Object.keys(Object.values(x)[0][2])[0]).filter((item, i, ar) => ar.indexOf(item) === i) as col, j}
           
                <div class="col">
                    <div class="row justify-content-sm-center">
                        <div class="col">
                            <button class="btn btn-light btn-circle btn-xl" >{col}</button>
                            
                            <div class="btn-group-lg d-flex justify-content-center p-3" role="group" aria-label="Basic example">
                                {#each rightorder(Object.values(allLabelsL2[j])[0]) as label, i}
                                    <button type="button" class="btn centered" style="background-color:{leafesColorsL2[uniqueLabelsL2[j].indexOf(label)]};"></button>
                                   
                                {/each}
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-sm-center"><hr style="width:70%"></div>
                    <div class="row">
                      
                         <span class = "d-flex justify-content-center">
                            {#each uniqueLabelsL2[j] as arr, i}
                                <p class="btn">{arr} 
                                    
                                    {#if uniqueLabelsL2[j].length % 2 === 1 && i === (uniqueLabelsL2[j].length-1)/2}
                                    <svg class:active={decisionState[2][decisionState[2].findIndex((element) => Object.keys(element)[0] == col)][col][arr]} on:click="{() => decisionState[2][decisionState[2].findIndex((element) => Object.keys(element)[0] == col)][col][arr] = !decisionState[2][decisionState[2].findIndex((element) => Object.keys(element)[0] == col)][col][arr]}" id={[arr, levels[1]]} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16" on:click={getremainingLabels} on:click={prepareLevel3}>
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                    </svg>
                                    {:else if i <= (uniqueLabelsL2[j].length-1)/2}
                                    <svg class:active={decisionState[2][decisionState[2].findIndex((element) => Object.keys(element)[0] == col)][col][arr]} on:click="{() => decisionState[2][decisionState[2].findIndex((element) => Object.keys(element)[0] == col)][col][arr] = !decisionState[2][decisionState[2].findIndex((element) => Object.keys(element)[0] == col)][col][arr]}" id={[arr, levels[1]]} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16" on:click={getremainingLabels} on:click={prepareLevel3}>
                                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"/>
                                    </svg>
                                    {:else}
                                    <svg class:active={decisionState[2][decisionState[2].findIndex((element) => Object.keys(element)[0] == col)][col][arr]} on:click="{() => decisionState[2][decisionState[2].findIndex((element) => Object.keys(element)[0] == col)][col][arr] = !decisionState[2][decisionState[2].findIndex((element) => Object.keys(element)[0] == col)][col][arr]}" id={[arr, levels[1]]} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" class="bi bi-arrow-down-right-circle-fill" viewBox="0 0 16 16" on:click={getremainingLabels} on:click={prepareLevel3}>
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768L5.904 5.197z"/>
                                    </svg>
                                    {/if}
                                </p>
                            
                            {/each}
                        </span>
                    </div>

                </div>
                
             {/each}

        </div>  
    </div>
{:else}
    <p class="else">Else</p>
{/if}



 
{#if treeLevel3.length > 0}
    <div class="container Level{levels[3]}">
        <div class="row">
             <!-- Object.keys(decisionState[1][0])  -->
            {#each treeLevel3.filter(x => Object.values(x)[0].length > 3).map(x => Object.keys(Object.values(x)[0][3])[0]).filter((item, i, ar) => ar.indexOf(item) === i) as col, j} 
            <!-- {console.log("L3: same?", decisionState[3].map(x => Object.keys(x)[0]), col, Object.keys((Object.values(treeLevel3[j])[0])[3])[0])} -->
                <!-- {#if col == Object.keys((Object.values(treeLevel3[j])[0])[3])[0]} -->
                <div class="col">
                    <div class="row justify-content-sm-center">
                        <div class="col">
                            <!-- Object.keys((Object.values(treeLevel3[j])[0])[3])[0] -->
                            <button class="btn btn-light btn-circle btn-xl" >{col}</button>
                            <div class="btn-group-lg d-flex justify-content-center p-3" role="group" aria-label="Basic example">
                                {#each rightorder(Object.values(allLabelsL3[j])[0]) as label, i}
                                    <button type="button" class="btn centered" style="background-color:{leafesColorsL3[uniqueLabelsL3[j].indexOf(label)]};"></button>
                                   <!-- {console.log(label, uniqueLabelsL1.indexOf(label))}  -->
                                {/each}
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-sm-center"><hr style="width:70%"></div>
                    <div class="row">
                    
                          <span class = "d-flex justify-content-center">
                            {#each uniqueLabelsL3[j] as a, i}
                                <p class="btn">{a} 
                                     <!-- treePath[0][Object.keys(treeLevel1[0])[0]][levels[1]][arr] -->
                                    {#if uniqueLabelsL3[j].length % 2 === 1 && i === (uniqueLabelsL3[j].length-1)/2}
                                    <svg class:active={decisionState[3][decisionState[3].findIndex((element) => Object.keys(element)[0] == col)][col][a]} on:click="{() => decisionState[3][decisionState[3].findIndex((element) => Object.keys(element)[0] == col)][col][a] = !decisionState[3][decisionState[3].findIndex((element) => Object.keys(element)[0] == col)][col][a]}" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16" on:click={getremainingLabels} >
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                    </svg>
                                    {:else if i <= (uniqueLabelsL3[j].length-1)/2}
                                    <svg class:active={decisionState[3][decisionState[3].findIndex((element) => Object.keys(element)[0] == col)][col][a]} on:click="{() => decisionState[3][decisionState[3].findIndex((element) => Object.keys(element)[0] == col)][col][a] = !decisionState[3][decisionState[3].findIndex((element) => Object.keys(element)[0] == col)][col][a]}" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16" on:click={getremainingLabels} >
                                        <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"/>
                                    </svg>
                                    {:else}
                                    <svg class:active={decisionState[3][decisionState[3].findIndex((element) => Object.keys(element)[0] == col)][col][a]} on:click="{() => decisionState[3][decisionState[3].findIndex((element) => Object.keys(element)[0] == col)][col][a] = !decisionState[3][decisionState[3].findIndex((element) => Object.keys(element)[0] == col)][col][a]}" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" class="bi bi-arrow-down-right-circle-fill" viewBox="0 0 16 16" on:click={getremainingLabels} >
                                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768L5.904 5.197z"/>
                                    </svg>
                                    {/if}
                                </p>
                                
                             
                            {/each}
                        </span>
                    </div>

                </div>
                
             {/each}
        </div>  
    </div>
{:else}
    <p class="else">Else</p>
{/if} 


<div class="container-fluid LevelLeaf pt-5">
    <div class="row justify-content-center">
        {#if name === 'Processing'}
            {#each remainingLabels as leaf, i}
                {#if remainingLabels.length == 1} 
                <!-- treePath[i][leaf].length == subtree[i][leaf].length -->
              
                <div class="col">{leaf}
                    <span>
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill='orange' x="0px" y="0px"
                        width="99.138px" height="99.138px" viewBox="0 0 99.138 99.138" style="enable-background:new 0 0 99.138 99.138;"
                        xml:space="preserve">
                   <g>
                       <g>
                           <path d="M2.819,37.569h30.5c0.829,0,1.5-0.672,1.5-1.5v-30.5c0-0.828-0.671-1.5-1.5-1.5h-30.5c-0.829,0-1.5,0.672-1.5,1.5v30.5
                               C1.319,36.897,1.99,37.569,2.819,37.569z M28.569,6.819c1.036,0,1.875,0.84,1.875,1.875s-0.839,1.875-1.875,1.875
                               s-1.875-0.84-1.875-1.875S27.533,6.819,28.569,6.819z M21.444,6.819c1.036,0,1.875,0.84,1.875,1.875s-0.839,1.875-1.875,1.875
                               s-1.875-0.84-1.875-1.875S20.408,6.819,21.444,6.819z M4.319,13.319h27.5v21.25h-27.5V13.319z"/>
                           <path d="M13.271,18.985l-7.08,3.647c-0.211,0.109-0.346,0.327-0.346,0.565v0.823c0,0.238,0.134,0.456,0.346,0.565l7.08,3.647
                               c0.092,0.047,0.191,0.07,0.292,0.07c0.114,0,0.229-0.03,0.331-0.093c0.188-0.115,0.305-0.321,0.305-0.543v-1.053
                               c0-0.24-0.136-0.461-0.352-0.568l-4.861-2.438l4.861-2.438c0.216-0.107,0.352-0.328,0.352-0.568v-1.053
                               c0-0.222-0.116-0.428-0.305-0.543C13.705,18.892,13.468,18.884,13.271,18.985z"/>
                           <path d="M20.855,16.58h-1.038c-0.264,0-0.499,0.162-0.595,0.407L14.965,28.05c-0.075,0.195-0.049,0.416,0.069,0.589
                               c0.118,0.173,0.314,0.275,0.524,0.275h1.021c0.263,0,0.499-0.161,0.593-0.406l4.273-11.063c0.076-0.196,0.05-0.416-0.069-0.589
                               C21.26,16.682,21.065,16.58,20.855,16.58z"/>
                           <path d="M30.189,22.615l-7.08-3.631c-0.199-0.102-0.434-0.092-0.622,0.023c-0.189,0.115-0.306,0.321-0.306,0.543v1.053
                               c0,0.241,0.138,0.462,0.354,0.569l4.896,2.438l-4.896,2.437c-0.216,0.107-0.354,0.328-0.354,0.569v1.053
                               c0,0.222,0.115,0.428,0.306,0.543c0.102,0.062,0.216,0.093,0.332,0.093c0.1,0,0.199-0.022,0.291-0.069l7.08-3.632
                               c0.212-0.109,0.346-0.328,0.346-0.566v-0.854C30.535,22.943,30.401,22.725,30.189,22.615z"/>
                           <path d="M63.971,37.569h30.5c0.829,0,1.5-0.672,1.5-1.5v-30.5c0-0.828-0.671-1.5-1.5-1.5h-30.5c-0.828,0-1.5,0.672-1.5,1.5v30.5
                               C62.471,36.897,63.144,37.569,63.971,37.569z M89.721,6.819c1.036,0,1.875,0.84,1.875,1.875s-0.839,1.875-1.875,1.875
                               c-1.035,0-1.875-0.84-1.875-1.875S88.687,6.819,89.721,6.819z M82.596,6.819c1.036,0,1.875,0.84,1.875,1.875
                               s-0.839,1.875-1.875,1.875c-1.035,0-1.875-0.84-1.875-1.875S81.562,6.819,82.596,6.819z M65.471,13.319h27.5v21.25h-27.5V13.319z"
                               />
                           <path d="M85.356,22.801l-7.813-6.205c-0.472-0.372-1.117-0.447-1.659-0.184c-0.542,0.261-0.888,0.811-0.888,1.414v12.409
                               c0,0.604,0.345,1.153,0.888,1.414c0.217,0.106,0.45,0.156,0.683,0.156c0.349,0,0.693-0.114,0.978-0.339l7.813-6.206
                               c0.375-0.298,0.594-0.751,0.594-1.229C85.949,23.552,85.731,23.101,85.356,22.801z"/>
                           <path d="M34.628,79.263l-1.922-0.709c0.151-1.4,0.103-2.829-0.162-4.25l1.856-0.855c1.159-0.533,1.667-1.91,1.133-3.07
                               l-1.083-2.352c-0.534-1.159-1.911-1.668-3.069-1.135l-1.856,0.855c-0.908-1.125-1.962-2.091-3.125-2.887l0.709-1.921
                               c0.44-1.196-0.173-2.531-1.369-2.974l-2.431-0.896c-1.16-0.428-2.545,0.21-2.973,1.369l-0.709,1.922
                               c-1.4-0.152-2.831-0.104-4.25,0.161l-0.854-1.854c-0.534-1.16-1.911-1.668-3.07-1.136l-2.354,1.084
                               c-1.158,0.534-1.667,1.911-1.134,3.07l0.855,1.856c-1.124,0.907-2.09,1.963-2.886,3.125l-1.92-0.709
                               c-1.157-0.43-2.546,0.209-2.974,1.368l-0.896,2.431c-0.215,0.582-0.189,1.209,0.068,1.771c0.26,0.561,0.723,0.989,1.3,1.201
                               l1.922,0.71c-0.151,1.399-0.103,2.83,0.161,4.251l-1.855,0.854c-1.159,0.534-1.667,1.912-1.134,3.069l1.082,2.356
                               c0.533,1.158,1.91,1.666,3.069,1.133l1.857-0.855c0.908,1.125,1.962,2.092,3.126,2.887l-0.709,1.92
                               c-0.215,0.58-0.191,1.207,0.068,1.771c0.258,0.562,0.72,0.989,1.3,1.203l2.43,0.897c0.579,0.213,1.208,0.189,1.771-0.068
                               c0.562-0.26,0.988-0.723,1.201-1.301l0.71-1.922c1.4,0.151,2.83,0.104,4.251-0.162l0.854,1.856
                               c0.534,1.159,1.912,1.668,3.07,1.136l2.354-1.086c1.159-0.533,1.667-1.91,1.134-3.069l-0.854-1.856
                               c1.124-0.908,2.09-1.962,2.885-3.125l1.922,0.71c0.58,0.216,1.209,0.189,1.771-0.069c0.562-0.258,0.987-0.722,1.203-1.299
                               l0.896-2.432C36.438,81.039,35.824,79.706,34.628,79.263z M21.4,84.227c-3.993,1.839-8.721,0.094-10.561-3.898
                               C9,76.335,10.746,71.607,14.739,69.768c3.993-1.839,8.721-0.095,10.56,3.899C27.137,77.66,25.393,82.388,21.4,84.227z"/>
                           <path d="M18.069,72.335c-2.575,0-4.669,2.094-4.669,4.668s2.095,4.67,4.669,4.67s4.669-2.096,4.669-4.67
                               S20.644,72.335,18.069,72.335z M18.069,80.083c-1.698,0-3.08-1.383-3.08-3.08s1.382-3.08,3.08-3.08s3.08,1.383,3.08,3.08
                               S19.768,80.083,18.069,80.083z"/>
                           <path d="M91.804,72.128v7.297c0,0.869-0.558,1.602-1.333,1.877v-22.09h-20v22.09c-0.774-0.275-1.333-1.008-1.333-1.877v-7.297
                               h-7.334v22.668h37.334V72.128H91.804z M88.471,81.423h-16V61.212h16V81.423z"/>
                           <polygon points="76.374,72.396 79.881,76.656 82.061,69.574 84.461,70.946 87.585,65.591 85.859,64.583 83.733,68.226 
                               80.883,66.597 79.063,72.515 75.571,68.275 73.018,76.411 74.925,77.011 		"/>
                           <rect x="77.721" y="40.232" width="3" height="16.333"/>
                           <rect x="16.707" y="40.232" width="3" height="16.333"/>
                           <rect x="37.555" y="21.247" width="22.5" height="3"/>
                       </g>
                
                   </svg>
                </span>
                    <!--Icon for Swimming Pool example-->
                    <!-- <span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" fill="orange" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="100px" height="100px" viewBox="0 0 303.002 303.002" style="enable-background:new 0 0 303.002 303.002;"
                        xml:space="preserve">
                        
                    <g>
                        <path d="M151.501,0c66.75,0,123.194,27.559,125.104,60.549c-1.91,32.987-58.354,60.553-125.104,60.553
                            c-66.752,0-123.191-27.56-125.104-60.553C28.31,27.559,84.749,0,151.501,0z"/>
                            <path d="M276.785,240.744c0,33.747-57.369,62.258-125.284,62.258S26.217,274.491,26.217,240.744v-29.771
                            c21.449,25.754,68.887,43.27,125.284,43.27s103.834-17.521,125.284-43.27V240.744z"/>
                        <path d="M276.785,179.688c0,33.746-57.369,62.258-125.284,62.258S26.217,213.434,26.217,179.688v-31.009
                            c21.449,25.748,68.887,43.259,125.284,43.259s103.834-17.522,125.284-43.259V179.688z"/>
                        <path d="M276.785,117.381c0,33.748-57.369,62.257-125.284,62.257s-125.284-28.51-125.284-62.257V90.135
                            c21.449,25.754,68.887,43.258,125.284,43.258s103.834-17.51,125.284-43.258V117.381z"/>
                        
                    </g>
                    </svg>
                    </span> -->
                </div>
                {:else}
              
            <div class="col">{leaf}
                <span>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="{leafesColors[i]}" x="0px" y="0px"
                        width="99.138px" height="99.138px" viewBox="0 0 99.138 99.138" style="enable-background:new 0 0 99.138 99.138;"
                        xml:space="preserve">
                   <g>
                       <g>
                           <path d="M2.819,37.569h30.5c0.829,0,1.5-0.672,1.5-1.5v-30.5c0-0.828-0.671-1.5-1.5-1.5h-30.5c-0.829,0-1.5,0.672-1.5,1.5v30.5
                               C1.319,36.897,1.99,37.569,2.819,37.569z M28.569,6.819c1.036,0,1.875,0.84,1.875,1.875s-0.839,1.875-1.875,1.875
                               s-1.875-0.84-1.875-1.875S27.533,6.819,28.569,6.819z M21.444,6.819c1.036,0,1.875,0.84,1.875,1.875s-0.839,1.875-1.875,1.875
                               s-1.875-0.84-1.875-1.875S20.408,6.819,21.444,6.819z M4.319,13.319h27.5v21.25h-27.5V13.319z"/>
                           <path d="M13.271,18.985l-7.08,3.647c-0.211,0.109-0.346,0.327-0.346,0.565v0.823c0,0.238,0.134,0.456,0.346,0.565l7.08,3.647
                               c0.092,0.047,0.191,0.07,0.292,0.07c0.114,0,0.229-0.03,0.331-0.093c0.188-0.115,0.305-0.321,0.305-0.543v-1.053
                               c0-0.24-0.136-0.461-0.352-0.568l-4.861-2.438l4.861-2.438c0.216-0.107,0.352-0.328,0.352-0.568v-1.053
                               c0-0.222-0.116-0.428-0.305-0.543C13.705,18.892,13.468,18.884,13.271,18.985z"/>
                           <path d="M20.855,16.58h-1.038c-0.264,0-0.499,0.162-0.595,0.407L14.965,28.05c-0.075,0.195-0.049,0.416,0.069,0.589
                               c0.118,0.173,0.314,0.275,0.524,0.275h1.021c0.263,0,0.499-0.161,0.593-0.406l4.273-11.063c0.076-0.196,0.05-0.416-0.069-0.589
                               C21.26,16.682,21.065,16.58,20.855,16.58z"/>
                           <path d="M30.189,22.615l-7.08-3.631c-0.199-0.102-0.434-0.092-0.622,0.023c-0.189,0.115-0.306,0.321-0.306,0.543v1.053
                               c0,0.241,0.138,0.462,0.354,0.569l4.896,2.438l-4.896,2.437c-0.216,0.107-0.354,0.328-0.354,0.569v1.053
                               c0,0.222,0.115,0.428,0.306,0.543c0.102,0.062,0.216,0.093,0.332,0.093c0.1,0,0.199-0.022,0.291-0.069l7.08-3.632
                               c0.212-0.109,0.346-0.328,0.346-0.566v-0.854C30.535,22.943,30.401,22.725,30.189,22.615z"/>
                           <path d="M63.971,37.569h30.5c0.829,0,1.5-0.672,1.5-1.5v-30.5c0-0.828-0.671-1.5-1.5-1.5h-30.5c-0.828,0-1.5,0.672-1.5,1.5v30.5
                               C62.471,36.897,63.144,37.569,63.971,37.569z M89.721,6.819c1.036,0,1.875,0.84,1.875,1.875s-0.839,1.875-1.875,1.875
                               c-1.035,0-1.875-0.84-1.875-1.875S88.687,6.819,89.721,6.819z M82.596,6.819c1.036,0,1.875,0.84,1.875,1.875
                               s-0.839,1.875-1.875,1.875c-1.035,0-1.875-0.84-1.875-1.875S81.562,6.819,82.596,6.819z M65.471,13.319h27.5v21.25h-27.5V13.319z"
                               />
                           <path d="M85.356,22.801l-7.813-6.205c-0.472-0.372-1.117-0.447-1.659-0.184c-0.542,0.261-0.888,0.811-0.888,1.414v12.409
                               c0,0.604,0.345,1.153,0.888,1.414c0.217,0.106,0.45,0.156,0.683,0.156c0.349,0,0.693-0.114,0.978-0.339l7.813-6.206
                               c0.375-0.298,0.594-0.751,0.594-1.229C85.949,23.552,85.731,23.101,85.356,22.801z"/>
                           <path d="M34.628,79.263l-1.922-0.709c0.151-1.4,0.103-2.829-0.162-4.25l1.856-0.855c1.159-0.533,1.667-1.91,1.133-3.07
                               l-1.083-2.352c-0.534-1.159-1.911-1.668-3.069-1.135l-1.856,0.855c-0.908-1.125-1.962-2.091-3.125-2.887l0.709-1.921
                               c0.44-1.196-0.173-2.531-1.369-2.974l-2.431-0.896c-1.16-0.428-2.545,0.21-2.973,1.369l-0.709,1.922
                               c-1.4-0.152-2.831-0.104-4.25,0.161l-0.854-1.854c-0.534-1.16-1.911-1.668-3.07-1.136l-2.354,1.084
                               c-1.158,0.534-1.667,1.911-1.134,3.07l0.855,1.856c-1.124,0.907-2.09,1.963-2.886,3.125l-1.92-0.709
                               c-1.157-0.43-2.546,0.209-2.974,1.368l-0.896,2.431c-0.215,0.582-0.189,1.209,0.068,1.771c0.26,0.561,0.723,0.989,1.3,1.201
                               l1.922,0.71c-0.151,1.399-0.103,2.83,0.161,4.251l-1.855,0.854c-1.159,0.534-1.667,1.912-1.134,3.069l1.082,2.356
                               c0.533,1.158,1.91,1.666,3.069,1.133l1.857-0.855c0.908,1.125,1.962,2.092,3.126,2.887l-0.709,1.92
                               c-0.215,0.58-0.191,1.207,0.068,1.771c0.258,0.562,0.72,0.989,1.3,1.203l2.43,0.897c0.579,0.213,1.208,0.189,1.771-0.068
                               c0.562-0.26,0.988-0.723,1.201-1.301l0.71-1.922c1.4,0.151,2.83,0.104,4.251-0.162l0.854,1.856
                               c0.534,1.159,1.912,1.668,3.07,1.136l2.354-1.086c1.159-0.533,1.667-1.91,1.134-3.069l-0.854-1.856
                               c1.124-0.908,2.09-1.962,2.885-3.125l1.922,0.71c0.58,0.216,1.209,0.189,1.771-0.069c0.562-0.258,0.987-0.722,1.203-1.299
                               l0.896-2.432C36.438,81.039,35.824,79.706,34.628,79.263z M21.4,84.227c-3.993,1.839-8.721,0.094-10.561-3.898
                               C9,76.335,10.746,71.607,14.739,69.768c3.993-1.839,8.721-0.095,10.56,3.899C27.137,77.66,25.393,82.388,21.4,84.227z"/>
                           <path d="M18.069,72.335c-2.575,0-4.669,2.094-4.669,4.668s2.095,4.67,4.669,4.67s4.669-2.096,4.669-4.67
                               S20.644,72.335,18.069,72.335z M18.069,80.083c-1.698,0-3.08-1.383-3.08-3.08s1.382-3.08,3.08-3.08s3.08,1.383,3.08,3.08
                               S19.768,80.083,18.069,80.083z"/>
                           <path d="M91.804,72.128v7.297c0,0.869-0.558,1.602-1.333,1.877v-22.09h-20v22.09c-0.774-0.275-1.333-1.008-1.333-1.877v-7.297
                               h-7.334v22.668h37.334V72.128H91.804z M88.471,81.423h-16V61.212h16V81.423z"/>
                           <polygon points="76.374,72.396 79.881,76.656 82.061,69.574 84.461,70.946 87.585,65.591 85.859,64.583 83.733,68.226 
                               80.883,66.597 79.063,72.515 75.571,68.275 73.018,76.411 74.925,77.011 		"/>
                           <rect x="77.721" y="40.232" width="3" height="16.333"/>
                           <rect x="16.707" y="40.232" width="3" height="16.333"/>
                           <rect x="37.555" y="21.247" width="22.5" height="3"/>
                       </g>
                
                   </svg>
            </span>

                 <!--Icon for Swimming Pool example-->
                <!-- <span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" fill="{leafesColors[i]}" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="100px" height="100px" viewBox="0 0 303.002 303.002" style="enable-background:new 0 0 303.002 303.002;"
                    xml:space="preserve">
                    
                <g>
                    <path d="M151.501,0c66.75,0,123.194,27.559,125.104,60.549c-1.91,32.987-58.354,60.553-125.104,60.553
                        c-66.752,0-123.191-27.56-125.104-60.553C28.31,27.559,84.749,0,151.501,0z"/>
                        <path d="M276.785,240.744c0,33.747-57.369,62.258-125.284,62.258S26.217,274.491,26.217,240.744v-29.771
                        c21.449,25.754,68.887,43.27,125.284,43.27s103.834-17.521,125.284-43.27V240.744z"/>
                    <path d="M276.785,179.688c0,33.746-57.369,62.258-125.284,62.258S26.217,213.434,26.217,179.688v-31.009
                        c21.449,25.748,68.887,43.259,125.284,43.259s103.834-17.522,125.284-43.259V179.688z"/>
                    <path d="M276.785,117.381c0,33.748-57.369,62.257-125.284,62.257s-125.284-28.51-125.284-62.257V90.135
                        c21.449,25.754,68.887,43.258,125.284,43.258s103.834-17.51,125.284-43.258V117.381z"/>
                    
                </g>
                </svg>
                </span> -->
            </div>
            {/if}
            {/each}
        {:else if name === 'DataPlatform'}
            {#each remainingLabels as leaf, i}
                {#if remainingLabels.length == 1} 
                    <!-- treePath[i][leaf].length == subtree[i][leaf].length -->
                    <div class="col">{leaf}
                        <span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" fill="orange" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="80px" height="80px" viewBox="0 0 303.002 303.002" style="enable-background:new 0 0 303.002 303.002;"
                            xml:space="preserve">
                            
                        <g>
                            <path d="M151.501,0c66.75,0,123.194,27.559,125.104,60.549c-1.91,32.987-58.354,60.553-125.104,60.553
                                c-66.752,0-123.191-27.56-125.104-60.553C28.31,27.559,84.749,0,151.501,0z"/>
                                <path d="M276.785,240.744c0,33.747-57.369,62.258-125.284,62.258S26.217,274.491,26.217,240.744v-29.771
                                c21.449,25.754,68.887,43.27,125.284,43.27s103.834-17.521,125.284-43.27V240.744z"/>
                            <path d="M276.785,179.688c0,33.746-57.369,62.258-125.284,62.258S26.217,213.434,26.217,179.688v-31.009
                                c21.449,25.748,68.887,43.259,125.284,43.259s103.834-17.522,125.284-43.259V179.688z"/>
                            <path d="M276.785,117.381c0,33.748-57.369,62.257-125.284,62.257s-125.284-28.51-125.284-62.257V90.135
                                c21.449,25.754,68.887,43.258,125.284,43.258s103.834-17.51,125.284-43.258V117.381z"/>
                            
                        </g>
                        </svg>
                        </span> 
                    </div>
                {:else}
                    <div class="col">{leaf}
                        <span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" fill="{leafesColors[i]}" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="80px" height="80px" viewBox="0 0 303.002 303.002" style="enable-background:new 0 0 303.002 303.002;"
                            xml:space="preserve">
                            
                        <g>
                            <path d="M151.501,0c66.75,0,123.194,27.559,125.104,60.549c-1.91,32.987-58.354,60.553-125.104,60.553
                                c-66.752,0-123.191-27.56-125.104-60.553C28.31,27.559,84.749,0,151.501,0z"/>
                                <path d="M276.785,240.744c0,33.747-57.369,62.258-125.284,62.258S26.217,274.491,26.217,240.744v-29.771
                                c21.449,25.754,68.887,43.27,125.284,43.27s103.834-17.521,125.284-43.27V240.744z"/>
                            <path d="M276.785,179.688c0,33.746-57.369,62.258-125.284,62.258S26.217,213.434,26.217,179.688v-31.009
                                c21.449,25.748,68.887,43.259,125.284,43.259s103.834-17.522,125.284-43.259V179.688z"/>
                            <path d="M276.785,117.381c0,33.748-57.369,62.257-125.284,62.257s-125.284-28.51-125.284-62.257V90.135
                                c21.449,25.754,68.887,43.258,125.284,43.258s103.834-17.51,125.284-43.258V117.381z"/>
                            
                        </g>
                        </svg>
                        </span> 
                    </div>
                {/if}
            {/each}

    {:else}
            {#each remainingLabels as leaf, i}
                {#if remainingLabels.length == 1} 
                    <div class="col">{leaf}
                        <span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="orange" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 120.65 122.88" style="enable-background:new 0 0 120.65 122.88" xml:space="preserve"><g>
                            <path d="M83.24,27.18c-0.69,0.34-1.37,0.7-2.05,1.1c-2.05,1.2-4.06,2.66-6.12,4.34l-4.39-5.03c1.51-1.41,3.16-2.69,4.91-3.82 c1.39-0.91,2.85-1.71,4.34-2.41c0.6-0.3,1.2-0.58,1.81-0.84c-2.9-5.13-7.07-8.81-11.79-11.08C65.24,7.18,59.95,6.31,54.81,6.8 c-5.11,0.49-10.08,2.35-14.18,5.54c-4.74,3.68-8.36,9.18-9.74,16.47l-0.43,2.28l-2.27,0.4c-2.22,0.39-4.21,0.92-5.95,1.6 c-1.69,0.66-3.19,1.46-4.51,2.41c-1.05,0.76-1.96,1.62-2.73,2.54c-2.39,2.86-3.5,6.45-3.47,10.08c0.03,3.69,1.23,7.41,3.44,10.47 c0.82,1.14,1.78,2.18,2.87,3.09c1.1,0.92,2.35,1.68,3.75,2.25c1.39,0.57,2.92,0.98,4.63,1.22h65.87c3.21-0.77,6.04-1.82,8.44-3.16 c2.39-1.34,4.34-2.96,5.8-4.91c2.27-3.02,3.39-7.3,3.43-11.68c0.05-4.6-1.07-9.22-3.26-12.59c-0.63-0.97-1.31-1.84-2.04-2.63 c-3.28-3.53-7.44-5.07-11.76-5.1C89.55,25.06,86.32,25.82,83.24,27.18L83.24,27.18L83.24,27.18z M113.31,84.26 c2.03,0,3.86,0.82,5.19,2.15c1.33,1.33,2.15,3.17,2.15,5.19c0,2.03-0.82,3.86-2.15,5.19c-1.33,1.33-3.17,2.15-5.19,2.15 c-2.03,0-3.86-0.82-5.19-2.15c-0.69-0.69-1.25-1.52-1.62-2.45H88.23c-1.44,0-2.61-1.17-2.61-2.61v-19.9H71.83v36.83 c0.98,0.37,1.86,0.95,2.58,1.67c1.33,1.33,2.15,3.17,2.15,5.19c0,2.03-0.82,3.86-2.15,5.19c-1.33,1.33-3.17,2.15-5.19,2.15 c-2.03,0-3.86-0.82-5.19-2.15c-1.33-1.33-2.15-3.17-2.15-5.19c0-2.03,0.82-3.86,2.15-5.19c0.73-0.73,1.6-1.3,2.58-1.67V71.84H51.02 v43.27c0,1.44-1.17,2.61-2.61,2.61H19.37c-0.36,1.15-0.99,2.18-1.82,3.01c-1.33,1.33-3.17,2.15-5.19,2.15 c-2.03,0-3.86-0.82-5.19-2.15c-1.33-1.33-2.15-3.17-2.15-5.19c0-2.03,0.82-3.86,2.15-5.19c1.33-1.33,3.17-2.15,5.19-2.15 c2.03,0,3.86,0.82,5.19,2.15c0.62,0.62,1.13,1.35,1.5,2.16H45.8V71.84H32.66v13.44c0,1.44-1.17,2.61-2.61,2.61H14.19 c-0.37,0.95-0.94,1.8-1.65,2.51c-1.33,1.33-3.17,2.15-5.19,2.15s-3.86-0.82-5.19-2.15C0.82,89.08,0,87.24,0,85.21 c0-2.03,0.82-3.86,2.15-5.19c1.33-1.33,3.17-2.15,5.19-2.15s3.86,0.82,5.19,2.15c0.74,0.74,1.33,1.65,1.7,2.65h13.2V71.84h-1.37 l-0.42-0.04c-2.42-0.31-4.63-0.88-6.62-1.7c-2.06-0.85-3.89-1.95-5.5-3.3c-1.52-1.27-2.86-2.72-4-4.29 c-3.03-4.18-4.66-9.29-4.7-14.37C4.81,43.01,6.41,37.9,9.86,33.76c1.12-1.34,2.43-2.57,3.94-3.66c1.75-1.27,3.76-2.35,6.02-3.23 c1.56-0.61,3.23-1.12,5-1.52c2-7.93,6.26-14.04,11.73-18.29c5.12-3.97,11.29-6.28,17.63-6.89C60.49-0.44,67,0.63,72.83,3.43 c6.38,3.06,11.93,8.15,15.54,15.32h0c1.45-0.23,2.9-0.34,4.35-0.33c6.1,0.04,11.98,2.22,16.62,7.22c0.97,1.05,1.89,2.22,2.75,3.54 c2.91,4.47,4.39,10.43,4.33,16.27c-0.06,5.73-1.61,11.43-4.77,15.63c-2.06,2.74-4.7,4.97-7.87,6.74c-3.05,1.71-6.61,3.01-10.6,3.93 l-0.74,0.09h-1.58v17.29h15.55c0.37-1.03,0.96-1.96,1.72-2.72C109.44,85.08,111.28,84.26,113.31,84.26L113.31,84.26z"/></g>
                        </svg>
                        </span> 
                    </div>
                {:else}
                    <div class="col">{leaf}
                        <span>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="{leafesColors[i]}" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 120.65 122.88" style="enable-background:new 0 0 120.65 122.88" xml:space="preserve"><g>
                            <path d="M83.24,27.18c-0.69,0.34-1.37,0.7-2.05,1.1c-2.05,1.2-4.06,2.66-6.12,4.34l-4.39-5.03c1.51-1.41,3.16-2.69,4.91-3.82 c1.39-0.91,2.85-1.71,4.34-2.41c0.6-0.3,1.2-0.58,1.81-0.84c-2.9-5.13-7.07-8.81-11.79-11.08C65.24,7.18,59.95,6.31,54.81,6.8 c-5.11,0.49-10.08,2.35-14.18,5.54c-4.74,3.68-8.36,9.18-9.74,16.47l-0.43,2.28l-2.27,0.4c-2.22,0.39-4.21,0.92-5.95,1.6 c-1.69,0.66-3.19,1.46-4.51,2.41c-1.05,0.76-1.96,1.62-2.73,2.54c-2.39,2.86-3.5,6.45-3.47,10.08c0.03,3.69,1.23,7.41,3.44,10.47 c0.82,1.14,1.78,2.18,2.87,3.09c1.1,0.92,2.35,1.68,3.75,2.25c1.39,0.57,2.92,0.98,4.63,1.22h65.87c3.21-0.77,6.04-1.82,8.44-3.16 c2.39-1.34,4.34-2.96,5.8-4.91c2.27-3.02,3.39-7.3,3.43-11.68c0.05-4.6-1.07-9.22-3.26-12.59c-0.63-0.97-1.31-1.84-2.04-2.63 c-3.28-3.53-7.44-5.07-11.76-5.1C89.55,25.06,86.32,25.82,83.24,27.18L83.24,27.18L83.24,27.18z M113.31,84.26 c2.03,0,3.86,0.82,5.19,2.15c1.33,1.33,2.15,3.17,2.15,5.19c0,2.03-0.82,3.86-2.15,5.19c-1.33,1.33-3.17,2.15-5.19,2.15 c-2.03,0-3.86-0.82-5.19-2.15c-0.69-0.69-1.25-1.52-1.62-2.45H88.23c-1.44,0-2.61-1.17-2.61-2.61v-19.9H71.83v36.83 c0.98,0.37,1.86,0.95,2.58,1.67c1.33,1.33,2.15,3.17,2.15,5.19c0,2.03-0.82,3.86-2.15,5.19c-1.33,1.33-3.17,2.15-5.19,2.15 c-2.03,0-3.86-0.82-5.19-2.15c-1.33-1.33-2.15-3.17-2.15-5.19c0-2.03,0.82-3.86,2.15-5.19c0.73-0.73,1.6-1.3,2.58-1.67V71.84H51.02 v43.27c0,1.44-1.17,2.61-2.61,2.61H19.37c-0.36,1.15-0.99,2.18-1.82,3.01c-1.33,1.33-3.17,2.15-5.19,2.15 c-2.03,0-3.86-0.82-5.19-2.15c-1.33-1.33-2.15-3.17-2.15-5.19c0-2.03,0.82-3.86,2.15-5.19c1.33-1.33,3.17-2.15,5.19-2.15 c2.03,0,3.86,0.82,5.19,2.15c0.62,0.62,1.13,1.35,1.5,2.16H45.8V71.84H32.66v13.44c0,1.44-1.17,2.61-2.61,2.61H14.19 c-0.37,0.95-0.94,1.8-1.65,2.51c-1.33,1.33-3.17,2.15-5.19,2.15s-3.86-0.82-5.19-2.15C0.82,89.08,0,87.24,0,85.21 c0-2.03,0.82-3.86,2.15-5.19c1.33-1.33,3.17-2.15,5.19-2.15s3.86,0.82,5.19,2.15c0.74,0.74,1.33,1.65,1.7,2.65h13.2V71.84h-1.37 l-0.42-0.04c-2.42-0.31-4.63-0.88-6.62-1.7c-2.06-0.85-3.89-1.95-5.5-3.3c-1.52-1.27-2.86-2.72-4-4.29 c-3.03-4.18-4.66-9.29-4.7-14.37C4.81,43.01,6.41,37.9,9.86,33.76c1.12-1.34,2.43-2.57,3.94-3.66c1.75-1.27,3.76-2.35,6.02-3.23 c1.56-0.61,3.23-1.12,5-1.52c2-7.93,6.26-14.04,11.73-18.29c5.12-3.97,11.29-6.28,17.63-6.89C60.49-0.44,67,0.63,72.83,3.43 c6.38,3.06,11.93,8.15,15.54,15.32h0c1.45-0.23,2.9-0.34,4.35-0.33c6.1,0.04,11.98,2.22,16.62,7.22c0.97,1.05,1.89,2.22,2.75,3.54 c2.91,4.47,4.39,10.43,4.33,16.27c-0.06,5.73-1.61,11.43-4.77,15.63c-2.06,2.74-4.7,4.97-7.87,6.74c-3.05,1.71-6.61,3.01-10.6,3.93 l-0.74,0.09h-1.58v17.29h15.55c0.37-1.03,0.96-1.96,1.72-2.72C109.44,85.08,111.28,84.26,113.31,84.26L113.31,84.26z"/></g>
                        </svg>
                        </span> 
                    </div>
                {/if}
            {/each}
    {/if}
       
    </div>
</div>



<style>

* {
            background-size: auto;
            text-align: center;
            
        }
   
.text-wrap {
            white-space: normal;
        } 
.bi.bi-arrow-down-left-circle-fill:hover{
        fill: rgb(243, 7, 204);
}

.bi.bi-arrow-down-circle-fill:hover{
        fill: rgb(243, 7, 204);
}

.bi.bi-arrow-down-right-circle-fill:hover{
        fill: rgb(243, 7, 204);
}

.bi.bi-arrow-down-left-circle-fill:checked{
        fill: rgb(233, 178, 29);
}

 .Level1, .Level2 {
            display: block;
        } 
/* .row.level1:hover .level2 {
            display: block;
        } */
/* .level0:hover .level1 {
            display: block;
        }

.Level1:hover .Level2 {
        display: block;
} */

.btn-circle.btn-sm {
            /* width: 30px;
            height: 30px; */
            padding: 6px 0px;
            border-radius: 15px;
            /* font-size: 8px; */
            text-align: center;
        }
.btn-circle.btn-md {
            /* width: 50px;
            height: 50px; */
            padding: 7px 10px;
            border-radius: 25px;
            /* font-size: 10px; */
            text-align: center;
        }
.btn-circle.btn-xl {
            /* width: 70px;
            height: 70px; */
            padding: 10px 16px;
            border-radius: 35px;
            /* font-size: 12px; */
            text-align: center;
        }

p {
    text-align: center;
}
/* h1 {
    text-align: center;
    letter-spacing: 5px;
    padding: 2rem;
} */

.btn.active {
		background-color: pink;
	}
svg.active {
    fill:rgb(233, 178, 29);
}

.else {
    visibility: hidden;
}
      

</style>


