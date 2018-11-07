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
    "<form id='form1' name='form1'Onsubmit  ='Onsubmit()'<td>"
    document.getElementById("outputDiv").innerHTML += "Title:<input name='name' type='text' id='name'/></td> <br>"
    document.getElementById("outputDiv").innerHTML += "<td> Body: <input name='address' type='text' id='address'/> <br></td>"
    document.getElementById("outputDiv").innerHTML +="  <input type='submit' value= 'submit '>" 
}
Onsubmit ()
{
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'form.name',
      body: 'form.address',
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

}


}
