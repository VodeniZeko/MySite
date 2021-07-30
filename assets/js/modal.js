var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// PROFILE IMAGE POPUP
$(".fa-info-circle").click(function () {
  $(this).toggleClass("active");
  return $(".LogoBox").toggleClass("open");
});

// SUCCESS MODAL
let ContactForm = document.querySelector("#contact form");

ContactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(ContactForm);
  fetch(ContactForm.getAttribute("action"), {
    method: "POST",
    headers: {
      Accept: "application/x-www-form-urlencoded;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: new URLSearchParams(formData).toString(),
  }).then((res) => {
    if (res) {
      ContactForm.reset();
      var successModal = document.getElementById("myM");
      successModal.style.display = "block";
      setTimeout(function () {
        successModal.style.display = "none";
      }, 3000);
    }
  });
});
