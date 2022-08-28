
let display=JSON.parse(localStorage.getItem("clickdata"))

let img_div=document.querySelector("#box2_src");
img_div.setAttribute("src", display.image)
document.querySelector("#box2_id").innerText=display.refId;
document.querySelector("#box2_name").innerText=display.name;
document.querySelector("#box2_address").innerText=display.location;


let price=localStorage.getItem("total_price");

let tax=Math.round((Number(price)*10.5)/100);

document.querySelector("#s_total").innerText=`₹ ${Number(price)-tax}.00`;
document.querySelector("#t_tax").innerText=`₹ ${tax}.00`;
document.querySelector("#total").innerText=`₹ ${price}.00`;





document.querySelector("#conform").addEventListener("click",function(){
    let d1=document.querySelector("#cus_num").value
    let d2=document.querySelector("#cus_email").value
    let d3=document.querySelector("#id2").value
    let d4=document.querySelector("#id3").value
    if (d1=="" || d2=="" || d3=="" || d4=="") {
        alert("❌Please fill the all details");
    } else {
        alert("Booking Successful...🙂🙂🙂");
        window.location.href="../index.html";
    }
})
