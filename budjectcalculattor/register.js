function Register(){
    uname=username.value;
    emid=email.value;
    psw=rpassword.value;

console.log(uname ,emid,psw);

accountdetails={
emid,
uname,
psw
}
if(uname in localStorage){
    alert("This username already exist")
}
else{
    localStorage.setItem(uname,JSON.stringify(accountdetails))
    alert("Registration succesefull!");
    window.location="01-index.html"
}
}
function Login(){
    uname=Lusername.value;
    psw=Lpassword.value;
    console.log(uname,psw);
    if(uname in localStorage){
    accountdetails=JSON.parse(localStorage.getItem(uname))
    if(psw==accountdetails.psw){
        alert("Login successfull")
        window.location="main.html"
    }
    else{
      alert("Incorrect password")
    }
}
else{
    alert("Inncorect account number")
}
}
    