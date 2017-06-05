import Home from './apps/home/index';
import ReportBuilder from './apps/reportBuilder/index';

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
  }
]