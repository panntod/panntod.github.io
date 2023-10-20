const projectsData = [
    {
        title: "Perpustakaan Online",
        imgSrc: "images/perpustakaanOnline.png",
        description: "Ini adalah project yang dibuat menggunakan php...",
        buildWith: "Html5, Css3, PHP, Bootstrap, MySQL",
        hasDemo: true,
        githubLink: "https://github.com/panntod/Project-Php/tree/main/Siswa",
        demoLink: "https://perpustakaan-pandhu.000webhostapp.com/login.php"
    },
    {
        title: "Discord Bot",
        imgSrc: "images/discord-bot.png",
        description: "Ini adalah project yang dibuat untuk mengambil value yang di inputkan di form dan dihubungkan ke webhook dari discord.",
        buildWith: " Html5, Css3, Js, Tailwind, PHP, Boostrap",
        hasDemo: false,
        githubLink: "https://github.com/panntod/Discord-bot",
    },
    {
        title: "Kantin App",
        imgSrc: "images/kantin-web.png",
        description: "Ini adalah project pertama kali yang saya buat, yang berisi database untuk menyimpan data dari setiap aktifitas yang dilakukan diweb ini",
        buildWith: "Html5, Css3, PHP, Bootstrap, MySQL",
        hasDemo: true,
        githubLink: "https://github.com/panntod/Project-Php/tree/main/kantin-app",
        demoLink: "https://kantin-pandhu.000webhostapp.com/login.php",
    },
    {
        title: "Movie Web",
        imgSrc: "images/movie-web.png",
        description: "Ini adalah project yang menggunakan online API milik movieDb, mengkoneksikan online API menggunakan React.",
        buildWith: "Html5, Css3, Js, React, Node",
        hasDemo: true,
        githubLink: "https://github.com/panntod/Search-react",
        demoLink: "https://search-react-alpha.vercel.app/",
    },
    {
        title: "CRUD Ejs",
        imgSrc: "images/crud-web.png",
        description: "Ini adalah project yang dibuat untuk menyimpan data yang di inputkan dari form ke database.",
        buildWith: " Html5, Css3, Boostrap, Js, Ejs",
        hasDemo: false,
        githubLink: "https://github.com/panntod/Belajar-Crud-Js",
    },
    {
        title: "React Tools",
        imgSrc: "images/react-tools.png",
        description: "Ini adalah project lanjutan dari todos list yang dibuat menggunakan framework react js, yang berisi todos list, notes, expense tracker. web ini menggunakan localstorage",
        buildWith: "Html5, Css3, Js, Tailwind, React",
        hasDemo: true,
        githubLink: "https://github.com/panntod/Tools-react",
        demoLink: "https://tools-react-ten.vercel.app",
    },
    {
        title: "Kalkulator Sederhana",
        imgSrc: "images/kalkulator-sederhana.png",
        description: "Website ini dibuat untuk memenuhi tugas dari bu ratih, memahami lanjutan tentang javascript.",
        buildWith: "Html5, Css3, Js, Tailwind",
        hasDemo: true,
        hasFigma: false,
        githubLink: "https://github.com/panntod/Web-Sederhana",
        demoLink: "https://matematika-sederhana.vercel.app/home.html",
    },
    {
        title: "Munjalindra Website",
        imgSrc: "images/munjalindra-website.png",
        description: "Website ini dibuat untuk belajar membuat web sesuai dengan figma, dan memperbarui web munjalindra.co.id",
        buildWith: "Html5, Css3, Js, Boostrap",
        hasDemo: false,
        hasFigma: true,
        githubLink: "https://github.com/panntod/Munjalindra-Web",
        demoLink: "",
        figmaLink: "https://www.figma.com/file/WimiUyAlFqnBbd5c3AXFj5/RancanganWeb?type=design&node-id=1%3A4&mode=design&t=ra3edPXnrFHmMAEY-1",
    },
];

function generateProjectCard(project) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <i class="project-img">
            <img src="${project.imgSrc}" alt="${project.title}" loading="lazy" />
        </i>
        <div class="card__content">
            <p class="card__title">${project.title}</p>
            <p class="card__description mg-d-none"><strong>Desc:</strong> ${project.description}</p>
            <p class="card__description mg-d-none"><strong>Build with:</strong> ${project.buildWith}</p>
            ${project.hasDemo ? `<p class="card__description">[Sudah dibuat tampilan]</p>` : ""}
            <div class="card__button">
                <a href="${project.githubLink}" class="github"><i class="bx bxl-github"></i> Github</a>
                ${project.hasDemo ? `<a href="${project.demoLink}" class="demo">Demo</a>` : ""}
                ${project.hasFigma ? `<a href="${project.figmaLink}" class="figma"><i class="bx bxl-figma"></i> Figma</a>` : ""}
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

// Panggil fungsi untuk merender proyek-proyek
renderProjects();
