const vegitables = [];
const fruit = [];
const nuts = [];
const grains = [];
const dairy = [];
const proteins = [];
const caloriesAbove100 = [];
const caloriesBelow100 = [];
const cab = [];
const proteinitem = [];
const fooditems = [];

function readJsonData() {
    var jsonData = require('./read.json');

    for (const i in jsonData) {
        addCategories(jsonData[i].category,jsonData[i].foodname)

        if(jsonData[i].calorie>100)
        {
            caloriesAbove100[caloriesAbove100.length] = jsonData[i].calorie
               }
        else{
            caloriesBelow100[caloriesBelow100.length] = jsonData[i].calorie
        }
        
        cab[i] = jsonData[i].cab
        proteinitem[i] = jsonData[i].protiens
        fooditems[i] = jsonData[i].foodname

    }
    console.log("list all the food items: \n "+fooditems);
    console.log("\n list all the food items with category vegitables: \n "+vegitables);
    console.log("\n list all the food items with category fruit: \n  "+fruit);
    console.log("\n list all the food items with category dairy \n  "+proteins);
    console.log("\n list all the food items with category nuts: \n  "+nuts);
    console.log("\n list all the food items with category grains: \n  "+grains);
    console.log("\n list all the food items with category dairy: \n  "+dairy);
    console.log("\n list all the food items with calorie above 100: \n  "+caloriesAbove100);
    console.log("\n list all the food items with calorie below 100: \n  "+caloriesBelow100);
    console.log("\n list all the food items with lowest cab content to highest: \n "+cab.sort(function(a, b){return a - b}));
    console.log("\n list all the food items with highest protien content to lowest: \n "+proteinitem.sort(function(a, b){return b - a}));


    return jsonData
}


function addCategories(category,foodname){
    switch(category){
        case 'Fruit':
            fruit[fruit.length] = foodname;
            break;
        case 'Vegetable':
            vegitables[vegitables.length] = foodname;
            break;
        case 'Nuts':
            nuts[nuts.length] = foodname;
            break;
        case 'Grain':
            grains[grains.length] = foodname;
            break;
        case 'Dairy':
            dairy[dairy.length] = foodname;
            break;
            case 'Protein':
                proteins[proteins.length] = foodname;
            break;
            
            
    }
}


readJsonData();