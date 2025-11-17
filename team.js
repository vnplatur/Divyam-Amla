const team = [
  {
    name: "Renuka Panchakshare",
    role: "WebSite",
    img: "./images/woman.png!sw800",
  },
  {
    name: "Nandini Sharma",
    role: "Marketing",
    img: "./images/woman.png!sw800",
  },
  {
    name: "Mansi Tikariha",
    role: "Logistics",
    img: "./images/woman.png!sw800",
  },
  { name: "Atharva Makhi", role: "Finance", img: "./images/man.png" },
  { name: "Shriya Chavan", role: "Design", img: "./images/woman.png!sw800" },
  { name: "Ishika Kulkarni", role: "Content", img: "./images/woman.png!sw800" },
];

const container = document.getElementById("team-members");

container.innerHTML = team
  .map(
    (member) => `
  <div class="col-md-4 mb-4">
    <div class="card team-card shadow-sm h-100">
      <img src="${member.img}" class="card-img-top rounded-circle"  alt="${
      member.name
    }">
      <div class="card-body">
        <h5 class="card-title">${member.name}</h5>
        <p class="card-text">${member.role}</p>
        <div class="d-flex justify-content-center gap-2 mt-2">
          <a href="mailto:${member.name.toLowerCase()}@example.com" class="btn btn-outline-primary btn-sm">
            <i class="bi bi-envelope"></i>
          </a>
          <a href="tel:+918177800285" class="btn btn-outline-success btn-sm">
            <i class="bi bi-telephone"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
`
  )
  .join("");
