import { CommonModule } from "@angular/common";
import { Component, HostListener, Renderer2, inject } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { LanguageService } from "../language.service";
@Component({
    selector: "app-header",
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
})
export class HeaderComponent {
    isBurgerMenuVisible = false;
    isBurgerMenuOpen = false;
    burgerIconSrc = "./assets/img/icons/burger_menu.png";
    private service = inject(LanguageService);

    constructor(private translate: TranslateService, private renderer: Renderer2) {
        this.onResize();
    }

    @HostListener("window:resize", ["$event"])
    onResize(event?: Event) {
        this.isBurgerMenuVisible = window.innerWidth <= 1000;
    }

    toggleBurgerMenu() {
        this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
        this.burgerIconSrc = this.isBurgerMenuOpen ? "./assets/img/icons/burger_menu_close.png" : "./assets/img/icons/burger_menu.png";
    }

    switchLanguageEn(language: string) {
        this.service.isGerman = false;
        this.translate.use(language);
        localStorage.setItem("appLanguage", language);
    }
    switchLanguageDe(language: string) {
        this.service.isGerman = true;
        this.translate.use(language);
        localStorage.setItem("appLanguage", language);
    }
}
