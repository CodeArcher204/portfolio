import { Component, inject, } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../language.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [TranslateModule, NgClass],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent  {
  public service = inject(LanguageService);
}
