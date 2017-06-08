import Home from './apps/home/';
import ReportBuilder from './apps/reportBuilder/';
//Events Admin
import AdminEvents from './apps/events/admin';
import AdminBrowseEvents from './apps/events/admin/Browse';
import AdminManageEvents from './apps/events/admin/Manage';
import AdminEvent from './apps/events/admin/Event';
import AdminCreate from './apps/events/admin/Create';
import AdminEdit from './apps/events/admin/Edit';

import SaveButtons from './apps/buttons/Save';

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
    component: AdminEvents,
    linkName: "Events",
    path: '/events/admin/',
    exact: true
  },
  {
    component: SaveButtons,
    linkName: "Saving Buttons",
    path: '/buttons/saving/',
    exact: true
  },
  {
    component: AdminBrowseEvents,
    path: '/events/admin/browse-upcoming'
  },
  {
    component: AdminManageEvents,
    path: '/events/admin/manage'
  },
  {
    component: AdminEvent,
    path: '/events/admin/view/:id'
  },
  {
    component: AdminCreate,
    path: '/events/admin/create'
  },
   {
    component: AdminEdit,
    path: '/events/admin/edit'
  }
]