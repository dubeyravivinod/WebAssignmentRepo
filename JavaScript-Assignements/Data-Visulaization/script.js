const totalCountries = document.getElementById("totalCountries")
const len = countries_data.length
totalCountries.innerText = "Total Number of countries: " + len

const sortedArray = countries_data.sort((a, b) => {
    return b.name - a.name;
})

const result = document.getElementsByClassName("result")
sortedArray.map((ele) => {
    const result_data = document.createElement("div")
    result_data.classList.add("results");
        const result_h2 = document.createElement("h2")
        result_h2.innerText = ele.name
        result_data.appendChild(result_h2)
        result[0].appendChild(result_data)
})

const clear = document.getElementsByClassName("result")


function searchBtn() {
    clear[0].innerHTML = ""
    const search_string = document.getElementById("input").value;
    const result = document.getElementsByClassName("result")
    console.log(search_string);
    sortedArray.map((ele) => {
        if(ele.name === search_string) {
            const result_data = document.createElement("div")
            result_data.classList.add("results");
            console.log(result);
            const result_h2 = document.createElement("h2")
            result_h2.innerText = ele.name
            result_data.appendChild(result_h2)
            result[0].appendChild(result_data)
        }
    })
}

function startingWord() {
    clear[0].innerHTML = ""
    const search_string = document.getElementById("input").value;
    const result = document.getElementsByClassName("result")
    sortedArray.map((ele) => {
        const result_data = document.createElement("div")
        result_data.classList.add("results");
        if((ele.name).startsWith(search_string)) {
            const result_h2 = document.createElement("h2")
            result_h2.innerText = ele.name
            result_data.appendChild(result_h2)
            result[0].appendChild(result_data)
        }
    })
}

function searchingWord() {
    clear[0].innerHTML = ""
    const search_string = document.getElementById("input").value;
    const result = document.getElementsByClassName("result")
    console.log(result);

    sortedArray.map((ele) => {
        const result_data = document.createElement("div")
        result_data.classList.add("results");
        if((ele.name).match(search_string)) {
            console.log(ele.name);
            console.log(result_data);
            const result_h2 = document.createElement("h2")
            result_h2.innerText = ele.name
            result_data.appendChild(result_h2)
            result[0].appendChild(result_data)
        }
    })
}
