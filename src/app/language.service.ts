import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  isGerman = true;
  langauge = localStorage.getItem('appLanguage');

  constructor() { 
    if(this.langauge === 'de'){
      this.isGerman = true;
    } else if( this.langauge === 'en') {
      this.isGerman = false;
    }
  }
}
