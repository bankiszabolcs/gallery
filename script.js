let currentPhoto=0;
//Képek, címekkel, leírásokkal
let photos = [
    /* {
        photo: 'images/ERITzXtXYAQziJv.jpg',
        title: 'My title1',
        description: 'What happened here, why is this a very nice image'
    }, */
    {
        photo: 'images/racefansdotnet-20190515-085312-3.jpg',
        title: 'My title2',
        description: 'What happened here, why is this a very nice image'
    },
    {
        photo: 'images/racefansdotnet-20190920-162447-8.jpg',
        title: 'My title3',
        description: 'What happened here, why is this a very nice image'
    },
    {
        photo: 'images/racefansdotnet-20200216-093212-5.jpg',
        title: 'My title4',
        description: 'What happened here, why is this a very nice image'
    },
    {
        photo: 'images/racefansdotnet-20200216-115559-6.jpg',
        title: 'My title5',
        description: 'What happened here, why is this a very nice image'
    },
    {
        photo: 'images/racefansdotnet-20200216-142729-1.jpg',
        title: 'My title6',
        description: 'What happened here, why is this a very nice image'
    },
    {
        photo: 'images/racefansdotnet-20200216-145255-3.jpg',
        title: 'My title7',
        description: 'What happened here, why is this a very nice image'
    },
    {
        photo: 'images/racefansdotnet-20200216-172124-4.jpg',
        title: 'My title8',
        description: 'What happened here, why is this a very nice image'
    }]

    let clearArrows = () =>{
        $('.thumbnails .arrow-up').css("display","none");
    }

    let makeArrowVisible = (arrow) =>{
        $(arrow).css("display","block");
    }

let loadPhoto = (photoNumber) =>{
    clearArrows();
    $('#photo').attr('src', photos[photoNumber].photo)
    $('#photo-title').text(photos[photoNumber].title)
    $('#photo-description').text(photos[photoNumber].description)
    /* $(`#arrow-up${photoNumber}`).css("display","block"); */
    makeArrowVisible(`#arrow-up${photoNumber}`)

}
loadPhoto(currentPhoto)

$('.rightArrow').click(()=>{
    if(currentPhoto!=(photos.length-1)){
    currentPhoto++
    loadPhoto(currentPhoto)
    }else{
        currentPhoto=0
        loadPhoto(currentPhoto)
    }
})
$('.leftArrow').click(()=>{
    if(currentPhoto==0){
    currentPhoto=(photos.length-1)
    loadPhoto(currentPhoto)
    }else{
    currentPhoto--
    loadPhoto(currentPhoto)}
})

let i = 0;
photos.forEach(photo => {
    $(`.thumbnails`).append(`<div class="thumbnail"><div class="arrow-up" id="arrow-up${i}"></div><img data-number="${i}" src="${photo.photo}" alt="kismiska"><div class="title">${photo.title}</div></div>`)
/*     $(`.thumbnails .arrow-up`).append(`<div class="arrow-up${i}"></div>`)
    $(`.thumbnails .arrow-up`).css("display", "none") */
    i++ 
});

clearArrows()

$('.thumbnail').on("click", function(){
    
    let num = $(event.target).attr('data-number')
    loadPhoto(num)
    currentPhoto=num;
    /* $(this).children(".arrow-up").css('display', 'block') */
})
//Kezdőoldal nyíl az aktuális fotóhoz
makeArrowVisible(`#arrow-up${currentPhoto}`)

