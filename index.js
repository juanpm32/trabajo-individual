const obj  = {
    ghImage: document.querySelector("#gh-image"),
    ghName: document.querySelector("#gh-name"),
    ghName1: document.querySelector("#gh-name1"),
    ghBio: document.querySelector("#gh-bio"),
    ghLocation: document.querySelector("#gh-location"),
    ghCompany: document.querySelector("#gh-company"),
    ghURL: document.querySelector("#gh-url"),
    ghTwiter: document.querySelector("#gh-twiter"),
    ghRepository: document.querySelector("#gh-repository"),
    ghFollowers: document.querySelector("#gh-followers"),
    ghFollowing: document.querySelector("#gh-following"),
    ghAction: document.querySelector("#gh-action"),
    ghInput: document.querySelector("#gh-input")
}


obj.ghAction.onclick = async () => {
    const username = obj.ghInput.value;
    obj.ghInput.value = "";
    if (username === "") {
        Swal.fire({
            title: "Error",
            text: "Debes llenar el usuario",
            icon: "error"
        })
        return;
    }
    obtenerDatosGItHub(username)
}

const obtenerDatosGItHub = async (username="juanpm32") => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if(data.message === "Not Found"){
        Swal.fire({
            title:"Error",
            text:"No existe el usuario",
            icon:"error"
        })
      }
    setDataUser(data)
}

const setDataUser = (data) => {
    obj.ghImage.src = data.avatar_url;
    obj.ghName.innerHTML = data.name;
    obj.ghName1.innerHTML = data.name;
    obj.ghBio.innerHTML = data.bio;
    obj.ghLocation.innerHTML = data.location;
    obj.ghCompany.innerHTML = data.company;
    obj.ghURL.innerHTML = data.url;
    obj.ghTwiter.innerHTML = data.twitter_username;
    obj.ghRepository.innerHTML = data.public_repos;
    obj.ghFollowers.innerHTML = data.followers;
    obj.ghFollowing.innerHTML = data.following;
}

obtenerDatosGItHub();