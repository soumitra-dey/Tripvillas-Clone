document.getElementById("cancel").addEventListener("click",gotohome)
    function gotohome(){
     window.location.href="home.html"
      
    }

    let signArr= JSON.parse(localStorage.getItem('logData'))||[]
    document
        .getElementById("submit")
        .addEventListener("click", givealtert);

    function givealtert() {
        event.preventDefault()
        window.location.href = 'otpverification.html'
        alert("your 4 digit pin is 1234");

    }

    document.querySelector("form").addEventListener("submit", signup)
    function signup() {
        event.preventDefault()
        let name = document.getElementById("name").value
        let email = document.getElementById("email").value
        let pass = document.getElementById("password").value
        let mobile = document.getElementById("mobile").value
        let lastname = document.getElementById("lastname").value
        let singnobj = {
            mobile,
            email,
            pass,
            name,
            lastname
        }
        signArr.push(singnobj)
        localStorage.setItem('logData',JSON.stringify(signArr))
    }