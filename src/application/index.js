let home = document.getElementById('home');
let portfolio = document.getElementById('portfolio');
let portfolioContainer = document.getElementById('portfolio-container')
let conteudo = document.getElementById('conteudo');
let sobre = document.getElementById('sobre');

function toggleOption(id) {
    let option = document.getElementById(id);
    option.classList.toggle("active");
}

function referenciaAdd(id){
    let referencia = '';
    for(let i = 0; id[i] !='-'; i++){
        id[i]!='-'?referencia += id[i]:null;  
    }
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
    let option = document.getElementById(referencia);
    option.classList.remove("active");
    let page = document.getElementById(id);
    page.classList.remove('active');
}

const materials = fetch("../../data/materials.json").then((resposta) => {
    return resposta.json();
  }).then((jsonData) => {
    let materials = jsonData.materials;
    for (let material of materials) {
        /* Construir os elementos */
        const card = document.createElement('div');
        card.className = 'material-card';
        const cardImage = document.createElement('img');
        cardImage.src = material.image;
        const materialInfo = document.createElement('div');
        materialInfo.className = 'material-info';
        const materialName = document.createElement('h3');
        const materialDescription = document.createElement('p');
        const sourceButton = document.createElement('button');
        const githubButton = document.createElement('a');
        /* Aplicar o conteúdo */
        materialName.append(material.name)
        materialDescription.append(material.description);
        sourceButton.addEventListener('click', () => { window.open(material.source, '_blank')});
        sourceButton.append('Visitar')
        githubButton.href = material.github;
        githubButton.target = '_blank'
        githubButton.innerHTML = '<i class="fa-brands fa-github fa-"></i>'
        /* Montar o elemento */
        materialInfo.appendChild(materialName)
        materialInfo.appendChild(materialDescription)
        materialInfo.appendChild(githubButton)
        materialInfo.appendChild(sourceButton)
        /*Inserir o elemento*/
        card.append(materialInfo, cardImage)
        portfolioContainer.append(card);
    }
  })


const showLoadingAnimation = () => {
    

}


const main = () => {

}



