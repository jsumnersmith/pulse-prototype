import Home from './apps/home/';
import ReportBuilder from './apps/reportBuilder/';
import Events from './apps/events';

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
    path: '/events'
  }
]