//! fetch product data:

let articleDisplayProducts = document.querySelector(".sub-products");

let fetchData = async () => {
  try {
    let d = await window.fetch("http://localhost:3000/products");
    let fD = await d.json();
    fD.map((v, i) => {
      let { id, title, description, rating, price, thumbnail } = v;
      let div = document.createElement("div");
      div.classList.add("div-container-products");
      div.innerHTML = `
       <figure>
          <img src=${thumbnail} alt=${id} />
       </figure>
       <aside class="aa1">
          <h3>${title.slice(0, 25) + "...."}</h3>
          <p>${description.slice(0, 50) + "..."}</p>
       </aside>
       <aside class="aa2">
          <p>price : ₹${price}</p>
          <p>★${rating}</p>
       </aside>
       <aside class="aa3">
         <button onclick="handleClickCart(event,${id})">Add To Cart</button>
       </aside>
      `;
      articleDisplayProducts.appendChild(div);
    });
  } catch (error) {
    console.log("err");
  }
};
fetchData();

//! display-login form:

let btnLogIn = document.querySelector(".btn-log-in");
let btnSignUp = document.querySelector(".btn-sign-up");
let signUpForm = document.querySelector(".sign-up-form");
let logInForm = document.querySelector(".log-in-form");

btnLogIn.addEventListener("click", (e) => {
  logInForm.style.display = "flex";
  signUpForm.style.display = "none";
});

btnSignUp.addEventListener("click", (e) => {
  logInForm.style.display = "none";
  signUpForm.style.display = "flex";
});

//! store the sign-up form data:

signUpForm.addEventListener("submit", fetchDataFn);

function fetchDataFn(e) {
  e.preventDefault();
  let formDataMain = Object.fromEntries(new FormData(signUpForm));
  console.log(formDataMain);
  if (formDataMain.password == formDataMain.confirmPassword) {
    Swal.fire({
      title: "Account Created Successfully",
      text: "",
      icon: "success",
      showConfirmButton: true,
      timer: 5000,
    });
    setTimeout(() => {
      window.fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataMain),
      });
    }, 2000);
  } else {
    Swal.fire({
      title: "password and confirm password doesn't match",
      text: "",
      icon: "warning",
      showConfirmButton: false,
      timer: 3000,
    });
  }
}

//! log-in data :

let displayNameA = document.querySelector(".display-name");
const ul = document.querySelector(".ul");

logInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let formDataNew = Object.fromEntries(new FormData(logInForm));
  console.log(formDataNew);
  let d = await window.fetch("http://localhost:3000/users");
  let fD = await d.json();
  let res = fD.some((v, i) => {
    return (
      v.username == formDataNew.username && v.password == formDataNew.password
    );
  });
  if (res) {
    Swal.fire({
      icon: "success",
      title: "Successfully Logged In",
      timer: 3000,
      showConfirmButton: false,
      text: `welcome ${formDataNew.username}, to E-commerce website`,
    });
    window.scrollTo(0, 0);
    displayNameA.innerHTML = formDataNew.username;
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.innerHTML = "Log Out";
    a.href = "#log-out";
    li.appendChild(a);
    ul.appendChild(li);
    a.addEventListener("click", (e) => {
      displayNameA.innerHTML = "Sign Up";
      ul.removeChild(li);
      window.location.reload();
    });
  } else {
    Swal.fire({
      icon: "warning",
      title: "Username and password doesn't match",
      text: "",
      showConfirmButton: false,
      timer: 3000,
    });
    window.scrollTo(0, 0);
  }
});

//! cart-button and cart details:

let cartShowBtn = document.querySelector(".fa-cart-shopping");
let cartContainer = document.querySelector(".cart-container");
let closeBtn = document.querySelector(".fa-x");

cartShowBtn.addEventListener("click", (e) => {
  cartContainer.style.display = "block";
});

closeBtn.addEventListener("click", (e) => {
  cartContainer.style.display = "none";
});

let handleClickCart = async (event, id) => {
  let d = await window.fetch(`http://localhost:3000/products/${id}`);
  let fD = await d.json();
  console.log(fD);
};
