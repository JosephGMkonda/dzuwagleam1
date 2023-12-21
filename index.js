const homeSlider = document.querySelectorAll('.homeSlider'),
      dot = document.querySelectorAll('.dot');


    let counter = 1;
    slideFun(counter)//calling the home slides
    let timer = setInterval(autoslide, 8000);


    function autoslide(){
        counter += 1;
        slideFun(counter);

    }


    function plusSlides(n){
        counter += n;
        slideFun(counter);
        resetTimer();

    }


    function CurrentSlides(n){
        counter = n;
        slideFun(counter)
        resetTimer();

        
    }

    function resetTimer(){
        clearInterval(timer);
        timer = setInterval(autoslide, 8000);

    }


// function for the home sliders
function slideFun(n){
    let i;
    for(i = 0; i<homeSlider.length; i++){
        homeSlider[i].style.display = "none"

    }
    for(i = 0; i < dot.length; i++){
        dot[i].classList.remove('active')
    }
    if(n > homeSlider.length){
        counter = 1;
    }
    if(n < 1) {
        counter = homeSlider.length;
        
    }
    homeSlider[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');

}

// this testmonial class here 


let testCounter = 0;
showTestmonials(testCounter)
document.querySelector(".Prev").addEventListener("click", () => {
    computeTestmonials(-1)
})

document.querySelector(".Next").addEventListener("click", () => {
    computeTestmonials(1)
})

function computeTestmonials(){
    showTestmonials(( testCounter += 1))
}



function showTestmonials(n){
    let i;
    let testmonials = document.getElementsByClassName('testimonials');

    if(n > testmonials.length){
        testCounter = 1;
    }
    if(n < 1){
        testCounter = testmonials.length;
    }
    for(i = 0; i < testmonials.length; i++){
        testmonials[i].style.display = "none"
    }
    testmonials[testCounter - 1].style.display = "flex"

}

 setInterval(computeTestmonials, 10000)


 // Get the height of the fixed navigation bar
const navbarHeight = document.querySelector('header').offsetHeight;

// Function to handle smooth scrolling to sections
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const sectionPosition = section.offsetTop - navbarHeight;

  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth'
  });
}

// Attach click event listeners to your navigation links
document.querySelectorAll('header a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const sectionId = this.getAttribute('href').substring(1);
    scrollToSection(sectionId);
  });
});


function toggleMenu() {
    var navList = document.querySelector('.navlist');
    navList.classList.toggle('show');
}