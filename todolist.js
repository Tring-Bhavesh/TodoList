
var storage=''
    var user=''
    var finduser=''
    var userdetails=''
$( document ).ready(function(){
    if(sessionStorage.getItem('login') !=undefined ){
         storage = JSON.parse(sessionStorage.getItem('login'));
         user = JSON.parse(localStorage['signupdetails']);
         finduser = user.users.find(check => check.name == storage.name && check.password == storage.password);
         userdetails = finduser;
            

        if(userdetails.todolist.length > 0){
            display();
    } 

    }else{
       alert('Login to proceed');
    }
    });

 function strike(index){
    console.log("strike ")
    console.log(userdetails.todolist[index])

     if(userdetails.todolist[index].checked=="yes"){
         userdetails.todolist[index].checked ="no";
         console.log("if yes ")
     
     }
     else {
         userdetails.todolist[index].checked="yes";
         console.log("if no ")
     }
     display();
     }



function addtask() {                                      //Add Task
    
    let promt = document.getElementById('task').value;
    document.getElementById('task').value = '';

    if(promt.trim().length !=0){
        let add= {
        "taskname":promt,
        "checked":"no"
    }
    userdetails.todolist.push(add);
    display();
    }

}



    function cleartask() {                               //clear task
        if(userdetails.todolist.length>0){
            let clearcomplete = userdetails.todolist.filter(check => check.checked== "no");
                
                userdetails.todolist =  clearcomplete;
            
        display();
        }
    }


    function emptytask() {                                  //empty task
        userdetails.todolist = [];
        document.getElementById('todo').innerHTML = '';
        display();
    }
  


 


    function display(){
        var html = '<table cellspacing="5">';
            let index = 0;
       for (let list of userdetails.todolist) {
           console.log("print",list)
           
            html += '<tr>' ;
            if(list.checked == 'yes'){
                html+= '<td><div class="padd" onclick="strike(\'' + index+ '\')"><s>' + list.taskname + '</s></div></td><td><div class="padd" onclick="deletetask(\'' + index + '\')">X</div></td>' ;

            }else{
                html+= '<td><div class="padd" onclick="strike(\'' + index + '\')">' + list.taskname + '</div></td><td><div class="padd" onclick="deletetask(\'' + index + '\')">X</div></td>' ;
            }
            
            html+='</tr>';
            index++;
        }
        html +='</table>';
        document.getElementById('todo').innerHTML = html;
        storage = JSON.parse(sessionStorage.getItem('login'));
        user = JSON.parse(localStorage['signupdetails']);
       for(let list of user.users){
       if(list.name == storage.name && list.password ==  storage.password){
           list.todolist = userdetails.todolist;
       }
       }
       localStorage['signupdetails']=JSON.stringify(user);
    }


     

    
    function logout(){
        sessionStorage.clear();
        location.replace("file:///C:/Users/Admin/Desktop/task2/login.html")
        
    }
    function deletetask(index){
        userdetails.todolist.splice(index,1);
        display();
    }