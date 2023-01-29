function printErr(elem,hintmsg){
    document.getElementById(elem).innerHTML=hintmsg;
}
var submit=document.getElementById("loginButton")
console.log(submit)
submit.onclick=function(){
    validateform();
}
var usernamelist=["vedika","manavi","aritra","sohame"];
var usernamelist=["vedika123","manavi123","aritra123","sohame123"];
function validateform(){
    var form=document.getElementById("myForm");
    var username=form.username.value;
    var password=form.password.value;
    var usernameErr=true;
    var passwordErr=true;
    if(username==""){
        printErr("usernameErr","Enter the username");
    }
    else{
        for(var i=0;i<usernamelist.length;i++){
            if(username!==usernamelist[i]){
            printErr("usernameErr","Username does not exist");
        }
    }
        else{
            printErr("usernameErr","");
            usernameErr=false;
        }
    }
    if(password==""){
        printErr("usernameErr","Enter the password");
    }
    else{
        for(var i=0;i<usernamelist.length;i++){
            if(usernamelist[i]!==passwordlist[i]){
                printErr("usernameErr","Incorrect password");
        }
        else{
            printErr("passwordErr","");
            passwordErr=false;
        }
        }
    }
    if((usernameErr || passwordErr)===true){
        return false;
    }
    alert("Login Successful!!");
}




