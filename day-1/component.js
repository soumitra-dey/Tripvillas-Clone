setTimeout(function(){
    let ind =document.getElementById("atul")
    let dropdown=document.getElementById("alex")
    ind.addEventListener("click",function()
    {
        dropdown.style.display="grid"
    
    })
    let call=document.querySelectorAll(".opt")
    call.forEach(ele =>{
        ele.addEventListener("click",function(){
            let name=ele.innerText;
            document.getElementById("rohit").innerText=name;
            setTimeout(function(){
                dropdown.style.display="none" 
            },1000);
        })
    })
    let sign=document.getElementById("sign")
    let signin=document.getElementById("signin")
    signin.addEventListener("click",function(){
        sign.style.display="block"
    })

},3000)
    
