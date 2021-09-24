window.addEventListener("scroll", () => {
            let pageYOffset = window.pageYOffset + screen.height;
            
            //console.log(parseInt(pageYOffset));
            
            //출력용
            document.querySelector(".pageYOffset").textContent = parseInt(pageYOffset);/*
            document.querySelector(".s1OT").textContent = document.getElementById("section1").offsetTop;
            document.querySelector(".s2OT").textContent = document.getElementById("section2").offsetTop;
            document.querySelector(".s3OT").textContent = document.getElementById("section3").offsetTop;
            document.querySelector(".s4OT").textContent = document.getElementById("section4").offsetTop;
            document.querySelector(".s5OT").textContent = document.getElementById("section5").offsetTop;
            document.querySelector(".s6OT").textContent = document.getElementById("section6").offsetTop;
            document.querySelector(".s7OT").textContent = document.getElementById("section7").offsetTop;
            document.querySelector(".s8OT").textContent = document.getElementById("section8").offsetTop;
            document.querySelector(".s9OT").textContent = document.getElementById("section9").offsetTop;*/

            //출력용 - 레드용
            /*if (pageYOffset > document.getElementById("section1").offsetTop) {
                document.querySelector(".s1OT").style.color = "red";
            } else {
                document.querySelector(".s1OT").style.color = "white";
            }
            if (pageYOffset > document.getElementById("section2").offsetTop) {
                document.querySelector(".s2OT").style.color = "red";
            } else {
                document.querySelector(".s2OT").style.color = "white";
            }
            if (pageYOffset > document.getElementById("section3").offsetTop) {
                document.querySelector(".s3OT").style.color = "red";
            } else {
                document.querySelector(".s3OT").style.color = "white";
            }
            if (pageYOffset > document.getElementById("section4").offsetTop) {
                document.querySelector(".s4OT").style.color = "red";
            } else {
                document.querySelector(".s4OT").style.color = "white";
            }
            if (pageYOffset > document.getElementById("section5").offsetTop) {
                document.querySelector(".s5OT").style.color = "red";
            } else {
                document.querySelector(".s5OT").style.color = "white";
            }
            if (pageYOffset > document.getElementById("section6").offsetTop) {
                document.querySelector(".s6OT").style.color = "red";
            } else {
                document.querySelector(".s6OT").style.color = "white";
            }
            if (pageYOffset > document.getElementById("section7").offsetTop) {
                document.querySelector(".s7OT").style.color = "red";
            } else {
                document.querySelector(".s7OT").style.color = "white";
            }
            if (pageYOffset > document.getElementById("section8").offsetTop) {
                document.querySelector(".s8OT").style.color = "red";
            } else {
                document.querySelector(".s8OT").style.color = "white";
            }
            if (pageYOffset > document.getElementById("section9").offsetTop) {
                document.querySelector(".s9OT").style.color = "red";
            } else {
                document.querySelector(".s9OT").style.color = "white";
            }*/

            //나타나기
            if (pageYOffset > document.getElementById("section1").offsetTop) {
                document.getElementById("section1").classList.add("show");
            } else {
                document.getElementById("section1").classList.remove("show");
            }
            if (pageYOffset > document.getElementById("section2").offsetTop) {
                document.getElementById("section2").classList.add("show");
            } else {
                document.getElementById("section2").classList.remove("show");
            }
            if (pageYOffset > document.getElementById("section3").offsetTop) {
                document.getElementById("section3").classList.add("show");
            } else {
                document.getElementById("section3").classList.remove("show");
            }
            if (pageYOffset > document.getElementById("section4").offsetTop) {
                document.getElementById("section4").classList.add("show");
            } else {
                document.getElementById("section4").classList.remove("show");
            }
            if (pageYOffset > document.getElementById("section5").offsetTop) {
                document.getElementById("section5").classList.add("show");
            } else {
                document.getElementById("section5").classList.remove("show");
            }
            if (pageYOffset > document.getElementById("section6").offsetTop) {
                document.getElementById("section6").classList.add("show");
            } else {
                document.getElementById("section6").classList.remove("show");
            }
            if (pageYOffset > document.getElementById("section7").offsetTop) {
                document.getElementById("section7").classList.add("show");
            } else {
                document.getElementById("section7").classList.remove("show");
            }
            if (pageYOffset > document.getElementById("section8").offsetTop) {
                document.getElementById("section8").classList.add("show");
            } else {
                document.getElementById("section8").classList.remove("show");
            }
            if (pageYOffset > document.getElementById("section9").offsetTop) {
                document.getElementById("section9").classList.add("show");
            } else {
                document.getElementById("section9").classList.remove("show");
            }
        });