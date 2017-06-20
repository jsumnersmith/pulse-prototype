import Home from './apps/home/';
import ReportBuilder from './apps/reportBuilder/';
//Events Admin
import AdminEvents from './apps/events/admin';
import AdminBrowseEvents from './apps/events/admin/Browse';
import AdminManageEvents from './apps/events/admin/Manage';
import AdminEvent from './apps/events/admin/Event';
import AdminCreate from './apps/events/admin/Create';
import AdminEdit from './apps/events/admin/Edit';

import UserEvents from './apps/events/user';
import UserBrowseEvents from './apps/events/user/Browse';
import UserManageEvents from './apps/events/user/Manage';
import UserEvent from './apps/events/user/Event';
import UserSubmit from './apps/events/user/Submit';

import TagList from './apps/tags';
import AttributeEditor from './apps/attributes';

import LoadingStates from './apps/loadingStates';

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
    component: UserEvents,
    linkName: "Events",
    path: '/events/',
    exact: true
  },
  {
    component: AdminEvents,
    linkName: "Events - Admin",
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
    component: LoadingStates,
    linkName: "Loading States",
    path: '/loading/',
    exact: true
  },
  {
    component: TagList,
    linkName: "Tag Manager",
    path: '/tags/',
    exact: true
  },
  {
    component: AttributeEditor,
    linkName: "Attributes",
    path: '/attributes/',
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
  },
  {
    component: UserBrowseEvents,
    path: '/events/browse-upcoming'
  },
  {
    component: UserManageEvents,
    path: '/events/manage'
  },
  {
    component: UserEvent,
    path: '/events/view/:id'
  },
  {
    component: UserSubmit,
    path: '/events/submit'
  },
]