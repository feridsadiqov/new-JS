const newTitle = document.querySelectorAll(".title");
const cont = document.querySelectorAll(".content");
const accordions = document.querySelectorAll(".acc");

accordions.forEach((acc) => {
  let title = acc.querySelector(".title");

  let plusMinus = title.querySelector("span");

  title.addEventListener("click", () => {
    let content = acc.querySelector(".content");

    accordions.forEach((acc) => {
        let title = acc.querySelector(".title");
        let plusMinus = title.querySelector("span");
      let content = acc.querySelector(".content");
      plusMinus.firstChild.classList.add("fa-regular", "fa-plus");
      plusMinus.firstChild.classList.remove("fa-solid", "fa-minus");
      if (content.classList.contains("active")) {
        content.classList.remove("active");
     
      }
    });
    content.classList.toggle("active");

    if (content.classList.contains("active")) {
      plusMinus.firstChild.classList.remove("fa-regular", "fa-plus");
      plusMinus.firstChild.classList.add("fa-solid", "fa-minus");
    } else {
      plusMinus.firstChild.classList.add("fa-regular", "fa-plus");
      plusMinus.firstChild.classList.remove("fa-solid", "fa-minus");
    }

    // console.log(plusMinus);
  });
});
