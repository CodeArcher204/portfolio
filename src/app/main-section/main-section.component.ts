import { Component } from '@angular/core';
import { AboveTheFoldComponent } from '../above-the-fold/above-the-fold.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsSectionComponent } from '../skills-section/skills-section.component';
import { ContactSectionComponent } from '../contact-section/contact-section.component';
import { PortfolioSectionComponent } from '../portfolio-section/portfolio-section.component';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [AboveTheFoldComponent, AboutMeComponent, SkillsSectionComponent, PortfolioSectionComponent , ContactSectionComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {

}
