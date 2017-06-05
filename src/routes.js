import Home from './apps/home/';
import ReportBuilder from './apps/reportBuilder/';
import Events from './apps/events';
import BrowseEvents from './apps/events/Browse';
import ManageEvents from './apps/events/Manage';

export default [
  {
    component: Home,
    linkName: "Home",
    path: '/',
    exact: true
  },
  {
    component: ReportBuilder,
    linkName: "Report Builder",
    path: '/report-builder'
  },
  {
    component: Events,
    linkName: "Events",
    path: '/events',
    exact: true
  },
  {
    component: BrowseEvents,
    path: '/events/browse-upcoming'
  },
  {
    component: ManageEvents,
    path: '/events/manage'
  }
]