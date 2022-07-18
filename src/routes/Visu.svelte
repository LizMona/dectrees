<script>

//--------------TEST------------------------//
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

// test 



//--------------PRODUCTION------------------//
export let name = 'Processing';
export let type = 'default';
//export let mode;
export let mode;
export let displaymode = 'complete'
// $: if (mode) {displaymode = 'optimized'}
// else {displaymode = 'complete'}

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
 ]}, DataPlatform: {name: "Data Plattform", type: "default", 
 complete: [{HDFS: [{Indexed : "No"}, {OpenSource : "Yes"}]},
                  {GoogleFS: [{Indexed : "No"}, {OpenSource : "No"}]},
                  {MongoDB: [{Indexed : "Yes"},
                          {Distributed: "Yes"},
                          {Schema: "Yes"}]},
                 {Cassandra: [{Indexed : "Yes"},
                          {Distributed: "Yes"},
                          {Schema: "No"},
                          {10: "Yes"}]},
                  {Redis: [{Indexed : "Yes"},
                          {Distributed: "Yes"},
                          {Schema: "No"},
                          {10: "No"}]},
                  {PostgreSQL: [{Indexed : "Yes"},
                          {Distributed: "No"}]}
          ]
          , optimized: [{HDFS: [{Indexed : "No"}, {OpenSource : "Yes"}]},
                  {GoogleFS: [{Indexed : "No"}, {OpenSource : "No"}]},
                  {MongoDB: [{Indexed : "Yes"},
                          {Distributed: "Yes"},
                          {Schema: "Yes"}]},
                 {Cassandra: [{Indexed : "Yes"},
                          {Distributed: "Yes"},
                          {Schema: "No"},
                          {10: "Yes"}]},
                  {Redis: [{Indexed : "Yes"},
                          {Distributed: "Yes"},
                          {Schema: "No"},
                          {10: "No"}]},
                  {PostgreSQL: [{Indexed : "Yes"},
                          {Distributed: "No"}]}
          ]}, Infrastructure: {name: "Infrastructure", type: "default", 
 complete: [{1: [{Indexed : "No"}, {OpenSource : "Yes"}]},
                  {2: [{Indexed : "No"}, {OpenSource : "No"}]},
                  {3: [{Indexed : "Yes"},
                          {Distributed: "Yes"},
                          {Schema: "Yes"}]},
                 {4: [{Indexed : "Yes"},
                          {Distributed: "Yes"},
                          {Schema: "No"},
                          {10: "Yes"}]},
                  {5: [{Indexed : "Yes"},
                          {Distributed: "Yes"},
                          {Schema: "No"},
                          {10: "No"}]},
                  {6: [{Indexed : "Yes"},
                          {Distributed: "No"}]}
          ]
          , optimized: [{1: [{Indexed : "No"}, {OpenSource : "Yes"}]},
                  {2: [{Indexed : "No"}, {OpenSource : "No"}]},
                  {3: [{Indexed : "Yes"},
                          {Distributed: "Yes"},
                          {Schema: "Yes"}]},
                 {4: [{Indexed : "Yes"},
                          {Distributed: "Yes"},
                          {Schema: "No"},
                          {10: "Yes"}]},
                  {5: [{Indexed : "Yes"},
                          {Distributed: "Yes"},
                          {Schema: "No"},
                          {10: "No"}]},
                  {6: [{Indexed : "Yes"},
                          {Distributed: "No"}]}
          ]}}


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
let subtree = tree[name][displaymode]

// Initialize: the treePath shows which path is selected along the subtree

let treePath = [];
let i = 0;

