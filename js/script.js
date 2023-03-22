//Creare l’array di oggetti con le informazioni fornite. COMPLETED

//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto COMPLETED

//Stampare le stesse informazioni su DOM sottoforma di stringhe

//Trasformare la stringa foto in una immagine effettiva

//Organizzare i singoli membri in card/schede

let rowBox = document.querySelector('.row');

const teamArr =

    [

        {
            'userName': 'Wayne',
            'surname': 'Barnett',
            'role': 'Founder & CEO',
            'img': 'wayne-barnett-founder-ceo.jpg'
        },

        {
            'userName': 'Angela',
            'surname': 'Caroll',
            'role': 'Chief Editor',
            'img': 'angela-caroll-chief-editor.jpg'
        },

        {
            'userName': 'Walter',
            'surname': 'Gordon',
            'role': 'Office Manager',
            'img': 'walter-gordon-office-manager.jpg'
        },

        {
            'userName': 'Angela',
            'surname': 'Lopez',
            'role': 'Social Media Manager',
            'img': 'angela-lopez-social-media-manager.jpg'
        },

        {
            'userName': 'Scott',
            'surname': 'Estrada',
            'role': 'Developer',
            'img': 'scott-estrada-developer.jpg'
        },

        {
            'userName': 'Barbara',
            'surname': 'Ramos',
            'role': 'Graphic Designer',
            'img': 'barbara-ramos-graphic-designer.jpg'
        }

    ]



//Used this cycle to create a variable to take a property inside of an object that is inside of an array. (Didn't understand the key method)
for (let i = 0; i < teamArr.length; i++) {
    let userNameBox = teamArr[i].userName;
    let surnameBox = teamArr[i].surname;
    let roleBox = teamArr[i].role;
    let imageBox = teamArr[i].img;


    rowBox.innerHTML += 
    `
    <div class="col-4">
        <div class="card">
            <img src="./img/${imageBox}" alt="${i}">
            <div class="card-body text-center">
                <h5 class="name">${userNameBox +" "+ surnameBox}</h5>
                <p class="role fst-italic">${roleBox}</p>
            </div>
        </div>
    </div>
    `
}





    