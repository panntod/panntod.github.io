const projectsData = [
  {
    title: "Portfolio Website",
    imgSrc: "portfolio",
    description:
      "Ini adalah Portfolio Website yang saya buat untuk memberi informasi dari resume pengalaman dan juga skill yang saya miliki",
    buildWith: "Html5, Css3, JavaScript, Bootstrap",
    demoLink: "https://panntod.github.io/Portfolio-Web/",
  },
  {
    title: "Perpustakaan Online",
    imgSrc: "perpustakaanOnline",
    description:
      "Ini adalah project yang dibuat menggunakan PHP yang terhubung langsung dengan MySql, ini adalah Modul pembelajaran di SMK saya",
    buildWith: "Html5, Css3, PHP, Bootstrap, MySQL",
    githubLink: "https://github.com/panntod/Perpustakaan-PHP",
  },
  {
    title: "Discord Bot",
    imgSrc: "discord-bot",
    description:
      "Ini adalah project yang dibuat untuk mengambil value yang di inputkan di form dan dihubungkan ke webhook dari discord.",
    buildWith: "Html5, Css3, Js, Tailwind, PHP, Boostrap",
    githubLink: "https://github.com/panntod/Discord-bot",
  },
  {
    title: "Kantin App",
    imgSrc: "kantin-web",
    description:
      "Ini adalah project pertama kali yang saya buat, yang berisi database untuk menyimpan data dari setiap aktifitas yang dilakukan diweb ini",
    buildWith: "Html5, Css3, PHP, Bootstrap, MySQL",
    githubLink: "https://github.com/panntod/Kantin-Php",
    demoLink: "https://kantin-pandhu.000webhostapp.com/login.php",
  },
  {
    title: "Movie Web",
    imgSrc: "movie-web",
    description:
      "Ini adalah project yang menggunakan online API milik movieDb, mengkoneksikan online API menggunakan React.",
    buildWith: "Html5, Css3, Js, React, Node",
    githubLink: "https://github.com/panntod/Search-react",
    demoLink: "https://search-react-alpha.vercel.app/",
  },
  {
    title: "CRUD Ejs",
    imgSrc: "crud-web",
    description:
      "Ini adalah project yang dibuat untuk menyimpan data yang di inputkan dari form ke database.",
    buildWith: "Html5, Css3, Boostrap, Js, Ejs",
    githubLink: "https://github.com/panntod/Belajar-Crud-Js",
    demoLink: "https://crud-node-js-two.vercel.app/",
  },
  {
    title: "React Tools",
    imgSrc: "react-tools",
    description:
      "Ini adalah project lanjutan dari todos list yang dibuat menggunakan framework react js, yang berisi todos list, notes, expense tracker. web ini menggunakan localstorage",
    buildWith: "Html5, Css3, Js, Tailwind, React",
    githubLink: "https://github.com/panntod/Tools-react",
    demoLink: "https://tools-react-ten.vercel.app",
  },
  {
    title: "Kalkulator Sederhana",
    imgSrc: "kalkulator-sederhana",
    description:
      "Website ini dibuat untuk memenuhi tugas dari bu ratih, memahami lanjutan tentang javascript.",
    buildWith: "Html5, Css3, Js, Tailwind",
    githubLink: "https://github.com/panntod/Web-Sederhana",
    demoLink: "https://matematika-sederhana.vercel.app/home.html",
  },
  {
    title: "Munjalindra Website",
    imgSrc: "munjalindra-website",
    description:
      "Website ini dibuat untuk belajar membuat web sesuai dengan figma, dan memperbarui web munjalindra.co.id",
    buildWith: "Html5, Css3, Js, Boostrap",
    demoLink: "https://panntod.github.io/Munjalindra-Web/",
    githubLink: "https://github.com/panntod/Munjalindra-Web",
    figmaLink:
      "https://www.figma.com/file/WimiUyAlFqnBbd5c3AXFj5/RancanganWeb?type=design&node-id=1%3A4&mode=design&t=ra3edPXnrFHmMAEY-1",
  },
  {
    title: "Auction Website",
    imgSrc: "auction",
    description:
      "Website ini dibuat untuk simulasi lelang menggunakan PHP dan terkoneksi dengan MySql",
    buildWith: "Html5, Css3, Js, Boostrap, PHP, MySql",
    githubLink:
      "https://github.com/DerylFeyza/Project_PHP/blob/main/bidding.php",
    demoLink: "https://auction-project-website.000webhostapp.com/home.php",
  },
  {
    title: "Todolist OAuth Website",
    imgSrc: "oauth-google",
    description:
      "Website ini dibuat untuk belajar OAuth 2.0, untuk mengakses todolist app data akan disimpan di mongoDb",
    buildWith: "Html5, Css3, Js, Materialize, Node.js, Express.js, MongoDb",
    githubLink: "https://github.com/panntod/Oauth-NodeJs",
    demoLink: "https://todolist-node-js.vercel.app/",
  },
  {
    title: "MERN App",
    imgSrc: "mern-app",
    description:
      "Ini adalah website MERN (Mongo, Express, React, Node), mengimplementasikan sistem crud didalam nya dan terdapat sistem login",
    buildWith: "Html5, Css3, React, Vite, TailwindCss Node, Express, MongoDb",
    githubLink: "https://github.com/panntod/MERN-Frontend",
  },
  {
    title: "Alternative Linktree",
    imgSrc: "linktree",
    description:
      "Ini adalah alternatif linktree yang saya buat menggunakan html css dan framework tailwind",
    buildWith: "Html5, Css3, TailwindCss",
    demoLink: "https://panntod.github.io/Project-Mandiri/linktree/",
  },
  {
    title: "Card Name",
    imgSrc: "card-name",
    description:
      "Ini adalah card name yang saya buat untuk mengenalkan diri dengan lebih mudah menggunakan html css dan framework tailwind",
    buildWith: "Html5, Css3, TailwindCss",
    demoLink: "https://panntod.github.io/Project-Mandiri/Card/",
  },
];

function generateProjectCard(project) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
        <i class="project-img">
            <img src="assets/images/projects/${project.imgSrc}.png" alt="${project.title}" />
        </i>
        <div class="card-content">
            <p class="card-title">${project.title}</p>
            <p class="card-description"><strong>Desc:</strong> ${
              project.description
            }</p>
            <p class="card-description"><strong>Build with:</strong> ${
              project.buildWith
            }</p>
            <div class="card-button">
                ${
                  project.githubLink
                    ? `<a href="${project.githubLink}" class="github"><i class="bx bxl-github"></i> Github</a>`
                    : ""
                }
                ${
                  project.demoLink
                    ? `<a href="${project.demoLink}" class="demo"><i class="bx bx-link-alt"></i> Demo</a>`
                    : ""
                }
                ${
                  project.figmaLink
                    ? `<a href="${project.figmaLink}" class="figma"><i class="bx bxl-figma"></i> Figma</a>`
                    : ""
                }
            </div>
        </div>
    `;

  return card;
}

function renderProjects() {
  const projectContainer = document.getElementById("project-container");
  projectsData.forEach((project) => {
    const projectCard = generateProjectCard(project);
    projectContainer.appendChild(projectCard);
  });
}

renderProjects();
