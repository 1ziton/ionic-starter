import { ListMasterPage } from './list-master/list-master';
import { SearchPage } from './search/search';
import { SettingsPage } from './settings/settings';
import { TabsPage } from './tabs/tabs';
import { TutorialPage } from './tutorial/tutorial';

// The page the user lands on after opening the app and without a session
export let FirstRunPage = TutorialPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export let MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export let Tab1Root = ListMasterPage;
export let Tab2Root = SearchPage;
export let Tab3Root = SettingsPage;
