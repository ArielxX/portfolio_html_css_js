let projects = document.querySelectorAll(".projects__row");
let project_img = document.querySelectorAll(".projects__row-img");
let projects_text = document.querySelectorAll(".projects__row-content");

for (let i = 0; i < projects.length; i++) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: projects[i],
      toggleActions: "play pause resume reset"
    }
  });
  tl.from(project_img[i], {
    opacity: 0,
    x: -300,
    duration: 2
  });
  tl.from(projects_text[i], {
    opacity: 0,
    y: 200,
    duration: 2
  });
}

function sendMail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "random@yopmail.com",
    Password: "",
    To: "acruzx94@gmail.com",
    From: "random@yopmail.com",
    Subject: "Test email",
    Body:
      "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
  }).then((message) => alert(message));
}
