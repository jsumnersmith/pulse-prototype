import Home from './apps/home/';

//Simple Apps
import ReportBuilder from './apps/reportBuilder/';
import TagList from './apps/tags';
import AttributeEditor from './apps/attributes';

//Events - Admin User
import AdminEvents from './apps/events/admin';
import AdminBrowseEvents from './apps/events/admin/Browse';
import AdminManageEvents from './apps/events/admin/Manage';
import AdminEvent from './apps/events/admin/Event';
import AdminCreate from './apps/events/admin/Create';
import AdminEdit from './apps/events/admin/Edit';

//Events - Normal User
import UserEvents from './apps/events/user';
import UserBrowseEvents from './apps/events/user/Browse';
import UserManageEvents from './apps/events/user/Manage';
import UserEvent from './apps/events/user/Event';
import UserSubmit from './apps/events/user/Submit';

import FormBuilder from './apps/formBuilder';
import ScaleQuestions from './apps/formBuilder/ScaleQuestions';
import QuestionEditors from './apps/formBuilder/QuestionEditors';

import MultireferentForm from './apps/multireferentForm';
import MultireferentFormAdd from './apps/multireferentForm/AddForm';

import Folders from './apps/folders';

// Components
import LoadingStates from './components/loadingStates';
import SaveButtons from './components/buttons/Save';
import NameCreator from './components/nameCreator';
import PermissionButtons from './components/permissionButtons';
import RubricColors from './components/rubricColors';
import MultipleChoiceGrouping from './components/multipleChoiceGrouping';

export default [
  {
    component: Home,
    linkName: "Home",
    parent: false,
    path: '/',
    exact: true
  },
  {
    component: ReportBuilder,
    linkName: "Report Builder",
    parent: 'Apps',
    path: '/report-builder'
  },
  {
    component: UserEvents,
    linkName: "Events",
    parent: 'Apps',
    path: '/events/',
    exact: true
  },
  {
    component: AdminEvents,
    linkName: "Events - Admin",
    parent: 'Apps',
    path: '/events/admin/',
    exact: true
  },
  {
    component: FormBuilder,
    linkName: "Form Builder",
    parent: 'Apps',
    path: '/form-builder/',
    exact: true
  },
  {
    component: MultireferentForm,
    linkName: "Multireferent Form",
    parent: 'Apps',
    path: '/multi-form/',
    exact: true
  },
  {
    component: Folders,
    linkName: "Folders",
    parent: 'Apps',
    path: '/folders/',
    exact: true
  },
  {
    component: MultireferentFormAdd,
    path: '/multi-form/add',
  },
  {
    component: SaveButtons,
    linkName: "Saving Buttons",
    parent: 'Components',
    path: '/buttons/saving/',
    exact: true
  },
  {
    component: LoadingStates,
    linkName: "Loading States",
    parent: 'Components',
    path: '/loading/',
    exact: true
  },
  {
    component: TagList,
    linkName: "Tag Manager",
    parent: 'Components',
    path: '/tags/',
    exact: true
  },
  {
    component: AttributeEditor,
    linkName: "Attributes",
    parent: 'Apps',
    path: '/attributes/',
    exact: true
  },
  {
    component: NameCreator,
    linkName: "Name Creator",
    parent: 'Components',
    path: '/name-creator/',
    exact: true
  },
  {
    component: PermissionButtons,
    linkName: "Permissions Buttons",
    parent: 'Components',
    path: '/permission-buttons/',
    exact: true
  },
  {
    component: RubricColors,
    linkName: "Rubric Colors",
    parent: 'Components',
    path: '/rubric-colors/',
    exact: true
  },
  {
    component: MultipleChoiceGrouping,
    linkName: "Multiple Choice Groupings",
    parent: 'Components',
    path: '/multichoice/',
    exact: true
  },
  {
    component: ScaleQuestions,
    path: '/form-builder/scale-questions'
  },
  {
    component: QuestionEditors,
    path: '/form-builder/question-editors'
  },
  {
    component: AdminBrowseEvents,
    path: '/events/admin/browse'
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
    path: '/events/browse'
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