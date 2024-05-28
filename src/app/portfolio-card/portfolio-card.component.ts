import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {  TranslateService } from "@ngx-translate/core";

@Component({
    selector: "app-portfolio-card",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./portfolio-card.component.html",
    styleUrl: "./portfolio-card.component.scss",
})
export class PortfolioCardComponent {
    projects: any[] = [];

    constructor(private translate: TranslateService) {
      this.translate.onLangChange.subscribe(() => {
        this.loadProjects();
      });
  
      this.loadProjects();
    }
  
    loadProjects() {
      this.translate.get('projects').subscribe((projects) => {
        this.projects = projects;
      });
    }
}
