// This is a data structure
// [] = array
// {} = object
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

// Render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
const form = document.querySelector("form")

const showStudentEntryForm = (event) => {
  event.preventDefault()
  const domString =
  `<h2 class="center" id="Enter-first-name-text"><b>Enter First Year's Name</b></h2>
  <div id="enter-name">
    <form>
      <div class="info-input">
        <label for="exampleInputName">Student: </label>
        <input type="text" class="placeholder-box" id="studentName" placeholder="William Triggs">
        <button type="submit" id="form-button">Sort!</button> 
      </div>
    </form>
  </div>`
  renderToDom('#forms', domString);

  document
    .querySelector('#form-button')
    .addEventListener('click', createStudent);
};

document.querySelector('#start-button').addEventListener('click', showStudentEntryForm);

const cardsOnDom = (array) => {
  let domString = ""
  for (const student of array) {
    domString +=
    `<div class="card" style="max-width: 350px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${student.imageUrl}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"><b>${student.name}</b></h5>
          <p class="card-text house-${student.house}">${student.house}</p>
          <button class="btn btn-danger expelBtn" id="expel--${student.id}">Expel</button>
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


  //create new student


  const createStudent = (event) => {
    event.preventDefault();

  const randNum = Math.floor((Math.random() * 4) + 1);
    const studentSorting = students[randNum];
    const newStudent = {
      id: students.length + 2,
      name: document.querySelector('#studentName').value,
      house: studentSorting.house,
      imageUrl: studentSorting.imageUrl
    };

  students.push(newStudent);
  cardsOnDom(students);
  document.querySelector('#studentName').value = '';
};

/*
const listOfHouses = ['Gryffindor', 'Hufflepuff', 'Slytherin', 'Ravenclaw'];
const housedStudents = [];
const expelledStudents = [];

let studentCounter = 13;
const name = document.querySelector('#studentName');

  const createStudent = (event) => {
    event.preventDefault();
    const nameImput = studentName.value;
    const newStudent = {
      name: nameImput,
      house: listOfHouses[Math.floor(Math.random()*listOfHouses.length)],
      id: `student${studentCounter}`,
    };
  if (newStudent.house === 'Gryffindor') {
    newStudent.flag = 'Flags/GD.jpg';
  } else if (newStudent.house === 'Hufflepuff') {
    newStudent.flag = 'Flags/HP.jpg';
  } else if (newStudent.house === 'Ravenclaw') {
    newStudent.flag = 'Flags/RC.jpg';
  } else {
    newStudent.flag = 'Flags/SL.jpg';
  };
  housedStudents.push(newStudent);
  studentCounter++;
  renderToDom('students-list', nameImput);
  cardsOnDom(housedStudents, 'students-list');
  addDeleteEvents();
};

const expelFunction = (event) => {
  const buttonId = event.target.id;
  housedStudents.forEach((student, index) => {
    if (student.id === buttonId) {
      student.flag = 'Flags/the-dark-mark.jpg';
      expelledStudents.push(student);
      housedStudents.splice(index, 1);
      student.house = 'VoldArmy';
    };
  });
  cardsOnDom(housedStudents, 'students-list');
  cardsOnDom(expelledStudents, 'expelled-students-list');
  addDeleteEvents();
}




const addDeleteEvents = () => {
  const expelButton = document.querySelector('.expelBtn');
  for (let i = 0; i < expelButton.length; i++) {
    expelButton[i].addEventListener('click', expelFunction)
  }
}
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
*/

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
  };
  
  startApp();
  