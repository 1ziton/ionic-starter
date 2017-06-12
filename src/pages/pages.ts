import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TutorialPage} from './tutorial/tutorial';
import {HomePage} from './home/home';
import {TaskPage} from './task/task';
import {TabsPage} from  './tabs/tabs';
import {CoursePage} from  './course/course';
import {MyPage} from  './my/my';
@NgModule({
    declarations: [
        TutorialPage,
        MyPage,
        CoursePage,
        TabsPage,
        HomePage,
        TaskPage
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
    ],
    entryComponents: [
        TutorialPage,
        MyPage,
        CoursePage,
        TabsPage,
        HomePage,
        TaskPage
    ],
    exports: [
        TutorialPage,
        HomePage,
        CoursePage,
        MyPage,
        TabsPage,
        TaskPage
    ]
})
export class HomePageModule {
}

export const FirstRunPage = TutorialPage;

export const MainPage = TabsPage;
