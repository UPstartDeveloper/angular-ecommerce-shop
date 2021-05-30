import { Component } from "@angular/core";
import { CourseService } from "./course.service";

@Component({
    selector: 'courses',
    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    `
})
export class CoursesComponent {

    email = "hello@zainraza.me";  // just an initial value

    onKeyUp( ) {
        console.log(this.email);
    }
}