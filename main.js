const students = [
  {
    id: 1,
    name: "Pelagia",
    house: "Slytherin",
    imageUrl: "Flags/SL.jpg"
  },
  {
    id: 2,
    name: "Melcha",
    house: "Ravenclaw",
    imageUrl: "Flags/RC.jpg"
  },
  {
    id: 3,
    name: "Désiré",
    house: "Gryffindor",
    imageUrl: "Flags/GD.jpg"
  },
  {
    id: 4,
    name: "Sabahudin",
    house: "Gryffindor",
    imageUrl: "Flags/GD.jpg"
  },
  {
    id: 5,
    name: "Leontios",
    house: "Hufflepuff",
    imageUrl: "Flags/HP.jpg"
  },
  {
    id: 6,
    name: "Santino",
    house: "Ravenclaw",
    imageUrl: "Flags/RC.jpg"
  },
  {
    id: 7,
    name: "Svetoslav",
    house: "Hufflepuff",
    imageUrl: "Flags/HP.jpg"
  },
  {
    id: 8,
    name: "Bohdana",
    house: "Slytherin",
    imageUrl: "Flags/SL.jpg"
  },
  {
    id: 9,
    name: "Cyneheard",
    house: "Gryffindor",
    imageUrl: "Flags/GD.jpg"
  },
  {
    id: 10,
    name: "Shion",
    house: "Slytherin",
    imageUrl: "Flags/SL.jpg"
  },
  {
    id: 11,
    name: "Mart",
    house: "Ravenclaw",
    imageUrl: "Flags/RC.jpg"
  },
  {
    id: 12,
    name: "Suzette",
    house: "Hufflepuff",
    imageUrl: "Flags/HP.jpg"
  },
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (array) => {
  let domString = ""
  for (const student of array) {
    domString +=
    `<div class="card" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${student.imageUrl}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text house-${student.house}">${student.house}</p>
          <button class="btn btn-danger" id="expel--${student.id}">Expel</button>
        </div>
      </div>
    </div>
  </div>`
  }
renderToDom("#students-list", domString);
}

  const filter = (students, houseString) => {
    const studentsArray = [];

    for (const student of students) {
      if (student.house === houseString) {
        studentsArray.push(student);
      }
    }
    return studentsArray;
  }

  const allButton = document.querySelector("#all-btn");
  const gryffindorButton = document.querySelector("#Gryffindor-btn");
  const hufflepuffButton = document.querySelector("#Hufflepuff-btn");
  const ravenclawButton = document.querySelector("#Ravenclaw-btn");
  const slytherinButton = document.querySelector("#Slytherin-btn");

  allButton.addEventListener('click', () => {
    cardsOnDom(students)
  });

  gryffindorButton.addEventListener('click', () => {
    const allGryfindor = filter(students, 'Gryffindor');
    cardsOnDom(allGryfindor);
  });

  hufflepuffButton.addEventListener('click', () => {
    const allHufflepuff = filter(students, 'Hufflepuff');
    cardsOnDom(allHufflepuff);
  });

  ravenclawButton.addEventListener('click', () => {
    const allRavenclaw = filter(students, 'Ravenclaw');
    cardsOnDom(allRavenclaw);
  });

  slytherinButton.addEventListener('click', () => {
    const allSlytherin = filter(students, 'Slytherin');
    cardsOnDom(allSlytherin);
  });

  /* create new student
  const createStudent = (event) => {
    event.preventDefault();
  
  const name = document.querySelector('#name');
  // const house = document.querySelector('#house');
  // const imageUrl = document.querySelector('#imageUrl');


  const newStudent = {
    name: name.value
    //house: house.value,
    //imageUrl: imageUrl.value
  };

  students.push(newStudent);
  cardsOnDom(students);
}; 
const submitButton = document.querySelector("#form-button");
submitButton.addEventListener('click', createStudent);

   const studentSorting = Math.floor((Math.random() * 5) + 1);
    //let gryffindor = 1;
    //let hufflepuff = 2;
    //let ravenclaw = 3;
    //let slytherin = 4; 
    if (studentSorting === 1) {
      ${students.house} = 'Gryffindor';
    } else if (studentSorting === 2) {
      ${students.house} = 'Hufflepuff';
    } else if (studentSorting === 3) {
      ${students.house} = 'Ravenclaw';
    } else if (studentSorting === 4) {
      ${students.house} = 'Slytherin';
    } else {
      return console.log("error");
    } 
    return studentSorting;
*/
  const createStudent = (event) => {
    event.preventDefault();

  const sortButton = document.querySelector('#form-button');
  sortButton.addEventListener('click', () => {
    const nameImput = document.querySelector('#name');
    const newStudent = {
      name: nameImput.value,

    };
    students.push(newStudent);
    cardsOnDom(students)
  }
  )
  }
  

//Expel student
const studentDiv = document.querySelector('#students-list');

studentDiv.addEventListener('click', (event) => {
  if(event.target.id.includes('expel')) {
    const [throwAway, studentId] = event.target.id.split('--');
    const indexOfStudents = students.findIndex(
      (obj) => obj.id === Number(studentId)
    );
    students.splice(indexOfStudents, 1);
  }

  cardsOnDom(students);
});


const startApp = () => {
    cardsOnDom(students);
  }
  
  startApp();
  