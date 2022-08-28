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

let display=JSON.parse(localStorage.getItem("clickdata"))
let total=0;
document.querySelector("#hotel_name").innerText=display.name;
document.querySelector("#hotel_id").innerText=`${display.refId}`;
document.querySelector("#crauser").src=display.image;
document.querySelector("#hotel_price").innerText=display.price;
document.querySelector("#total_price").innerText=0;
document.querySelector("#select_tag").addEventListener("change",function(){
    let pax=document.querySelector("#select_tag").value;
    document.querySelector("#total_price").innerText=Number(display.price)*pax;
    total=Number(display.price)*pax;
})

document.querySelector("#button").addEventListener("click", function(){
    localStorage.setItem("total_price",total);
    window.location.href="../payment/payment.html"

})


