import { Component } from "@angular/core";
import { CourseService } from "./course.service";

@Component({
    selector: 'courses',
    template: `
        <h2>{{ "Title: " + getTitle() }}</h2>

        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        <ul>
        
        `
})
export class CoursesComponent {
    title = "List of Courses";
    courses;

    constructor() {
        let service = new CourseService();
        this.courses = service.getCourses();
    }

    getTitle = () => {
        return this.title;
    }
}