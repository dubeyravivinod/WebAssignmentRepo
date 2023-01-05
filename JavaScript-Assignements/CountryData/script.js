const subHeading = document.getElementById("subheading")
subHeading.innerText = `Currently we have ${countries_data.length} countries`

const graphTitle = document.getElementById("graphTitle")

const sortedData = countries_data.sort(function (a, b) {
    return b.population - a.population
})

let totalPopulation = 0
for(let i=0; i<countries_data.length; i++){
    totalPopulation += countries_data[i].population
}

const clear = document.getElementById("graph")
document.getElementById("populationButton").addEventListener("load", buttonOneClicked());

function buttonOneClicked() {
    clear.innerHTML = " "
    graphTitle.innerText = "10 Most populated countries in the world"
    // window.onload();

    for(let i=0; i<10; i++){
        const oneDiv = document.createElement("div")
        oneDiv.style.display = "flex"
        oneDiv.style.height = "fit-content"
        oneDiv.style.alignItems = "center"
        oneDiv.style.justifyContent = "center"

        const countryName = document.createElement("p")
        countryName.innerText = sortedData[i].name
        countryName.style.width = "20%"
        oneDiv.appendChild(countryName)


        const percentDiv = document.createElement("div")
        const percentageDiv = document.createElement("div")
        const percentage = (sortedData[i].population/totalPopulation)*100
        percentageDiv.style.width = `${percentage}%`
        percentageDiv.style.backgroundColor = "orange"
        percentageDiv.style.height = "fit-content"
        percentageDiv.style.margin = "3px"
        percentageDiv.style.textAlign = "start"
        
        percentageDiv.innerText = `${percentage.toFixed(1)}%`

        percentDiv.appendChild(percentageDiv)
        percentDiv.style.width = "30%"
        oneDiv.appendChild(percentDiv)
        
        const populationDiv = document.createElement("div")
        populationDiv.innerText = sortedData[i].population
        oneDiv.appendChild(populationDiv)
        
        const graphDiv = document.getElementById("graph")
        graphDiv.appendChild(oneDiv)
    }
}

function buttonTwoClicked() {
    clear.innerHTML = " "

    graphTitle.innerText = "10 Most Spoken Languages in the world"

    let languagesArray = []
    for(let i = 0; i < countries_data.length; i++) {
        languagesArray.push(countries_data[i].languages);
    }

    // Flatting the nested array
    languagesArray = languagesArray.flat();

    // HashMap to get the Key and Value
    const languageObject = {}
    languagesArray.map((ele) => {

        languageObject[ele] = (languageObject[ele] || 0) + 1

    })

    const countArr = Object.entries(languageObject)

    const sortedLanguage = countArr.sort( function (a, b) {
        return b[1] - a[1];
    });

    // Taking the Top 10 Languages
    for(let i = 0; i < 10; i++) {
        const topTenValuesFromSortedArray = sortedLanguage[i];
        console.log(topTenValuesFromSortedArray)
        const oneDiv = document.createElement("div")
        oneDiv.style.display = "flex"
        oneDiv.style.height = "fit-content"
        oneDiv.style.alignItems = "center"
        oneDiv.style.justifyContent = "center"

        const countryName = document.createElement("p")
        countryName.innerText = topTenValuesFromSortedArray[0]
        countryName.style.width = "20%"
        oneDiv.appendChild(countryName)


        const percentDiv = document.createElement("div")
        const percentageDiv = document.createElement("div")
        const percentage = (topTenValuesFromSortedArray[1]/sortedLanguage.length)*100
        percentageDiv.style.width = `${percentage}%`
        percentageDiv.style.backgroundColor = "orange"
        percentageDiv.style.height = "fit-content"
        percentageDiv.style.margin = "3px"
        percentageDiv.style.textAlign = "start"
        
        percentageDiv.innerText = `${percentage.toFixed(2)}%`

        percentDiv.appendChild(percentageDiv)
        percentDiv.style.width = "30%"
        oneDiv.appendChild(percentDiv)
        
        const populationDiv = document.createElement("div")
        populationDiv.innerText = topTenValuesFromSortedArray[1]
        oneDiv.appendChild(populationDiv)
        
        const graphDiv = document.getElementById("graph")
        graphDiv.appendChild(oneDiv)
    }



}