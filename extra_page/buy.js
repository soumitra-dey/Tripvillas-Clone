let imageslink = [
    "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/38628342/The_Morning_After_watermarked_image_1024.jpeg",
    "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/38628342/Main_Suite_watermarked_image_1024.jpeg",
    "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/38628342/Childrens_Bunk_watermarked_image_1024.jpeg",
    "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/38628342/The_Main_Sitting_Area_watermarked_image_1024.jpeg",
    "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/38628342/Lobby_watermarked_image_1024.jpeg",
    "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/38628342/The_Lawn_watermarked_image_1024.jpeg",
    "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/38628342/Front_View_of_Pines_Fell_watermarked_image_1024.jpeg",
    "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/38628342/Entering_Pines_Fell_watermarked_image_1024.jpeg"
]
let leftbtn = document.getElementById("leftbtn");
let rightbtn = document.getElementById("rightbtn");
let creuser = document.getElementById("crauser");
let imageState = 0;
rightbtn.addEventListener("click", function () {
    imageState++;
    if (imageState === imageslink.length) {
        imageState = 0;
    }
    crauser.src = imageslink[imageState];
})
leftbtn.addEventListener("click", function () {
    imageState--;
    if (imageState < 0) {
        imageState = imageslink.length - 1;
    }
    crauser.src = imageslink[imageState];
})