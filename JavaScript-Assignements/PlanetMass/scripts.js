const Planets = [
    {PlanetName: "Mercury", gravity: 0.378},
    {PlanetName: "Venus", gravity: 0.907},
    {PlanetName: "Earth", gravity: 1 },
    {PlanetName: "Mars", gravity: 0.377 },
    {PlanetName: "Jupiter", gravity: 2.36},
    {PlanetName: "Saturn", gravity: 0.916 },
    {PlanetName: "Uranus", gravity: 0.889 },
    {PlanetName: "Neptune", gravity: 1.12 },
]

// List of Images in an PlanetImages array
var PlanetImages = [];
PlanetImages[0] = "https://media.istockphoto.com/id/499771042/photo/mercury-in-colour.jpg?s=612x612&w=0&k=20&c=1BerGIwehIUaWi7YfD6e_-TM8oFbFPvUwhTZ04O3e-Q="

PlanetImages[1] = "https://media.istockphoto.com/id/1199281415/photo/planet-venus.jpg?b=1&s=170667a&w=0&k=20&c=v8p6GbTt2FrOmWeUL9pARKFrdEc7LBY2Gfnr1Y0MzlM="

PlanetImages[2] = "https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?cs=srgb&dl=pexels-pixabay-87651.jpg&fm=jpg"

PlanetImages[3] = "https://imageio.forbes.com/blogs-images/brucedorminey/files/2018/04/OSIRIS_Mars_true_color-1200x1200.jpg?format=jpg&width=1200"

PlanetImages[4] = "https://wallpaperaccess.com/full/223952.jpg"

PlanetImages[5] = "https://media.istockphoto.com/id/480019224/photo/saturn.jpg?s=612x612&w=0&k=20&c=v87XpxkyKNXGJVcQ_m3wWYihAUGNK1bvadEWkhccGdk="

PlanetImages[6] = "https://media.istockphoto.com/id/1199283538/photo/planet-uranus.jpg?s=612x612&w=0&k=20&c=ywhCXwqp1G17DDGvSN4FoFHcBr24W__TjulMRju4ZWk="

PlanetImages[7] = "https://media.istockphoto.com/id/533260861/photo/abstract-neptune-planet-generated-texture-background.jpg?s=612x612&w=0&k=20&c=Bt3Q8miiVcUhG74AJ-WL74IPMlaf_7HK_AVLFdZEq1U="


Planets.forEach((planet) => {
    let choice = document.createElement("option");
    choice.innerHTML = planet.PlanetName;
    choice.value = planet.gravity

    // console.log(choice)

    let options = document.getElementById("selectPlanet");
    options.appendChild(choice);
})

function calculate() {
    let mass = +document.getElementById("input-mass").value;

    let selectedPlanet = document.getElementById("selectPlanet");
    let selectedIndex = selectedPlanet.selectedIndex;

    let selectGravity = selectedPlanet.options[selectedIndex];
    let planetImage = PlanetImages[selectedIndex];

    let planetGravity = +selectGravity.value;

    let gravity = mass * planetGravity;

    let result = document.getElementById("result");

    if(mass <= 0) {
        result.innerText = "Please enter the mass greater than 0";
    }
    else {
        result.innerText = `Your calculated weight is: ${gravity}`;
        var img = document.getElementById("planet");
        img.src = planetImage;
    }
}