var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

function nameOutput(students) {
  for (var i = 0; i < 1; i++) {
    console.log(students[i].first_name + " " + students[i].last_name);
    console.log(students[i + 1].first_name + " " + students[i + 1].last_name);
    console.log(students[i + 2].first_name + " " + students[i + 2].last_name);
    console.log(students[i + 3].first_name + " " + students[i + 3].last_name);
  }

}

////////////////////

// var users = {
//  'Students': [
//      {first_name:  'Michael', last_name : 'Jordan'},
//      {first_name : 'John', last_name : 'Rosales'},
//      {first_name : 'Mark', last_name : 'Guillen'},
//      {first_name : 'KB', last_name : 'Tonel'}
//   ],
//  'Instructors': [
//      {first_name : 'Michael', last_name : 'Choi'},
//      {first_name : 'Martin', last_name : 'Puryear'}
//   ]
//  }
//
// function usersOutput(users) {
//   for (var i = 0; i < 1; i++) {
//     console.log("Students");
//     console.log(users.Students[0].first_name + " " + users.Students[0].first_name);
//     console.log(users.Students[i + 1].first_name + " " + users.Students[i + 1].first_name);
//     console.log(users.Students[i + 2].first_name + " " + users.Students[i + 2].first_name);
//     console.log(users.Students[i + 3].first_name + " " + users.Students[i + 3].first_name);
//     console.log("Instructors");
//     console.log(users.Instructors[0].first_name + " " + users.Instructors[0].first_name);
//     console.log(users.Instructors[i + 1].first_name + " " + users.Instructors[i + 1].first_name);
//   }
//
// }
