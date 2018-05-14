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
import AdminSubmittedEvent from './apps/events/admin/SubmittedEvent';
import AdminSignupSheet from './apps/events/admin/SignupSheet'

//Events - Normal User
import UserEvents from './apps/events/user';
import UserBrowseEvents from './apps/events/user/Browse';
import UserManageEvents from './apps/events/user/Manage';
import UserEvent from './apps/events/user/Event';
import UserSubmit from './apps/events/user/Submit';
import UserSubmittedEvent from './apps/events/user/SubmittedEvent';
import UserSuccess from './apps/events/user/Success';

import FormBuilder from './apps/formBuilder';
import ScaleQuestions from './apps/formBuilder/ScaleQuestions';
import QuestionEditors from './apps/formBuilder/QuestionEditors';

import ManageDataSources from './apps/manageDataSources';
import ManageDataSourcesQueue from './apps/manageDataSources/Queue';

import MultireferentForm from './apps/multireferentForm';
import MultireferentFormAdd from './apps/multireferentForm/AddForm';

import Folders from './apps/folders';

import Directory from './apps/directory';
import DirectoryGroups from './apps/directory/Groups.js'
import DirectoryEntities from './apps/directory/Entities.js'
import DirectoryEdit from './apps/directory/Edit.js'
import DirectoryProfile from './apps/directory/Profile.js'
import DirectoryEditEntity from './apps/directory/EditEntity.js'
import DirectoryGroupEdit from './apps/directory/EditGroup.js'

// Components
import Visualizations from './components/visualizations';
import LoadingStates from './components/loadingStates';
import SaveButtons from './components/buttons/Save';
import ReportManageButtons from './components/buttons/ReportManage';
import NameCreator from './components/nameCreator';
import PermissionButtons from './components/permissionButtons';
import RubricColors from './components/rubricColors';
import MultipleChoiceGrouping from './components/multipleChoiceGrouping';
import TabbedContainer from './components/tabbedContainer';
import Sharing from './components/sharing';

//Styles
import Grid from './styles/grid';

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
    component: ManageDataSources,
    linkName: "Manage Data Sources",
    parent: 'Apps',
    path: '/manage/data-sources/',
    exact: true
  },
  {
    component: ManageDataSourcesQueue,
    path: '/manage/data-sources/queue',
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
    component: ReportManageButtons,
    linkName: "Report Manage Button",
    parent: 'Components',
    path: '/buttons/reports/',
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
    component: Directory,
    linkName: "Directory",
    parent: 'Apps',
    path: '/directory/',
    exact: true
  },
  {
    component: DirectoryGroups,
    path: '/directory/groups',
    exact: true
  },
  {
    component: DirectoryEntities,
    path: '/directory/entities',
    exact: true
  },
  {
    component: DirectoryEdit,
    path: '/directory/edit/:id',
    exact: true
  },
  {
    component: DirectoryProfile,
    path: '/directory/profile/:id',
    exact: true
  },
  {
    component: DirectoryEditEntity,
    path: '/directory/edit/entity/:id',
    exact: true
  },
  {
    component: DirectoryGroupEdit,
    path: '/directory/groups/edit/:id'
  },
  {
    component: Visualizations,
    linkName: "Visualizations",
    parent: 'Components',
    path: '/visualizations/',
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
    component: TabbedContainer,
    linkName: "Tabbed Container",
    parent: 'Components',
    path: '/tabbed-container/',
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
    path: '/events/admin/view/:id',
    exact: true
  },
  {
    component: AdminSignupSheet,
    path: '/events/admin/view/:id/sheet'
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
    component: AdminSubmittedEvent,
    path: '/events/admin/submissions/:id'
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
  {
    component: UserSuccess,
    path: '/events/success'
  },
  {
    component: UserSubmittedEvent,
    path: '/events/submissions/:id'
  },
  {
    component: Sharing,
    linkName: "Sharing",
    parent: 'Components',
    path: '/sharing'
  },
  {
    component: Grid,
    path: '/styles/grid',
    linkName: "Grid",
    parent: 'Styles',
  }
]