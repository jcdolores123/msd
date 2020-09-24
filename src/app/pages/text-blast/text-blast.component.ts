import { Component, OnInit } from '@angular/core';
import { HttpClient} from '../../services/http.services'

@Component({
  selector: 'app-text-blast',
  templateUrl: './text-blast.component.html',
  styleUrls: ['./text-blast.component.scss']
})
export class TextBlastComponent implements OnInit {
  contactList;
  emailAddressArray= []
  constructor(
    private http : HttpClient
  ) { }

  ngOnInit() {

    this.http.getContactsPage().subscribe( (data:any) =>{
      this.contactList = data;

    },error=> console.log(error))

  }

  checkEmailValue(event, type, contact){
    // console.log(type)
    // console.log(event.target.checked)

    if(contact && contact.email && event.target.checked){
      this.emailAddressArray.push(contact.email)
    }
    else if(!event.target.checked){
        if(this.emailAddressArray.indexOf(contact.email) >=0){
          let spliceIndex = this.emailAddressArray.indexOf(contact.email);
          this.emailAddressArray.splice(spliceIndex, 1)
        }
    }
    // console.log(this.emailAddressArray)
  }

  getMessage(){
    let messageDom = document.getElementById('textblast')
    console.log(messageDom['value'])
    return messageDom['value'];
  }

  postMessage(){

    this.http.postEmail(this.emailAddressArray, this.getMessage()).subscribe( (data:any) =>{
      this.contactList = data;

    },error=> console.log(error))

  }

}
