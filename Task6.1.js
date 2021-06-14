let sports = ["Cricket", "Football", "Basketball", "Badminton", "Table Tennis"]

let studentsSportsInfo = []

let cont = document.getElementById('cont')


let name = `Name: <input type="text" id="name">`
let chkBox = sports.map((sport, index) => {
    return `${sport}<input type="checkbox" value=${sport} name="stdSports" id="${'x' + index}"> `
})

let sbmtBtn = `<button onclick="studentArray()">Submit</button>`
cont.innerHTML = `${name}</br></br>${chkBox.join('')}</br></br>${sbmtBtn}`

function studentArray() {
    let studentInfo = {}
    //Insert Name OF the Student in to the studentinfo
    studentInfo.name = document.getElementById('name').value

    //Add Sports
    sport = []

    let sName = document.getElementsByName('stdSports')

    for (let i = 0; i < sName.length; i++) {
        if (sName[i].checked) {
            // sport[i] = sName[i].value
            sport.push(sName[i].value)
        }
    }
    studentInfo.sports = sport
    studentsSportsInfo.push(studentInfo)
    console.log(sport)
}
