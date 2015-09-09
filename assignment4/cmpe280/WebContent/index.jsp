<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <title>Registration Form</title>
             
<script type="text/javascript">
  function calc() 
{ 
    var xmlHttp = new XMLHttpRequest(); 
 

    xmlHttp.open("GET", "/cmpe280/RegisterInDatabase?email="+document.getElementById("email").value+
    		"&name="+document.getElementById("email").value+
    		"&password="+document.getElementById("password").value+
    		"&url="+document.getElementById("url").value+
    		"&gender="+document.getElementById("gender").value+
    		"&age="+document.getElementById("age").value+
    		"&credit="+document.getElementById("credit").value+
    		"&ssn="+document.getElementById("ssn").value+
    		"&password="+document.getElementById("password").value+
    		"&phone="+document.getElementById("phone").value
    		, true); 
   

    xmlHttp.send(null); 
    xmlHTTPRequest.onreadystatechange= displayOutput;
    
}
  function displayOutput(){
	document.getElementById("output").innerHTML ="Values are hashed and successfully stored in database";  
  }
</script> 
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        
        <div align = "center">
          
                <form action ="RegisterInDatabase" style="background: #fafafa;
	padding: 20px;
	width: 500px;
	margin: 0 auto;
	border: 1px solid black;">
                    <h2 align = "center"> Registration Page</h2>
                    <table align = "center" style ="border-spacing:20px">
                        <tr><td>Name:</td><td> <input type ="text" name ="name" id ="name" placeholder = "Enter First Name and Last Name" required ><br></td>

                        <tr><td>Email: </td><td><input type ="text" name = "email" id ="email" placeholder = "Enter email-id" required><br></td>

                        <tr><td>SSN:</td><td><input type="text" name="ssn" id ="ssn" placeholder="XXX-XX-XXXX" required/></td></tr>

                        <tr><td>Phone:</td><td><input type ="text" name ="phone" id="phone" placeholder="XXX-XXX-XXXX" required></td></tr>  
                        <tr><td>URL:</td><td><input type ="text" name ="url" id ="url"></td></tr>  

                        <tr><td>Password: </td><td><input type ="password" name = "password" id="password" placeholder = "Enter password"  title="Password must contain at least three uppercase letters, at least two lowercase letters,
                                                          and two special characters." required></td><td>


                        <tr><td>Age :</td><td><input type ="text" name ="age" id ="age" ></td></tr>

                        <tr><td>Gender:</td><td><input type = "text" name ="gender" id="gender"></td></tr>                       

                        <tr><td>Credit card number:</td><td><input type ="text" name ="credit" id="credit" placeholder="XXXX-XXXX-XXXX-XXXX"></td></tr>


                    </table>  

                    <input type ="button" name = "submit" value = "Create" style="	position: relative;
                           padding: 10px 40px;
                           border-radius: 10px;
                           font-family: 'Pacifico', cursive;
                           font-size: 15px;
                           color: black;                          
                          " onClick = "calc()"; ><br><br>
                   <p id = "output">
                </form>

                   </div>
    </body>
</html>
