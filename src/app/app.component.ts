import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";
import { Title, Meta } from "@angular/platform-browser";
import { LanguageService } from "src/app/services/language/language.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "debarghya-portfolio";

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ) {}
  ngOnInit(): void {
    this.languageService.initLanguage();

    this.titleService.setTitle("Debarghya Mondal | Frontend Developer");
    this.metaService.addTags([
      {
        name: "keywords",
        content:
          "Debarghya Mondal, Frontend Developer, Software Engineer, software, developer",
      },
      {
        name: "description",
        content:
          "I'm a Software Engineer ( Frontend Developer ) at Degpeg, Graduated from MVJCE, Bengaluru. I have 2+ years of experience in Angular & React with proficiency in web technologies like HTML5, CSS3, JavaScript, building large-scale web applications, cross-browser platforms, and design constraints on the web, and building responsive user interfaces. ",
      },
    ]);

    AOS.init();
  }
}
