import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";
import {HomePage} from "../home/home";
import {TaskPage} from "../task/task";
import {CoursePage} from "../course/course";
import {MyPage} from "../my/my";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // should be each tab's root Page
  homeView: any = HomePage;
  taskView: any = TaskPage;
  courseView: any = CoursePage;
  userCenterView: any = MyPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
