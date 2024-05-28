import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainSectionComponent } from "./main-section/main-section.component";

import { TranslateService, TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ImprintComponent } from "./imprint/imprint.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, MainSectionComponent, HeaderComponent, FooterComponent, TranslateModule, HttpClientModule, ImprintComponent, PrivacyPolicyComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {
    // title = "my-portfolio";
    constructor(private translate: TranslateService) {
        // Get the saved language from localStorage or default to browser language
        const savedLanguage = localStorage.getItem("appLanguage");
        const browserLang = this.translate.getBrowserLang();

        // Use the saved language if available, otherwise use the browser language if supported, or fallback to the default language
        if (savedLanguage) {
            this.translate.use(savedLanguage);
        } else if (browserLang && browserLang.match(/en|de/)) {
            this.translate.use(browserLang);
        } else {
            this.translate.use("en");
        }
    }

    switchLanguage(language: string) {
        this.translate.use(language);

    }
}
