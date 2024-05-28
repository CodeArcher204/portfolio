import { Component } from '@angular/core';
import { PortfolioCardComponent } from '../portfolio-card/portfolio-card.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [PortfolioCardComponent, TranslateModule],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.scss'
})
export class PortfolioSectionComponent {

}
