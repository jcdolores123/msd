import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  route
  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
      } else {
        this.route = "/home";
      }
    });
  }

  ngOnInit() {
  }

  showDocuments(){
    document.getElementById('sidebar-slide').className += ' open-slide'
    document.getElementById('close-layer').className += ' visible'
    
  }

  hideDocuments(){
    document.getElementById('sidebar-slide').className += 'sidebar-slide'
    document.getElementById('close-layer').className = 'close-layer'
  }

}
