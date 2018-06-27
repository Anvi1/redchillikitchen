import { Component, OnInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  disableIcon: boolean;
  showHamb: boolean;
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHamb = event.url === "/chillymenu";
        this.disableIcon = event.url === "/chillycart";
      }
    });
  }
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private router: Router
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.router.navigate(['/chillymenu'])
    });
  }

  goBack() {
    window.history.back();
  }
}

