import {Component} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {cmDroplet, cmMic, cmHome} from "../icons/index";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-svg';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitzer: DomSanitizer) {
    this.matIconRegistry.addSvgIconLiteral('droplet', this.domSanitzer.bypassSecurityTrustHtml(cmDroplet.data));
    this.matIconRegistry.addSvgIconLiteral('home', this.domSanitzer.bypassSecurityTrustHtml(cmHome.data));
    this.matIconRegistry.addSvgIconLiteral('mic', this.domSanitzer.bypassSecurityTrustHtml(cmMic.data));
  }
}
