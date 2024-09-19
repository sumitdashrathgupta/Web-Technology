let form = document.getElementsByClassName("form-control")[0];
let username = document.querySelector("#username")
let password = document.querySelector("#password")
let percentage = document.querySelector("#percentage")
let email = document.querySelector("#email")
let DOB = document.getElementById("DOB")
let gender = document.getElementsByName("gender")

let genderRes;
let courses = document.getElementsByName("courses")
let courseRes = []

percentage.addEventListener('input', (e) => {
    document.querySelector(".display.percentage").innerHTML = percentage.value;
});


// change
percentage.addEventListener('change', (e) => {
    document.querySelector(".display.percentage").innerHTML = percentage.value;
});

form.addEventListener('submit', (e) => {
    // console.log(e);
    e.preventDefault();
    // console.log(username.value);
    // console.log(password.value);
    // console.log(percentage.value);
    // console.log(email.value);
    // console.log(DOB.value);


    Array.from(gender).forEach((v) => {
        if (v.checked) genderRes = v.value;
    });

    [...courses].map((v) => {
        if (v.checked) courseRes.push(v.value);
    });

    let obj = {
        username: username.value,
        password: password.value,
        percentage: percentage.value,
        email: email.value,
        DOB: DOB.value,
        gender: gender.value,
        courses: courses.value,
    }
    console.log(obj);
});




