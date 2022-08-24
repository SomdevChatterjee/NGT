const strData = `
{
    "students":[{
        "id":1,
        "first name":"alex",
        "last name":"bayako",
        "grade":"BSc",
        "elective":"Web Development"
    },
    {
        "id":2,
        "first name":"allain",
        "last name":"taylor",
        "grade":"BCom",
        "elective":"Business Studies"
    },{
        "id":3,
        "first name":"amanda",
        "last name":"parmer",
        "grade":"BSc",
        "elective":"Web Design and Cross Platform Development"
    },{
        "id":4,
        "first name":"amanda",
        "last name":"parmer",
        "grade":"BSc",
        "elective":"Web Design and Cross Platform Development"
    },{
        "id":5,
        "first name":"amanda",
        "last name":"parmer",
        "grade":"BSc",
        "elective":"Web Design and Cross Platform Development"
    }]
}
`;
const obj = JSON.parse(strData, (key, value) => {
    return value;
});

const {students} = obj;

// console.log(typeof(students))
let heading = ``;
for(element of students){
    for(key in element){
        heading += `<th>${key}</th>`;
    }
    break;
}
console.log(heading);
let data = ``;
for(element of students){
    data +=`<tr>`;
    for(key in element){
        data += `<td>${element[key]}</td>`;
    }
    data += `</tr>`;
}
//console.log(heading, data);
document.querySelector("#table").innerHTML = `<tr>${heading}</tr>${data}`;
