import Home from './apps/home/';
import ReportBuilder from './apps/reportBuilder/';
import Events from './apps/events';
import BrowseEvents from './apps/events/Browse';
import ManageEvents from './apps/events/Manage';
import Event from './apps/events/Event'
import Create from './apps/events/Create'
import Edit from './apps/events/Edit'

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
  },
  {
    component: Event,
    path: '/events/view/:id'
  },
  {
    component: Create,
    path: '/events/create'
  },
   {
    component: Edit,
    path: '/events/edit'
  }
]