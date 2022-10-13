const toolList = ["trapano", "cacciavite", "martello", "brugole", "chiodi"]

let userTool = prompt("Inserisci lo strumento che ti serve");

console.log(toolList, userTool);

let i = 0;
let isFound = false;
      
while (i < toolList.length && isFound === false) {
    if (userTool === toolList[i]) { 
        isFound = true; 
    }
    console.log(toolList[i], isFound);
    i++;
}
