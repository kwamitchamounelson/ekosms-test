import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SmsService } from './services/sms/sms.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ekosms-test';

  myForm: FormGroup;

  constructor(
    private smsService: SmsService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * initialisation du formulaire
   */
  initForm() {
    this.myForm = new FormGroup({
      phone: new FormControl(''),
      message: new FormControl('')
    });
  }

  //permet de recuperer le numero de telephone dans le formulaire
  get phone() {
    return this.myForm.get('phone');
  }

  //permet de recuperer le messade dans le formulaire
  get message() {
    return this.myForm.get('message');
  }


  /**
   * envoi du message
   */
  envoyerMessage() {
    let numeroTelephone: string = this.phone.value;
    let message: string = this.message.value;
    //appele de la fonction
    this.smsService.sendSMSUsingHttpEkomarkedNew(numeroTelephone, message);
  }
}
