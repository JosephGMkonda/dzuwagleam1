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