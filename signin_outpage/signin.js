document.querySelector('#signup').addEventListener('click',login)
 
function login(){
    window.location.href = 'signup.html'
}
let loginData = JSON.parse(localStorage.getItem('logData'))
console.log(loginData)
document.querySelector('form').addEventListener('submit',signup);
function signup(){
    event.preventDefault()
    
    let logmobile=document.getElementById("mobile").value

    loginData.forEach(function(el){
        if(el.mobile==logmobile){
            alert('login successful')
            if(alert('login successful')== alert('login successful'))
             {window.location.href="home.html"}
            
        }
    })
} 