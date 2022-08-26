
let asiabtn=document.querySelector("#asian_countries");
let europebtn=document.querySelector("#europe_countries");
let nortAmebtn=document.querySelector("#northamerica_countries");
let southAmebtn=document.querySelector("#south_america");
let africabtn=document.querySelector("#africa_countries");
let oceainbtn=document.querySelector("#oceania_countries");

let showlist=document.querySelector(".showlist")
let showlist1=document.querySelector(".showlist1")
let showlist2=document.querySelector(".showlist2")
let showlist3=document.querySelector(".showlist3")
let showlist4=document.querySelector(".showlist4")
let showlist5=document.querySelector(".showlist5")

asiabtn.addEventListener("click", ()=>{
    asiabtn.style.borderBottom="1px solid blueviolet";
    europebtn.style.borderBottom="0px";
    nortAmebtn.style.borderBottom="0px"
    southAmebtn.style.borderBottom="0px"
    africabtn.style.borderBottom="0px"
    oceainbtn.style.borderBottom="0px"

    showlist.classList.remove("flag")
    showlist1.classList.add("flag")
    showlist2.classList.add("flag")
    showlist3.classList.add("flag")
    showlist4.classList.add("flag")
    showlist5.classList.add("flag")

})
europebtn.addEventListener("click", ()=>{
    asiabtn.style.borderBottom="0px";
    europebtn.style.borderBottom="1px solid blueviolet";
    nortAmebtn.style.borderBottom="0px"
    southAmebtn.style.borderBottom="0px"
    africabtn.style.borderBottom="0px"
    oceainbtn.style.borderBottom="0px"

    showlist.classList.add("flag")
    showlist1.classList.remove("flag")
    showlist2.classList.add("flag")
    showlist3.classList.add("flag")
    showlist4.classList.add("flag")
    showlist5.classList.add("flag")

})
nortAmebtn.addEventListener("click", ()=>{
    asiabtn.style.borderBottom="0px";
    europebtn.style.borderBottom="0px";
    nortAmebtn.style.borderBottom="1px solid blueviolet"
    southAmebtn.style.borderBottom="0px"
    africabtn.style.borderBottom="0px"
    oceainbtn.style.borderBottom="0px"

    showlist.classList.add("flag")
    showlist1.classList.add("flag")
    showlist2.classList.remove("flag")
    showlist3.classList.add("flag")
    showlist4.classList.add("flag")
    showlist5.classList.add("flag")

})
southAmebtn.addEventListener("click", ()=>{
    asiabtn.style.borderBottom="0px";
    europebtn.style.borderBottom="0px";
    nortAmebtn.style.borderBottom="0px"
    southAmebtn.style.borderBottom="1px solid blueviolet"
    africabtn.style.borderBottom="0px"
    oceainbtn.style.borderBottom="0px"

    showlist.classList.add("flag")
    showlist1.classList.add("flag")
    showlist2.classList.add("flag")
    showlist3.classList.remove("flag")
    showlist4.classList.add("flag")
    showlist5.classList.add("flag")

})

africabtn.addEventListener("click", ()=>{
    asiabtn.style.borderBottom="0px";
    europebtn.style.borderBottom="0px";
    nortAmebtn.style.borderBottom="0px"
    southAmebtn.style.borderBottom="0px"
    africabtn.style.borderBottom="1px solid blueviolet"
    oceainbtn.style.borderBottom="0px"

    showlist.classList.add("flag")
    showlist1.classList.add("flag")
    showlist2.classList.add("flag")
    showlist3.classList.add("flag")
    showlist4.classList.remove("flag")
    showlist5.classList.add("flag")

})

oceainbtn.addEventListener("click", ()=>{
    asiabtn.style.borderBottom="0px";
    europebtn.style.borderBottom="0px";
    nortAmebtn.style.borderBottom="0px"
    southAmebtn.style.borderBottom="0px"
    africabtn.style.borderBottom="0px"
    oceainbtn.style.borderBottom="1px solid blueviolet"

    showlist.classList.add("flag")
    showlist1.classList.add("flag")
    showlist2.classList.add("flag")
    showlist3.classList.add("flag")
    showlist4.classList.add("flag")
    showlist5.classList.remove("flag")

})

