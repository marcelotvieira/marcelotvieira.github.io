let home = document.getElementById('home');
let portfolio = document.getElementById('portfolio');
let portfolioContainer = document.getElementById('portfolio-container')
let conteudo = document.getElementById('conteudo');
let sobre = document.getElementById('sobre');

function toggleOption(id) {
    let option = document.getElementById(id);
    option.classList.toggle("active");
    console.log(id)
}

function referenciaAdd(id){
    let referencia = '';
    for(let i = 0; id[i] !='-'; i++){

        id[i]!='-'?referencia += id[i]:null;  

    }
    console.log(referencia)
    let option = document.getElementById(referencia);
    option.classList.add("active");
    let page = document.getElementById(id);
    page.classList.add('active');
}

function referenciaRemove(id){
    let referencia = '';
    for(let i = 0; id[i] !='-'; i++){

        id[i]!='-'?referencia += id[i]:null;  

    }
    console.log(referencia)
    let option = document.getElementById(referencia);
    option.classList.remove("active");
    let page = document.getElementById(id);
    page.classList.remove('active');
}




    const materials = fetch("../../data/materials.json")
  .then((resposta) => {
    return resposta.json();
  })
  .then((jsonData) => {
    let materials = jsonData.materials;
    for (let material of materials) {
        const card = document.createElement('div');
        card.className = 'material-card';
        const cardImage = document.createElement('img');
        cardImage.src = material.image;

        const materialInfo = document.createElement('div');
        materialInfo.className = 'material-info';
        const materialName = document.createElement('h3');
        materialName.append(material.name)
        const materialDescription = document.createElement('p');
        materialDescription.append(material.description);
        
        const sourceButton = document.createElement('button');
        sourceButton.addEventListener('click', () => {
            window.open(material.source, '_blank');
        });
        
        sourceButton.append('Visitar')
        const githubButton = document.createElement('a');
        githubButton.href = material.github;
        githubButton.target = '_blank'
        githubButton.innerHTML = '<i class="fa-brands fa-github fa-"></i>'
        
        materialInfo.appendChild(materialName)
        materialInfo.appendChild(materialDescription)
        materialInfo.appendChild(githubButton)
        materialInfo.appendChild(sourceButton)
        


        card.append(materialInfo, cardImage)
        portfolioContainer.append(card);

    }

  })




