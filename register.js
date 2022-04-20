
  var userdetails =[]  
    function getdetails() {
        var name = document.getElementById('username').value;  

        var password = document.getElementById('password1').value;
      
        var email = document.getElementById('email').value;
      

    
        if(localStorage['signupdetails']==undefined){
          
               let users ={
                   "users":[],
                   
               }
            localStorage['signupdetails']=JSON.stringify(users);
           }
           let localStorageuserslist = JSON.parse(localStorage['signupdetails']);
           if(localStorageuserslist.users.length > 0){
               let finduser = localStorageuserslist.users.find(check => check.email == email && check.password == password);
               console.log(finduser)
               if(finduser){
                    alert("Account already exists")
                    return false;
               }
           }
           let newusersdetails = {
                "name":name,
                "email":email,
                "password":password,
                "todolist":[]
           }
           localStorageuserslist.users.push(newusersdetails);
           localStorage['signupdetails'] = JSON.stringify(localStorageuserslist);
           alert('Your account has been created');
        }
    
