let citybtn=document.querySelector("#citytype_city");

let typesbtn=document.querySelector("#citytype_types");

let addlist=document.querySelector(".addlist")

let typeslist=document.querySelector(".typeslist")


citybtn.addEventListener("click", ()=>{
    citybtn.style.borderBottom="1px solid blueviolet";
    typesbtn.style.borderBottom="0px";
    addlist.classList.remove("flag")
    typeslist.classList.add("flag")
})
typesbtn.addEventListener("click", ()=>{
    citybtn.style.borderBottom="0px"
    typesbtn.style.borderBottom="1px solid blueviolet"
    typeslist.classList.remove("flag")
    addlist.classList.add("flag")
})
