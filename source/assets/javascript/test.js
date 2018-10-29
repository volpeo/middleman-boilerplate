


const romain = document.getElementById("test");
romain.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.currentTarget);
  console.log("it has been clicked")
  swal("Hello world!");
});
