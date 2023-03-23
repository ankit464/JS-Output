// function store() {
//   let myarr = [];
//   var fname = document.getElementById("fname");
//   localStorage.setItem("firstname", fname.value);

//   var lname = document.getElementById("lname");
//   localStorage.setItem("lastname", lname.value);

//   var country = document.getElementById("country");
//   localStorage.setItem("country", country.value);

//   var subject = document.getElementById("subject");
//   localStorage.setItem("subject", subject.value);

//   const myObject = {
//     fname: fname,
//     lname: lname,
//     country: country,
//     subject: subject,
//   };
//   myarr.push(myObject);

//   window.localStorage.setItem("records", myarr);
//   let newObject = window.localStorage.getItem("myarr");
//   console.log(JSON.parse(myarr));
// }

let user_record = (function () {
  let record = localStorage.getItem("user_record");
  if (record === null) {
    localStorage.setItem("user_record", "[]");
    return [];
  }
  return JSON.parse(record);
})();

const form = document.querySelector("#data-form");
const submit = document.querySelector("#sbmt");
const show_btn = document.querySelector("#showbtn");
const show_data = document.querySelector(".show");
const hideDetailsBtn = document.querySelector("#hidebtn");
const clearBtn = document.querySelector("#clearbtn");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const formdata = new FormData(form);
  const values = [...formdata.entries()];
  console.log(values);
  const val = Object.fromEntries(values);
  user_record.push(val);
  console.log(user_record);

  localStorage.setItem("user_record", JSON.stringify(user_record));
});

// show_btn.addEventListener("click", () => {
//   // let record = JSON.parse(localStorage.getItem("user_record"));
//   // if (record === null || record.length === 0) {
//   //   alert("no record found ");
//   // } else {
//   //   console.log("No of users :" + record.length);
//   //   show_data.innerHTML = "<h1>  All user data </h1>";
//   //   show_data.classList.remove("hide");
//   //   // record.forEach((user, idx) => {
//   //   //   show_data.innerHTML += '<p class="user"> User ${idx+1}</p>';
//   //   //   for (const field in user) {
//   //   //     show_data.innerHTML += `<p class="entry"><span class="entry-title">${field.toUpperCase()} :</span> ${user[
//   //   //       field
//   //   //     ].toUpperCase()}</p>`;
//   //   //   }
//   //   // });
//   //   record.forEach((user, idx) => {
//   //     show_data.innerHTML += `<p class="user">USER ${idx + 1}</p>`;

//   //     for (const field in user) {
//   //       show_data.innerHTML += `<p class="entry"><span class="entry-title">${field.toUpperCase()} :</span> ${
//   //         user[field]
//   //       }</p>`;
//   //     }
//   //   });
//   // }

//   let users = JSON.parse(localStorage.getItem("user_record"));

//   if (users === null || users.length === 0) {
//     alert("No Users in Database!");
//   } else {
//     console.log("Number of users = " + users.length);

//     show_data.innerHTML = '<h3 id="data-title">USER DETAILS</h3>';
//     show_data.classList.remove("hide");
//     console.log(users);
//     users.forEach((user, idx) => {
//       show_data.innerHTML += `<p class="user">USER ${idx + 1}</p>`;

//       for (const field in user) {
//         show_data.innerHTML += `<p class="entry"><span class="entry-title">${field.toUpperCase()} :</span> ${
//           user[field]
//         }</p>`;
//       }
//     });
//   }
// });
show_btn.addEventListener("click", () => {
  displaydata();
});

function displaydata() {
  console.log("daf");
  let users = JSON.parse(localStorage.getItem("user_record"));

  if (users === null || users.length === 0) {
    alert("No Users in Database!");
  } else {
    console.log("Number of users = " + users.length);

    show_data.innerHTML = '<h3 id="data-title">USER DETAILS</h3>';
    show_data.classList.remove("hide");
    console.log(users);
    users.forEach((user, idx) => {
      show_data.innerHTML += `<p class="user">USER ${idx + 1}</p>`;

      for (const field in user) {
        show_data.innerHTML += `<p class="entry"><span class="entry-title">${field.toUpperCase()} :</span> ${
          user[field]
        }</p>`;
      }
    });
  }
}
hideDetailsBtn.addEventListener("click", () => {
  show_data.classList.add("hide");
});
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
const fname = document.getElementById("#fname");
const error = document.getElementById("#firstnameerror");

fname.onblur = function () {
  if (fname.innerHTML == " ") {
    error.innerHTML = "Please enter the first name";
  }
};
fname.onfocus = function () {
  error.innerHTML = " ";
};

// input.onblur = function () {
//   if (!input.value.includes("@")) {
//     // not email
//     input.classList.add("invalid");
//     error.innerHTML = "Please enter a correct email.";
//   }
// };

// input.onfocus = function () {
//   if (this.classList.contains("invalid")) {
//     // remove the "error" indication, because the user wants to re-enter something
//     this.classList.remove("invalid");
//     error.innerHTML = "";
//   }
// };
