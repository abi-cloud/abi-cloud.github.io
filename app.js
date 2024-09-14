// console.log ("Hello")
document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll("img");
    //this grabs all the images

    for(const image of images){
        //console.log(image)
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json ())
        .then(data => {
            image.src = data.message
            image.width = 100;
            image.height = 100;
        })
        //each src to be replaced with that of the data message, which is a random dog picture, the message itself will be the URL
    }
})
//Each image's src should be something new every single time.