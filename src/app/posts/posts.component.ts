import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute,RouterModule } from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {


  posts$: Object;
  
  constructor(private data: DataService) { }

  ngOnclick() {
    document.getElementById("outputDiv").innerHTML = 
    "<form (onsubmit) ='formValidation()'><br>"
    document.getElementById("outputDiv").innerHTML += " <label>Title:</label>  <input type='text' id='title'/><br /> <p id='p1'></p>	"
    document.getElementById("outputDiv").innerHTML += "  <label>Body</label>  <input type='text' id='body' /><br />   <p id='p2'></p> "
    //document.getElementById("outputDiv").innerHTML +="<button style='border-radius: 2px;  border: none;font-size: 16px; margin: 4px 2px; cursor: pointer;' onclick= 'formValidation()' > Validate the Form </button>"
    document.getElementById("outputDiv").innerHTML +="</form>"



    

    //document.getElementById("outputDiv2").innerHTML +="<button style='border-radius: 2px;  border: none;font-size: 16px; margin: 4px 2px; cursor: pointer;' (click)= 'formValidation()' > Validate the Form </button> </form>"



  



   
   
    
  
  //   <button style='border-radius: 2px;  border: none;font-size: 16px; margin: 4px 2px; 
  //cursor: pointer;' (click)= 'formValidation()' > Validate the Form </button> </form>

}

/// 


formValidation(){

	// Make quick references to our fields
  var title =  document.getElementById('title');
	var body =  document.getElementById('body');
	
	
	// Check each input in the order that it appears in the form!
	 if(this.textAlphanumeric(title, "* For title please use alphanumeric only *")){
		
		if(this.lengthDefine(title, 1, 24)){
      return true;

    }
  
  }



    
      
      if(this.lengthDefinebody(body, 1, 54)){
		   // if(this.emailValidation(email, "* Please enter a valid email address *")){
		
		       // if(this.trueSelection(state, "* Please Choose any one option")){
					
				
						  return true;
						
          
        
  
				
			
		
	}
	
	
	return false;
	
}

//function that checks whether input text is numeric or not.

 


//function that checks whether input text is an alphabetic character or not.




 textAlphanumeric(inputtext, alertMsg){
	var alphaExp = /^[0-9a-zA-Z]+$/;
	if(inputtext.value.match(alphaExp)){
		return true;
	}else{
    //document.getElementById(id).innerText = alertMsg; //this segment displays the validation rule for address
    document.getElementById('p1').innerText = alertMsg; //this segment displays the validation rule for address
		inputtext.focus();
		return false;
	}
}

// Function that checks whether the input characters are restricted according to defined by user.

lengthDefine(inputtext, min, max){
	var uInput = inputtext.value;
	if(uInput.length >= min && uInput.length <= max){
		return true;
	}else{
	//	document.getElementById(id).innerText = "* Please enter between " +min+ " and " +max+ " characters *"; 
   document.getElementById('p1').innerText = "* Please enter between " +min+ " and " +max+ " characters *"; 
    		inputtext.focus();
		return false;
	}
}



// Function that checks whether the input characters are restricted according to defined by user.

lengthDefinebody(inputtext, min, max){
	var uInput = inputtext.value;
	if(uInput.length >= min && uInput.length <= max){
		return true;
	}else{
		//document.getElementById(id).innerText = "* Please enter between " +min+ " and " +max+ " characters *"; 
   document.getElementById('p2').innerText = "* Please enter between " +min+ " and " +max+ " characters *"; 
    		inputtext.focus();
		return false;
  }
}

}









