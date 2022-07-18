import {Component, OnInit, ViewChild} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {Page2Component} from "./page2/page2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RoomBookingApp';

  @ViewChild('footer', {static: true})
  footerComponent: FooterComponent = new FooterComponent();

  @ViewChild('page2', {static: true})
  page2Component: Page2Component = new Page2Component();

  startTime: string = '';

  ngOnInit(): void {
    this.startTime = new Date().toString();
  }

  updateLastAccessed(): void {
    this.footerComponent.lastAccessed = new Date().toString();
  }

  incrementHitsCounter(): void {

  }

}
