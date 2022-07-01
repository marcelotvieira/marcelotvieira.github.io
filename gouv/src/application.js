const menuItemProjetos = document.getElementById("projetos");

function projetos() {
    const projetos = document.getElementById("header")
    projetos.classList.remove('projetos', 'fundacoes', 'consultoria')
    projetos.classList.add('projetos')
}

menuItemProjetos.addEventListener('mouseover', projetos)
///////

const menuItemFundacoes = document.getElementById("fundacoes");

function fundacoes() {
    const fundacoes = document.getElementById("header")
    fundacoes.classList.remove('projetos', 'fundacoes', 'consultoria')
    fundacoes.classList.add('fundacoes')
}

menuItemFundacoes.addEventListener('mouseover', fundacoes)
///////


const menuItemConsultoria = document.getElementById("consultoria");

function consultoria() {
    const consultoria = document.getElementById("header")
    consultoria.classList.remove('projetos', 'fundacoes', 'consultoria')
    consultoria.classList.add('consultoria')
}


menuItemConsultoria.addEventListener('mouseover', consultoria)

///////


const BtnContato = document.getElementById('contato');

function contato() {
    const menuContato = document.getElementById("contato")
    console.log('rodou')
   
    menuContato.classList.add('active')

}

function contatoRemove(){
    const menuContato = document.getElementById("contato")
    console.log('rodou')
   
    menuContato.classList.remove('active')

}


BtnContato.addEventListener('mouseover', contato);
BtnContato.addEventListener('mouseout', contatoRemove);





const cardPerson = document.getElementById("person1");

function personContactActive(){
    const cardContact = document.getElementById("person1")
    console.log('rodou')
    cardContact.classList.add("active")
}
function personContactNotActive(){
    const cardContact = document.getElementById("person1")
    cardContact.classList.remove("active")
}


cardPerson.addEventListener('mouseover', personContactActive);
cardPerson.addEventListener('mouseout', personContactNotActive);




const cardPerson2 = document.getElementById("person2");

function person2ContactActive(){
    const cardContact = document.getElementById("person2")
    console.log('rodou')
    cardContact.classList.add("active")
}
function person2ContactNotActive(){
    const cardContact = document.getElementById("person2")
    cardContact.classList.remove("active")
}


cardPerson2.addEventListener('mouseover', person2ContactActive);
cardPerson2.addEventListener('mouseout', person2ContactNotActive);

const cardPerson3 = document.getElementById("person3");

function person3ContactActive(){
    const cardContact = document.getElementById("person3")
    console.log('rodou')
    cardContact.classList.add("active")
}
function person3ContactNotActive(){
    const cardContact = document.getElementById("person3")
    cardContact.classList.remove("active")
}


cardPerson3.addEventListener('mouseover', person3ContactActive);
cardPerson3.addEventListener('mouseout', person3ContactNotActive);


const cardPerson4 = document.getElementById("person4");

function person4ContactActive(){
    const cardContact = document.getElementById("person4")
    console.log('rodou')
    cardContact.classList.add("active")
}
function person4ContactNotActive(){
    const cardContact = document.getElementById("person4")
    cardContact.classList.remove("active")
}


cardPerson4.addEventListener('mouseover', person4ContactActive);
cardPerson4.addEventListener('mouseout', person4ContactNotActive);


const cardPerson5 = document.getElementById("person5");

function person5ContactActive(){
    const cardContact = document.getElementById("person5")
    console.log('rodou')
    cardContact.classList.add("active")
}
function person5ContactNotActive(){
    const cardContact = document.getElementById("person5")
    cardContact.classList.remove("active")
}


cardPerson5.addEventListener('mouseover', person5ContactActive);
cardPerson5.addEventListener('mouseout', person5ContactNotActive);