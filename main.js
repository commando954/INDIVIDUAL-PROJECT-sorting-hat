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
  </div>`;
  }
renderToDom("#students-list", domString);
document.querySelector("#students-list").addEventListener("click", expelStudent);
};
  const expelledStudents = [];
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

// Voldemort army domString/cards
const voldsArmy = (array) => {
  let domString = "";
  for (const student of array) {
    domString += 
    `<div class="card" style="max-width: 200px" >
      <img src="Flags/the-dark-mark.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text"><b>${student.name}</b> went over to the dark side.</p>
      </div>
    </div>`;
  }
  renderToDom("#expelled-students-list", domString);
};

//Expel student
const expelStudent = (event) => {
  // if the id includes "expel"
  if (event.target.id.includes('expel')) {
    // get that object id off of our target ID
    const [throwAway, studentId] = event.target.id.split('--');
    // Use it to find the index of the object
    const indexOfStudents = students.findIndex(
      (student) => Number(studentId) === student.id
    );

    // splice that object out of the array
    const expelStudents = students.splice(indexOfStudents, 1);

    // push our student into the expelledStudents array
    expelledStudents.push(expelStudents);

    // Render both of our arrays! Retired and regular.
    voldsArmy(expelStudent);
    cardsOnDom(students);
  }
};


const startApp = () => {
    cardsOnDom(students);
  };
  
  startApp();
  