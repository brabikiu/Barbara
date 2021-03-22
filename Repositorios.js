let url = "https://api.github.com/"
let usuario = "Brabikiu"
let address = `users/${usuario}/repos`

let request = url + address

function displayRep(repData) {
    let section = document.querySelector("#repositorios")
    
    for ( let repInf of repData ) {
        let project = document.createElement("a")
        project.textContent = repInf.name
        project.href = repInf.link
        project.target = "_blank"
        project.rel = "noopener"
        project.classList.add("project")
        section.appendChild(project)
    }  
};

fetch(request)
.then(res => {
    if (res.ok) {
        return res.json()
    } else {
        throw new Error("code" + res.status)
    }
})
.then(data => {
    let repData = []
    data.forEach(repInf => {
        repData.push({
            name: repInf.name,
            link: repInf.html_url,
           
        })
    })
    displayRep(repData)
})
.catch(err => console.log(err));