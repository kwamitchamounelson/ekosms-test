import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  constructor() { }

  login = '98641@ekomarkethubsas';
  password = 'dhsazehA';
  baseUrlEkosmsNew = 'https://api.ekotech.cm/messages?';


  /**
   * cette fonction appelle l'api de ekosms
   * @param phoneNumbers liste des numero de telephones separes par la virgule
   * @param message message a envoyer
   */
  sendSMSUsingHttpEkomarkedNew(phoneNumbers: string, message: string) {
    let data = null;
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open('GET', this.buildSmsUrlRequestNew(phoneNumbers, message));
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.send(data);
  }


  /**
   * cette fonction permet de formater la requette dinale qui sera envoyee
   * a partir des numeros de telephones et du message
   * exemple:
   * https://api-public.mtarget.fr/api-sms.json?username=98641@ekomarkethubsas&password=A_xGHRer&msisdn=%2B237690935868&msg=bonjour&sender=VENOP
   * @param phoneNumbers liste des numeros de telephone
   * @param message message a envoyer
   */
  private buildSmsUrlRequestNew(phoneNumbers: string, message: string): string {
    let cleanPhoneList = phoneNumbers
      .split('+')
      .filter((v, i, a) => a.indexOf(v) === i)
      .join('%2B');
    return this.baseUrlEkosmsNew + 'username=' + this.login + '&password=' + this.password + '&msisdn=' + cleanPhoneList + '&msg=' + message + '&sender=VENOP';
  }

}
