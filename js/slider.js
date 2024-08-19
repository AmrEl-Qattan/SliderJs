var imgList = Array.from(document.querySelectorAll('.item img'));
var lightboxcontainer = document.getElementById('lightboxcontainer');
var closeBtn = document.getElementById('closeBtn');
var itemCaption = Array.from(document.querySelectorAll('.item-caption')) ;


var currentSliderIndex;

for(var i = 0 ; i < imgList.length; i++){
    imgList[i].addEventListener('click' , function(eventInfo){
        lightboxcontainer.style.display = 'flex';
        var imgSrc = eventInfo.target.getAttribute('src');
        lightboxcontainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`
        currentSliderIndex = imgList.indexOf(eventInfo.target)
    })
}


closeBtn.addEventListener('click' , closeSlide)

function closeSlide(){
    lightboxcontainer.style.display = ( 'none')
}
// function nextSlide(){
//     currentSliderIndex++;
//     console.log(currentSliderIndex);
//     if(currentSliderIndex == imgList.length){
//         currentSliderIndex = 0;

//     }
//    var imgSrc = imgList[currentSliderIndex].getAttribute('src');
//    lightboxcontainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`

    
// }
// function prevSlide(){
//     currentSliderIndex--;
//     console.log(currentSliderIndex);
//     if(currentSliderIndex < 0){
//         currentSliderIndex = imgList.length -1;

//     }
//    var imgSrc = imgList[currentSliderIndex].getAttribute('src');
//    lightboxcontainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`

    
// }


// closeBtn.nextElementSibling.addEventListener('click' , nextSlide)
// closeBtn.previousElementSibling.addEventListener('click' , prevSlide)

// #############################################################################################

function slide(step){
    currentSliderIndex = currentSliderIndex + step

    if(currentSliderIndex == imgList.length){
        currentSliderIndex = 0;
        
    }
    if(currentSliderIndex < 0){
        currentSliderIndex = imgList.length -1;
        
 }
 
    var imgSrc = imgList[currentSliderIndex].getAttribute('src');
    lightboxcontainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`

}

closeBtn.nextElementSibling.addEventListener('click' , function(){slide(1)})
closeBtn.previousElementSibling.addEventListener('click' , function(){slide(-1)})



document.addEventListener('keyup', function(eventInfo){

    if(lightboxcontainer.style.display === 'flex'){
        switch (eventInfo.key){
            case "ArrowLeft":
                slide(-1);
                break;   
            case "ArrowRight":
                slide(1);
                break;   
            case "Escape":
                closeSlide();
                break;   
        }
    }
   

});


document.addEventListener('click', close);

function close(event) {
    if (lightboxcontainer == event.target) {
        lightboxcontainer.style.display = 'none';
    }
}
