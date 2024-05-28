import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


export const routes: Routes = [
    { path: '', component: MainSectionComponent },
    { path: 'impressum', component: ImprintComponent },
    { path: 'datenschutz', component: PrivacyPolicyComponent }
];




