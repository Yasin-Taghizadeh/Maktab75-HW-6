
user = {
 id:6,
 name : "Hossein",
 lastName : "Zenderoh",
 roles : ["student","admin"],
 age :19,
 scores : {
     english : 10,
     math : 19.5,
     physics : 14
 },
}
//Add a new scores
function addCourse(course) {
    const newCourse = {...user,scores :course}
    return newCourse
}
//console.log(addCourse({english :12}));

//Add a new role
function addRole(roles,age,status) {
    let newRole = {...user,roles :roles,age :age}
    if (newRole.age < 18){
         newRole = {...user,status :status}
    }
    return newRole
}
//console.log(addRole(['teacher'],17,'very young'))

let arrUser = Object.keys(user).map(keys => {
    return user[keys]
})
arrUser=arrUser.concat([{fatherName: "ali"}])

arrUser={...arrUser}
console.log(arrUser)