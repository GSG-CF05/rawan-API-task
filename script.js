//  select body tag
let body = document.querySelector("body");
body.classList.add("dark");

// create input tag
let input = document.createElement("input");
input.placeholder = "Enter Your Languagh to find jop :";
body.prepend(input);
//  create heading tag
let heading = document.createElement("h1");
heading.textContent =
  "Enter the programming language you are fluent in to see the latest jobs in it :";
body.prepend(heading);

// select container section and append all child
let app = document.getElementById("root");
let container = document.createElement("div");
container.classList.add("container");
root.appendChild(container);
// create logo
let logo = document.createElement("h1");
logo.textContent = "Latest Jops";

// create logo
body.prepend(logo);
logo.classList.add("logo");

// make fetch for freelancer API
input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    fetch(
      `https://www.freelancer.com/api/projects/0.1/jobs/search/?job_names%5B%5D=${input.value}&job_names%5B%5D=website%20design`
    )
      .then((data) => {
        return data.json();
      })
      .then((works) => {
        // console.log(works.result);
        works.result.forEach((ele) => {
          let card = document.createElement("div");
          container.appendChild(card);
          card.classList.add("card");
          let title = document.createElement("h1");
          title.innerText = ele.name;
          card.appendChild(title);
          let category = document.createElement("p");
          category.innerText = ele.category.name;
          card.appendChild(category);
          console.log(ele.name);
          input.value = "";
        });
      })
      .catch((error) => console.log(error));
  }
});
