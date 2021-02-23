if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/serviceWorker.js")
    .then(function (registration) {
      console.log("Service worker registration succeeded:", registration);
    })
    .catch(function (error) {
      console.log("Service worker registration failed:", error);
    });
} else {
  console.log("Service workers are not supported.");
}

document.addEventListener("DOMContentLoaded", function () {
  const options = [];
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, options);
});

// document.addEventListener("DOMContentLoaded", function () {
//   const options = [];
//   var elems = document.querySelectorAll(".modal");
//   var instances = M.Modal.init(elems, options);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const options = [];
//   var elems = document.querySelectorAll(".tabs");
//   var instance = M.Tabs.init(elems, options);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const options = [];
//   var elems = document.querySelectorAll(".dropdown-trigger");
//   var instances = M.Dropdown.init(elems, options);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const options = [];
//   var elems = document.querySelectorAll("select");
//   var instances = M.FormSelect.init(elems, options);
// });
