function initCarousel() {
    let ArrowRight = document.querySelector(".carousel__arrow.carousel__arrow_right")
    let ArrowLeft = document.querySelector(".carousel__arrow.carousel__arrow_left")
    ArrowLeft.style.display = 'none'

    let SlidePosition = 0
    let SlideWindow = document.querySelector(".carousel__inner")
    let SlideWidth = SlideWindow.offsetWidth
    let CurrentSlide = 1
    let SlideCount = document.querySelector(".carousel__inner").childElementCount

    ArrowRight.onclick = function () {
        SlidePosition = SlidePosition - SlideWidth
        SlideWindow.style.transform = 'translateX('+SlidePosition+'px)'
        CurrentSlide = CurrentSlide + 1
        if (CurrentSlide > 1) {
            ArrowLeft.style.display = ''
        }
        if (CurrentSlide == SlideCount) {
            ArrowRight.style.display = 'none'
        }
    };

    ArrowLeft.onclick = function () {
        SlidePosition = SlidePosition + SlideWidth 
        SlideWindow.style.transform = 'translateX('+SlidePosition+'px)'
        CurrentSlide = CurrentSlide - 1
        if (CurrentSlide < SlideCount) {
            ArrowRight.style.display = ''
        }
        if (CurrentSlide <= 1) {
            ArrowLeft.style.display = 'none'
        }
    }; 
}