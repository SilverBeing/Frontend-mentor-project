//Function for the change of the navigtion bar toggler icon//
const burgerIcon = () =>{
    const openIcon = document.querySelector(".home-menu");
    const closeIcon = document.querySelector(".close-menu");

    
    openIcon.addEventListener("click", () => {
      closeIcon.style = "display:block";
      openIcon.style = "display:none";
    })
    closeIcon.addEventListener("click", () => {
      closeIcon.style = "display:none";
      openIcon.style = "display:block";
    })
}

burgerIcon();
