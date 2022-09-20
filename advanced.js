/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */


unitedKingdom = [
    {
        name: "Scotland",
        capital: "Edinburgh",
        population: 5454000,
        touristAttractions: [
            "Stirling Castle",
            "Loch Ness"
        ]
    },
    {
        name: "England",
        capital: "London",
        population: 55980000
    },
    {
        name: "Wales",
        capital: "Swansea",
        population: 3163000,
        touristAttractions: [
            "Snowdonia"
        ]
    },
    {
        name: "Northern Ireland",
        capital: "Belfast",
        population: 1885000,
        touristAttractions: [
            "Titanic Museum",
            "Giant's Causeway"
        ]
    }
]


/**
 * Q1. Add some tourist attractions to England
 */

englandIndex = unitedKingdom.findIndex((value) => value.name === "England");
unitedKingdom[englandIndex].touristAttractions = ["Big Ben","Buckingham Palace","Stone Henge"];
england = unitedKingdom[englandIndex];
//console.log(england);



/**
 * Q2. Change the capital of Wales to "Cardiff"
 */
walesIndex = unitedKingdom.findIndex((value) => value.name === "Wales");
unitedKingdom[walesIndex].capital = "Cardiff";
wales = unitedKingdom[walesIndex];

//console.log(wales);



/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandIndex = unitedKingdom.findIndex((value) => value.name === "Northern Ireland");
northernIrelandKeys = Object.keys(unitedKingdom[northernIrelandIndex]);
//console.log(northernIrelandKeys);



/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

scotlandIndex = unitedKingdom.findIndex((value) => value.name === "Scotland");
scotlandPopulation = unitedKingdom[scotlandIndex].population;
countriesByPopulation = [unitedKingdom[0]];

for (let index = 1; index < unitedKingdom.length; index++) {
    const country = unitedKingdom[index];
    if (country.population > countriesByPopulation[index - 1].population) {
        countriesByPopulation.splice(index - 1,0,country);
    }

}

console.log(countriesByPopulation);