function getdetails(){
        
    sessionStorage.clear();
    if(localStorage['signupdetails'] !=undefined){
        var storedName = document.getElementById('usernamec').value;
        var storedPwd = document.getElementById('passwordc').value;

        let user = JSON.parse(localStorage['signupdetails']);
        
        let finduser = user.users.find(check => check.name == storedName && check.password == storedPwd);
        
        if(finduser){
            let login={
                "name":storedName,
                "password":storedPwd
            }
            sessionStorage.setItem('login',JSON.stringify(login));
            alert('You are logged in.');
            return true;
        }
    }
    
    alert('Error on login');
    return false;

}