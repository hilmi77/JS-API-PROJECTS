const wrapper = document.querySelector(".wrapper");
const qrInput = document.querySelector(".form input");
const generateBtn = document.querySelector(".form button");
const qrImage = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue) return; //if the input is empty then return from here
  generateBtn.innerText = "Generating QR Code...";
  // getting a QR  code of user entered value using the qrserver
  // api and passing the api returned img src to qrImage
  qrImage.src = ` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data= ${qrValue}`;
  qrImage.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generating QR Code";
  });
});
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value) {
    wrapper.classList.remove("active");
  }
});