for (let elem of subtree) {
        treePath.push({[Object.keys(elem)[0]] : []});
        //console.log(treePath)
        for (let part of subtree[i][Object.keys(elem)[0]]) {
            //let myobj = {};
            //myobj.Object.values(part)[0] = false;
             Object.values(treePath[i])[0].push({[Object.values(part)[0]] : false});
             //console.log(Object.values(part)[0], treePath[i])
            //treePath[i].push(myobj)
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
        
            else { //let counter = 0;
                for (let elem of keylist){
                    console.log((Object.keys(Object.values(leaf)[0][level])[0]),elem,!Object.keys(Object.values(elem)[0])[0].includes(Object.values(Object.keys(Object.values(leaf)[0][level])[0])[0]))
                    if ((Object.keys(Object.values(leaf)[0][level])[0]) === elem && !Object.keys(Object.values(elem)[0])[0].includes(Object.values(Object.keys(Object.values(leaf)[0][level])[0])[0])){
                        counter = keylist.indexOf(elem)
                        console.log("test", Object.values(Object.values(leaf)[0][level])[0]);
                        let item = Object.values(Object.values(leaf)[0][level])[0];
                        console.log(levellist, counter, elem, item)
                        levellist[counter][elem][item] = false;
                        //counter += 1;}
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



let decisionexample2 = [
                         [{Indexed : {"Yes": true, "No": true}}], 
                         [{OpenSource: {"Yes": false, "No": false}}, {Distributed: {"Yes": false, "No": false}}],
                         [{Schema: {"Yes":false, "No": false}}],
                         [{10: {"Yes": false, "No": false}}]
                     ];

$: if (decisionState) {
    console.log("Change TP:", treePath)
let treeindex = 0;
// ?? Eschersheim schreibt bei treepath was komisches rein...No:true??
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
        
           
        }  //nodeindex ++;
        }  //treeindex ++;
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
//decideLevel(levels[0], uniqueLabels);


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
        //uniqueLabelsL1.push([])
        console.log(uniqueLabelsL1, dec)
        if (Object.values(dec)[0].length > 1) {
            //console.log(uniqueLabelsL1.indexOf(dec), Object.values(dec)[0], Object.values(dec).filter((item, i, ar) => ar.indexOf(item) === i))
            let temp  = Object.values(dec)[0].filter((item, i, ar) => ar.indexOf(item) === i)
            uniqueLabelsL1.push(temp);
            uniqueLabelsL1 = uniqueLabelsL1;}
        else {uniqueLabelsL1.push(Object.values(dec)[0]);}
        //console.log("This are the unique Labels L1", uniqueLabelsL1);
        uniqueLabelsL1 = uniqueLabelsL1;}
    //decideLevel(levels[1], uniqueLabelsL1);
console.log("TreePath", treePath, "TL1:", treeLevel1, "AllL1:", allLabelsL1, "UniqueL1:", uniqueLabelsL1, "decState", decisionState);
//return treePath, treeLevel1, allLabelsL1 = allLabelsL1, uniqueLabelsL1 = uniqueLabelsL1
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
                    // if (Object.values(treeLevel2[0])[0][2]){
                        for (let dec of treeLevel2.filter(x => Object.values(x)[0].length > 2).map(x => Object.keys(Object.values(x)[0][2])[0]).filter((item, i, ar) => ar.indexOf(item) === i)){
                            let obj = {}
                            obj[dec] = []
                            for (let leaf of treeLevel2.filter(x => Object.values(x)[0].length > 2).filter((x) => Object.keys(Object.values(x)[0][2])[0] == dec).map(x => Object.values(Object.values(x)[0][2])[0])){
                                obj[dec].push(leaf)
                            } allLabelsL2.push(obj)
                            allLabelsL2 = allLabelsL2;
                        }
                    // }
                console.log("This are the all LabelsL2", allLabelsL2)
                }

// create unique labels
$: if (allLabelsL2) {   // create unique labels
    uniqueLabelsL2 = [];
    for (let dec of allLabelsL2) {
        //uniqueLabelsL1.push([])
        console.log(uniqueLabelsL2, dec)
        if (Object.values(dec)[0].length > 1) {
            //console.log(uniqueLabelsL1.indexOf(dec), Object.values(dec)[0], Object.values(dec).filter((item, i, ar) => ar.indexOf(item) === i))
            let temp  = Object.values(dec)[0].filter((item, i, ar) => ar.indexOf(item) === i)
            uniqueLabelsL2.push(temp);
            uniqueLabelsL2 = uniqueLabelsL2;}
        else {uniqueLabelsL2.push(Object.values(dec)[0]);}
        //console.log("This are the unique Labels L1", uniqueLabelsL1);
        uniqueLabelsL2 = uniqueLabelsL2;}
    //decideLevel(levels[1], uniqueLabelsL1);
console.log("TreePath", treePath, "TL2:", treeLevel2, "AllL2:", allLabelsL2, "UniqueL2:", uniqueLabelsL2, "decState", decisionState);
//return treePath, treeLevel1, allLabelsL1 = allLabelsL1, uniqueLabelsL1 = uniqueLabelsL1
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
    //decideLevel(levels[1], uniqueLabelsL1);
console.log("TreePath", treePath, "TL3:", treeLevel3, "AllL3:", allLabelsL3, "UniqueL3:", uniqueLabelsL2, "decState", decisionState);
//return treePath, treeLevel1, allLabelsL1 = allLabelsL1, uniqueLabelsL1 = uniqueLabelsL1
} 

$: if (uniqueLabelsL3) {console.log("DOM: success", "TreePath", treePath, "TL3:", treeLevel3, "AllL3:", allLabelsL3, "UniqueL3:", uniqueLabelsL3, "decState", decisionState)}



</script>





<!-- <div>{name}, {mode}, {type}, {displaymode}</div> -->

<div class="container Level{levels[0]} pt-5">
    
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
            <!-- Object.keys(decisionState[1][0]) -->
            <!-- {#each decisionState[1].map(x => Object.keys(x)[0]) as col, j}  -->
            {#each treeLevel1.filter(x => Object.values(x)[0].length > 1).map(x => Object.keys(Object.values(x)[0][1])[0]).filter((item, i, ar) => ar.indexOf(item) === i) as col, j}
            <!-- {console.log("L1: same?", decisionState[1].map(x => Object.keys(x)[0]), col, Object.keys((Object.values(treeLevel1[j])[0])[1])[0], treeLevel1)} -->
                 <!-- {#if col == Object.keys((Object.values(treeLevel1[j])[0])[1])[0]}  -->
                 <!-- {#if decisionState[1][col] == true} -->
                <div class="col">
                    <div class="row justify-content-sm-center">
                        <div class="col">
                            <!-- <button class="btn btn-light btn-circle btn-xl" >{Object.keys((Object.values(treeLevel1[j])[0])[1])[0]}</button> -->
                            <button class="btn btn-light btn-circle btn-xl" >{col}</button>
                            <div class="btn-group-lg d-flex justify-content-center p-3" role="group" aria-label="Basic example">
                                {#each rightorder(Object.values(allLabelsL1[j])[0]) as label, i}
                                    <button type="button" class="btn centered" style="background-color:{leafesColorsL1[uniqueLabelsL1[j].indexOf(label)]};"></button>
                                    <!-- {console.log(label, uniqueLabelsL1.indexOf(label))} -->
                                {/each}
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-sm-center"><hr style="width:70%"></div>
                    <div class="row">
                      <!-- <div class = "d-flex justify-content-center"><button type="button" class="btn btn-light centered">Distributed Implementation?</button></div>  -->
                         <span class = "d-flex justify-content-center">
                            {#each uniqueLabelsL1[j] as arr, i}
                                <p class="btn">{arr} 
                                    <!-- treePath[0][Object.keys(treeLevel1[0])[0]][levels[1]][arr] -->
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
                                <!-- class:active={decisionState[1][j][Object.keys(decisionState[1][j])[0]][arr]} -->
                            
                            <!-- <p class="btn">NO
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="purple" class="bi bi-arrow-down-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768L5.904 5.197z"/>
                                </svg>
                            </p> -->
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
            <!-- Object.keys(decisionState[1][0]) -->
            <!-- {#each decisionState[2].map(x => Object.keys(x)[0]) as col, j}  -->
            {#each treeLevel2.filter(x => Object.values(x)[0].length > 2).map(x => Object.keys(Object.values(x)[0][2])[0]).filter((item, i, ar) => ar.indexOf(item) === i) as col, j}
            <!-- {console.log("L2: same?", decisionState[2].map(x => Object.keys(x)[0]), col, Object.keys((Object.values(treeLevel2[j])[0])[2])[0])} -->
                <!-- {#if col == Object.keys((Object.values(treeLevel2[j])[0])[2])[0]} -->
                <div class="col">
                    <div class="row justify-content-sm-center">
                        <div class="col">
                            <button class="btn btn-light btn-circle btn-xl" >{col}</button>
                            <!-- {Object.keys((Object.values(treeLevel2[j])[0])[2])[0]} -->
                            <div class="btn-group-lg d-flex justify-content-center p-3" role="group" aria-label="Basic example">
                                {#each rightorder(Object.values(allLabelsL2[j])[0]) as label, i}
                                    <button type="button" class="btn centered" style="background-color:{leafesColorsL2[uniqueLabelsL2[j].indexOf(label)]};"></button>
                                    <!-- {console.log(label, uniqueLabelsL1.indexOf(label))} -->
                                {/each}
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-sm-center"><hr style="width:70%"></div>
                    <div class="row">
                      <!-- <div class = "d-flex justify-content-center"><button type="button" class="btn btn-light centered">Distributed Implementation?</button></div>  -->
                         <span class = "d-flex justify-content-center">
                            {#each uniqueLabelsL2[j] as arr, i}
                                <p class="btn">{arr} 
                                    <!-- treePath[0][Object.keys(treeLevel1[0])[0]][levels[1]][arr] -->
                                    <!-- decisionState[2][0][Object.keys(decisionState[2][0])[0]][arr] -->
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
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="orange" x="0px" y="0px"
                        width="80px" height="80px" viewBox="0 0 484.854 484.855" style="enable-background:new 0 0 484.854 484.855;"
                        xml:space="preserve">
                        <g>
                        <g id="_x32_3_19_">
                            <g>
                            <path d="M133.314,331.328c9.665,0,17.5-7.836,17.5-17.5v-41.52h116.42v39.131c0,9.665,7.835,17.5,17.5,17.5
                                c9.664,0,17.5-7.835,17.5-17.5V121.241c0-32.836,27.164-40.291,30.262-41.032l-0.17,0.038l-0.002-0.01
                                c7.717-1.827,13.465-8.744,13.465-17.018c0-9.667-7.838-17.505-17.506-17.505c-1.164,0-2.299,0.12-3.398,0.336v-0.002
                                c-0.01,0.002-0.021,0.005-0.031,0.007c-0.182,0.036-0.357,0.086-0.539,0.128c-20.076,4.612-57.079,25.964-57.079,75.058v36.614
                                h-116.42v-34.227c0-31.065,24.301-39.409,29.546-40.847c8.167-1.482,14.365-8.615,14.365-17.209
                                c0-9.667-7.837-17.505-17.505-17.505c-1.288,0-2.54,0.148-3.748,0.412l-0.01-0.045c-19.939,4.34-57.648,25.642-57.648,75.194
                                v190.197C115.814,323.492,123.649,331.328,133.314,331.328z M150.814,192.856h116.42v44.453h-116.42V192.856z"/>
                            <path d="M20.42,377.873c22.687-14.367,52.507-29.75,60.738-29.75c4.17,0,14.228,7.678,20.883,12.759
                                c12.271,9.368,24.96,19.054,39.086,19.054c13.238,0,26.26-8.635,40.046-17.777c9.773-6.479,21.937-14.545,28.636-14.545
                                c6.836,0,18.967,8.41,28.715,15.166c12.88,8.928,25.045,17.36,37.239,17.36c12.228,0,23.551-8.354,35.537-17.198
                                c9.934-7.328,21.193-15.635,29.059-15.635c7.812,0,19.07,8.184,29.004,15.402c12.262,8.912,23.844,17.328,36.406,17.328
                                c20.197,0,59.715-26.233,71.346-34.273c6.043-4.177,7.555-12.461,3.379-18.502c-4.178-6.043-12.463-7.555-18.504-3.377
                                c-20.646,14.273-48.164,29.557-56.221,29.557c-3.918,0-14.059-7.371-20.77-12.248c-13.211-9.602-28.186-20.484-44.641-20.484
                                c-16.615,0-31.615,11.066-44.85,20.83c-6.067,4.478-16.224,11.97-19.748,12.004c-3.888-0.008-15.278-7.904-22.086-12.622
                                c-14.116-9.786-28.714-19.905-43.869-19.905c-14.717,0-29.266,9.646-43.336,18.979c-8.494,5.631-20.126,13.346-25.347,13.346
                                c-5.134,0-15.429-7.859-22.946-13.598c-11.73-8.957-23.861-18.217-37.023-18.217c-19.951,0-62.429,25.932-74.973,33.879
                                c-6.204,3.93-8.046,12.146-4.116,18.351C5.998,379.958,14.215,381.801,20.42,377.873z"/>
                            <path d="M482.494,386.261c-4.178-6.042-12.463-7.555-18.504-3.377c-20.646,14.272-48.164,29.556-56.221,29.556
                                c-3.918,0-14.059-7.37-20.77-12.247c-13.211-9.602-28.186-20.484-44.641-20.484c-16.615,0-31.615,11.066-44.85,20.831
                                c-6.067,4.477-16.224,11.969-19.748,12.003c-3.888-0.007-15.278-7.904-22.086-12.622c-14.116-9.786-28.714-19.905-43.869-19.905
                                c-14.717,0-29.266,9.647-43.336,18.978c-8.494,5.633-20.126,13.347-25.347,13.347c-5.134,0-15.429-7.859-22.946-13.599
                                c-11.73-8.955-23.861-18.216-37.023-18.216c-19.951,0-62.429,25.932-74.973,33.878c-6.204,3.932-8.046,12.146-4.116,18.352
                                c3.93,6.204,12.146,8.048,18.351,4.119c22.687-14.367,52.507-29.75,60.738-29.75c4.17,0,14.228,7.678,20.883,12.759
                                c12.271,9.368,24.96,19.054,39.086,19.054c13.238,0,26.26-8.635,40.046-17.777c9.773-6.479,21.937-14.546,28.636-14.546
                                c6.836,0,18.967,8.41,28.715,15.167c12.88,8.929,25.045,17.36,37.239,17.36c12.229,0,23.551-8.354,35.539-17.198
                                c9.934-7.328,21.191-15.635,29.059-15.635c7.811,0,19.068,8.183,29.004,15.402c12.262,8.912,23.844,17.329,36.406,17.329
                                c20.195,0,59.715-26.234,71.346-34.274C485.158,400.587,486.67,392.302,482.494,386.261z"/>
                        </g>
                    </g>
                    </g>
                    </svg>
                </span>
                    
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
                    width="80px" height="80px" viewBox="0 0 484.854 484.855" style="enable-background:new 0 0 484.854 484.855;"
                    xml:space="preserve">
                    <g>
                    <g id="_x32_3_19_">
                        <g>
                        <path d="M133.314,331.328c9.665,0,17.5-7.836,17.5-17.5v-41.52h116.42v39.131c0,9.665,7.835,17.5,17.5,17.5
                            c9.664,0,17.5-7.835,17.5-17.5V121.241c0-32.836,27.164-40.291,30.262-41.032l-0.17,0.038l-0.002-0.01
                            c7.717-1.827,13.465-8.744,13.465-17.018c0-9.667-7.838-17.505-17.506-17.505c-1.164,0-2.299,0.12-3.398,0.336v-0.002
                            c-0.01,0.002-0.021,0.005-0.031,0.007c-0.182,0.036-0.357,0.086-0.539,0.128c-20.076,4.612-57.079,25.964-57.079,75.058v36.614
                            h-116.42v-34.227c0-31.065,24.301-39.409,29.546-40.847c8.167-1.482,14.365-8.615,14.365-17.209
                            c0-9.667-7.837-17.505-17.505-17.505c-1.288,0-2.54,0.148-3.748,0.412l-0.01-0.045c-19.939,4.34-57.648,25.642-57.648,75.194
                            v190.197C115.814,323.492,123.649,331.328,133.314,331.328z M150.814,192.856h116.42v44.453h-116.42V192.856z"/>
                        <path d="M20.42,377.873c22.687-14.367,52.507-29.75,60.738-29.75c4.17,0,14.228,7.678,20.883,12.759
                            c12.271,9.368,24.96,19.054,39.086,19.054c13.238,0,26.26-8.635,40.046-17.777c9.773-6.479,21.937-14.545,28.636-14.545
                            c6.836,0,18.967,8.41,28.715,15.166c12.88,8.928,25.045,17.36,37.239,17.36c12.228,0,23.551-8.354,35.537-17.198
                            c9.934-7.328,21.193-15.635,29.059-15.635c7.812,0,19.07,8.184,29.004,15.402c12.262,8.912,23.844,17.328,36.406,17.328
                            c20.197,0,59.715-26.233,71.346-34.273c6.043-4.177,7.555-12.461,3.379-18.502c-4.178-6.043-12.463-7.555-18.504-3.377
                            c-20.646,14.273-48.164,29.557-56.221,29.557c-3.918,0-14.059-7.371-20.77-12.248c-13.211-9.602-28.186-20.484-44.641-20.484
                            c-16.615,0-31.615,11.066-44.85,20.83c-6.067,4.478-16.224,11.97-19.748,12.004c-3.888-0.008-15.278-7.904-22.086-12.622
                            c-14.116-9.786-28.714-19.905-43.869-19.905c-14.717,0-29.266,9.646-43.336,18.979c-8.494,5.631-20.126,13.346-25.347,13.346
                            c-5.134,0-15.429-7.859-22.946-13.598c-11.73-8.957-23.861-18.217-37.023-18.217c-19.951,0-62.429,25.932-74.973,33.879
                            c-6.204,3.93-8.046,12.146-4.116,18.351C5.998,379.958,14.215,381.801,20.42,377.873z"/>
                        <path d="M482.494,386.261c-4.178-6.042-12.463-7.555-18.504-3.377c-20.646,14.272-48.164,29.556-56.221,29.556
                            c-3.918,0-14.059-7.37-20.77-12.247c-13.211-9.602-28.186-20.484-44.641-20.484c-16.615,0-31.615,11.066-44.85,20.831
                            c-6.067,4.477-16.224,11.969-19.748,12.003c-3.888-0.007-15.278-7.904-22.086-12.622c-14.116-9.786-28.714-19.905-43.869-19.905
                            c-14.717,0-29.266,9.647-43.336,18.978c-8.494,5.633-20.126,13.347-25.347,13.347c-5.134,0-15.429-7.859-22.946-13.599
                            c-11.73-8.955-23.861-18.216-37.023-18.216c-19.951,0-62.429,25.932-74.973,33.878c-6.204,3.932-8.046,12.146-4.116,18.352
                            c3.93,6.204,12.146,8.048,18.351,4.119c22.687-14.367,52.507-29.75,60.738-29.75c4.17,0,14.228,7.678,20.883,12.759
                            c12.271,9.368,24.96,19.054,39.086,19.054c13.238,0,26.26-8.635,40.046-17.777c9.773-6.479,21.937-14.546,28.636-14.546
                            c6.836,0,18.967,8.41,28.715,15.167c12.88,8.929,25.045,17.36,37.239,17.36c12.229,0,23.551-8.354,35.539-17.198
                            c9.934-7.328,21.191-15.635,29.059-15.635c7.811,0,19.068,8.183,29.004,15.402c12.262,8.912,23.844,17.329,36.406,17.329
                            c20.195,0,59.715-26.234,71.346-34.274C485.158,400.587,486.67,392.302,482.494,386.261z"/>
                    </g>
                </g>
                </g>
                </svg>
            </span>


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
                    <!-- treePath[i][leaf].length == subtree[i][leaf].length -->
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
.level0:hover .level1 {
            display: block;
        }

.Level1:hover .Level2 {
        display: block;
}

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
h1 {
    text-align: center;
    letter-spacing: 5px;
    padding: 2rem;
}

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


