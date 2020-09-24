import { Component, OnInit } from '@angular/core';

import { HttpClient} from '../../services/http.services'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.getHomePage().subscribe( (data:any) =>{
      console.log(data)

    },error=> console.log(error))


    
  }

}
