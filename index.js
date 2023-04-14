const ghImage = document.querySelector("#gh-image");
const ghName = document.querySelector("#gh-name");
const ghBio = document.querySelector("#gh-bio");
const ghLocation = document.querySelector("#gh-location");
const ghSite = document.querySelector("#gh-sites");
const ghURL = document.querySelector("#gh-url");
const ghTwiter = document.querySelector("#gh-twiter");

const ghAction = document.querySelector("#gh-action")
const ghInput = document.querySelector("#gh-input");


ghAction.onclick = async () => {
    const username = ghInput.value;
    ghInput.value = "";
    if (username === "") {
        Swal.fire({
            title: "Error",
            text: "Debes llenar el usuario",
            icon: "error"
        })
        return;
    }

    const dato = await obtenerDatosGItHub(username);

    if (dato.name === undefined) {
        Swal.fire({
            title: "Error",
            text: "El usuario no existe",
            icon: "error"
        })
        return;
    }

    Swal.fire({
        title: "Exito",
        text: "Datos encontrados",
        icon: "success"
    })

    setDataUser(data)

}

const obtenerDatosGItHub = async (username) => {
    const response = await fetch("https://api.github.com/users/" + username);
    const data = await response.json();
    setDataUser(data)
}

const setDataUser = (dato) => {
    ghImage.src = dato.avatar_url;
    ghName.innerHTML = dato.name;
    ghBio.innerHTML = dato.bio;
    ghLocation.innerHTML = dato.location;
    ghSite.innerHTML = dato.site_admin;
    ghURL.innerHTML = dato.url;
    ghTwiter.innerHTML = dato.twitter_username;
}