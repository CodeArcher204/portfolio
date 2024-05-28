import { NgClass, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@Component({
    selector: "app-contact-form",
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, NgClass, TranslateModule, RouterModule],
    templateUrl: "./contact-form.component.html",
    styleUrl: "./contact-form.component.scss",
})
export class ContactFormComponent implements OnInit {
    contactForm: FormGroup = new FormGroup({});
    mailTest = false;
    msgSend = false;

    post = {
        endPoint: "https://oumout-resit-ismail.de/sendMail.php",
        body: (payload: any) => JSON.stringify(payload),
        options: {
            headers: {
                "Content-Type": "text/plain",
                responseType: "text" as "json",
            },
        },
    };

    constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

    goToPrivacy() {
        const url = this.router.serializeUrl(this.router.createUrlTree(["/datenschutz"]));
        window.open(url, "_blank");
    }

    ngOnInit(): void {
        this.contactForm = this.fb.group({
            name: ["", [Validators.required]],
            email: ["", [Validators.required, Validators.email]],
            message: ["", [Validators.required]],
            privacyPolicy: [false, [Validators.requiredTrue]],
        });
    }

    onSubmit(): void {
        if (this.contactForm.valid && !this.mailTest) {
            this.http.post(this.post.endPoint, this.post.body(this.contactForm.value), this.post.options).subscribe({
                next: (response) => {
                    console.log(response);
                    this.contactForm.reset();
                },
                error: (error) => {
                    console.error(error);
                },
                complete: () => {
                    this.msgSend = true;
                    setTimeout(() => {
                        this.msgSend = false;
                    }, 2000);
                },
            });
        } else if (this.contactForm.valid && this.mailTest) {
            this.contactForm.reset();
        }
    }
}
