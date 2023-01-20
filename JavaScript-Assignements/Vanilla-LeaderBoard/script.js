// Array to store the information of Players
let playerList = [];

const clear = document.getElementById("result");

function del(name) {
    console.log(name);
    playerList.map((ele) => {
        console.log(ele);
    })
}
// Getting The inputs from the user
function playerInfo() {
    clear.textContent = " ";
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const country = document.getElementById("country").value;
    const score = document.getElementById("score").value;

    const validate = ((fname, lname, country, score) => {
        if(fname.length === 0) {
            alert("First Name Must be enter to Proceed");
            return false;
        }
        if(lname.length === 0) {
            alert("Last Name Must be enter to Proceed");
            return false;
        }
        if(country.length === 0) {
            alert("Country Must be enter to Proceed");
            return false;
        }
        if(score.length === 0) {
            alert("Score Must be enter to Proceed");
            return false;
        }
        return true;
    })

    if(validate(fname, lname, country, score)) {
        playerList.push(
            {
                fname: fname,
                lname: lname,
                country: country,
                score: score
            }
            )
        console.log(playerList);
        playerList.sort(
            (a, b) => (a.score < b.score) ? 1 : (a.score > b.score) ? -1: 0);
    
        console.log(playerList);
        
        for(const element of playerList) {
            const resultSpace = document.getElementById("result");
            const resultDiv = document.createElement("div");
            resultDiv.classList.add("result-data");
            resultDiv.setAttribute("id", fname);
            const name = document.createElement("h4");
            const _country = document.createElement("h4");
            const _score = document.createElement("h4");
            const sub = document.createElement("button")
            const add = document.createElement("button")
            add.innerText = "+5";
            add.setAttribute("id", element.fname);
            add.setAttribute("class", "res")
            sub.innerText = "-5";
            sub.setAttribute("id", element.fname);
            sub.setAttribute("class", "res")
    
            const ops = document.createElement("button");
            ops.setAttribute("class", "res")
            ops.setAttribute("id", element.fname)
            ops.innerHTML = "Del"
            // ops.innerHTML = `<span class="glyphicon glyphicon-trash">`
    
            name.innerText = element.fname + " " + element.lname;
            _score.innerText = element.score;
            _country.innerText = element.country;
    
            resultDiv.appendChild(name);
            resultDiv.appendChild(_country);
            resultDiv.appendChild(_score);
            resultDiv.appendChild(ops);
            resultDiv.appendChild(sub);
            resultDiv.appendChild(add);
    
    
            resultSpace.appendChild(resultDiv);
    
            console.log(resultSpace);
        }
        const buttons = document.getElementsByTagName("button");
        
        const buttonPressed = e => {
          console.log("fasdfasdf", e.target.id);  // Get ID of Clicked Element
          for(let i = 0; i < playerList.length; i++) {
            //   console.log(playerList[i]);
              if(playerList[i].fname === (e.target.id)) {
                  console.log(playerList[i]);
                  playerList.splice(i, 1);
                  document.getElementById(e.target.id).innerHTML = " ";
            }
          }
        }
        
        for (let button of buttons) {
          button.addEventListener("click", buttonPressed);
        }
    }
    else{
        console.log("Validation failed");
    }

}
