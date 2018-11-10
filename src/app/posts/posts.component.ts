import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute,RouterModule } from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  //styleUrls: ['./posts.component.css']
})
export class PostsComponent  {


  posts$: Object;
  public createPost = false;

  constructor(private data: DataService) { }

  ngOnclick() {
    //console.log('method');
    this.createPost = true;
  }

///


  formValidation(){
    console.log('method1');

    // Make quick references to our fields
    var title =  document.getElementById('title');
    var body =  document.getElementById('body');


    // Check each input in the order that it appears in the form!
    if(this.textAlphanumeric(title, "* For title please use alphanumeric only *")) {

      document.getElementById('p1').innerText = "inValid Entry ";

      if (this.lengthDefine(title, 1, 24)) {
        document.getElementById('p1').innerText = "Valid Entry ";

      }
    }







    if(this.lengthDefinebody(body, 1, 54)){
      // if(this.emailValidation(email, "* Please enter a valid email address *")){

      // if(this.trueSelection(state, "* Please Choose any one option")){

      document.getElementById('p2').innerText = "Valid Entry";

      //return true;







    }


    return false;

  }

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








