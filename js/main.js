let date = document.getElementById("date");

function calculateAge() {
    let birthDate = new Date(date.value); // date of birth after transformation to date object  
    let today = new Date(); // current date
    let birthYear = birthDate.getFullYear(); // birth year
    let birthMonth = birthDate.getMonth(); // birth month
    let birthDay = birthDate.getDate(); // birth day
    let currentYear = today.getFullYear(); // current year
    let currentMonth = today.getMonth(); // current month
    let currentDay = today.getDate(); // current day

    let ageYears = currentYear - birthYear; //get the user's years of age
    let ageMonth = currentMonth - birthMonth; // get the user's months of age
    let ageDay = currentDay - birthDay; // get the user's days of age

    if (date.value == "") {
        alert("Please select a date");
        return;
    } else if (ageYears < 0 || ageMonth < 0 || ageDay < 0) {
        alert("Please select a valid date not future date");
        return;
    } else if(ageYears == 0 && ageMonth == 0 && ageDay == 0){
        alert("Please select a valid date not current date");
    }else{
        document.getElementById("age").innerHTML = `Your age is <span class="fw-bold">${ageYears}</span> years, <span class="fw-bold">${ageMonth} </span> months, and <span class="fw-bold">${ageDay}</span> days`;
    }
}