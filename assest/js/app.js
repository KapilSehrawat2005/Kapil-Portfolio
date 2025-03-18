// const toggleButton = document.getElementById("darkModeToggle");
        // const body = document.body;
        const slides = document.querySelectorAll(".slide");
        const navLinks = document.querySelectorAll("li a");
        const hamburgerMenu = document.getElementById("hamburgerMenu");
        const navbar = document.getElementById("navbar");

        /*body.classList.add("dark-mode");

        toggleButton.addEventListener("change", () => {
            body.classList.toggle("dark-mode");
            body.classList.toggle("light-mode");
        });*/

        navLinks.forEach((link, index) => {
            link.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = link.getAttribute("href").substring(1);
                const targetSlide = document.getElementById(targetId);

                slides.forEach(slide => {
                    slide.classList.add("d-none");
                });

                targetSlide.classList.remove("d-none");
                targetSlide.classList.add("fade-in");

                if (window.innerWidth <= 950) {
                    navbar.classList.remove("active");
                }
            });
        });


        hamburgerMenu.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });