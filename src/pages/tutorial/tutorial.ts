import {Component} from "@angular/core";
import {MenuController, NavController} from "ionic-angular";
import {WelcomePage} from "../welcome/welcome";


export interface ISlide {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: ISlide[];
  showSkip = true;

  constructor(public navCtrl: NavController, public menu: MenuController) {
      this.slides = [
          {
              title: "欢迎使用家装通",
              description: "The <b>Ionic Super Starter</b> is a fully-featured Ionic starter with many pre-built pages and best practices.",
              image: 'assets/img/ica-slidebox-img-1.png',
          },
          {
              title: "第二张",
              description: "描述",
              image: 'assets/img/ica-slidebox-img-2.png',
          },
          {
              title: "第三张",
              description: "描述",
              image: 'assets/img/ica-slidebox-img-3.png',
          }
      ];
  }

  startApp() {
    this.navCtrl.setRoot(WelcomePage, {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd;
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
