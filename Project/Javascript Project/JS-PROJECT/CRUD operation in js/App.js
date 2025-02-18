let displayUpdateForm = document.querySelector(".display-form-update");
let containerPopUp = document.querySelector(".popup-form-container");
let cancelBtn = document.querySelector(".fa-x");
let readContainer = document.querySelector(".read-data-container");
let closeReadBtn = document.querySelector(".close-btn-read");

let formAdd = document.querySelector(".form-add-control");
let allId = [];

let updateContainer = document.querySelector(".update-container-form");
let closeBtnUpdate = document.querySelector(".close-btn-update");

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let nameRes = document.getElementById("uName");
let emailRes = document.getElementById("uEmail");
let phoneRes = document.querySelector("#uPhone");
let updateData;

console.log(nameRes, emailRes, phoneRes);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

formAdd.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(formAdd);
  let finalData = Object.fromEntries(data);
  if (
    finalData.id != "" &&
    finalData.name != "" &&
    finalData.email != "" &&
    finalData.phone != "" &&
    allId.includes(finalData.id) == false
  ) {
    window.fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application.json" },
      body: JSON.stringify(finalData),
    });
    window.location.reload();
  }
});

async function fetchData() {
  let data = await window.fetch("http://localhost:3000/users");
  let finalData = await data.json();
  let tbody = document.querySelector("tbody");
  finalData.forEach((v, i) => {
    let { id, name, phone, email } = v;
    allId.push(id);
    tbody.innerHTML += `
    <tr>
       <td>${id}</td>
       <td>${name}</td>
       <td>${phone}</td>
       <td>${email}</td>
       <td>
          <button onclick="handleReadData(event,${id})">Read</button>
          <button onclick="handleUpdate(event,${id})">Update</button>
          <button onclick="handleDelete(event,${id})">Delete</button>
       </td>
    </tr>
    `;
  });
}
fetchData();
displayUpdateForm.addEventListener("click", (e) => {
  containerPopUp.style.display = "block";
});
cancelBtn.onclick = (e) => {
  containerPopUp.style.display = "none";
};

let idReadData = document.querySelector(".id-read");
let nameReadData = document.querySelector(".name-read");
let emailReadData = document.querySelector(".email-read");
let phoneReadData = document.querySelector(".phone-read");

let handleReadData = (e, id) => {
  readContainer.style.display = "block";
  window.fetch(`http://localhost:3000/users/${id}`).then(
    (d) =>
      d.json().then(
        (val) => {
          let { id, name, phone, email } = val;
          idReadData.innerHTML = "ID : " + id;
          nameReadData.innerHTML = "NAME : " + name;
          emailReadData.innerHTML = "EMAIL : " + email;
          phoneReadData.innerHTML = "PHONE : " + phone;
        },
        (e) => console.log(e)
      ),
    (e) => console.log(e)
  );
};

let handleDelete = (e, id) => {
  let confirm = window.confirm(
    "Are you sure? Do you want to delete this data?"
  );
  if (confirm === true) {
    window
      .fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      })
      .then(
        (d) => console.log(d),
        (e) => console.log(e)
      );
  }
};

closeReadBtn.addEventListener("click", (e) => {
  readContainer.style.display = "none";
});

closeBtnUpdate.addEventListener("click", (e) => {
  updateContainer.style.display = "none";
});

//! update fn:

let formIdUpdate;
let handleUpdate = (e, id) => {
  updateContainer.style.display = "block";
  window.fetch(`http://localhost:3000/users/${id}`).then(
    (d) =>
      d.json().then(
        (value) => {
          console.log(value);
          nameRes.value = value.name;
          emailRes.value = value.email;
          phoneRes.value = value.phone;
          updateData = value;
          formIdUpdate = id;
        },
        (e) => console.log("err")
      ),
    (e) => console.log("err")
  );
};

let updateFormData = document.querySelector(".form-update-control");
updateFormData.addEventListener("submit", (e) => {
  e.preventDefault();
  window
    .fetch(`http://localhost:3000/users/${formIdUpdate}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify(Object.fromEntries(new FormData(updateFormData))),
    })
    .then(
      (d) => console.log(d),
      (e) => console.log("err")
    );
});
