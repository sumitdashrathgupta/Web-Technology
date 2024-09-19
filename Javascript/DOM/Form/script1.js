let form = document.getElementsByClassName("form-control")[0];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let data = new FormData(form);
    let finaldata = Object.fromEntries(data);
    let courseRes = data.getAll("course");
    finaldata.course = courseRes;
    console.log(finaldata);
});