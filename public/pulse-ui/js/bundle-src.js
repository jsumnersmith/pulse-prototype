'use strict';

window.require = require;

window.React = require('react');
window.ReactDOM = require('react-dom');

require('lodash');
require('moment');
require('chroma-js');
require('react-datepicker');

// We have to pre-require these so that gulp bundles them
// This path thing doesn't feel good, but . . .
require('./components/activityFeed.react.js');
require('./components/attributeSelector.react.js');
require('./components/cards/barchartcard.react.js');
require('./components/charts/data/goal.js');
require('./components/colors.js');
require('./components/commentCardGroup.react.js');
require('./components/commentCardHistoryList.react.js');
require('./components/complexBarChart.react.js');
require('./components/events/attendanceSummaryTable.react.js');
require('./components/events/attendanceTable.react.js');
require('./components/events/eventCard.react.js');
require('./components/events/eventGlobalSearch.react.js');
require('./components/events/eventList.react.js');
require('./components/events/eventSummaryList.react.js');
require('./components/events/eventTable.react.js');
require('./components/events/sampleEvents.js');
require('./components/events/sampleSubmittedEvents.js');
require('./components/fileDropzone.react.js');
require('./components/groupingsListTable.react.js');
require('./components/iconButton.react.js');
require('./components/list.react.js');
require('./components/listBody.react.js');
require('./components/listHeader.react.js');
require('./components/listTable.react.js');
require('./components/loadingModal.react.js');
require('./components/multipleChoiceResponse.react.js');
require('./components/multipleChoiceResult.react.js');
require('./components/multiSelectSort.react.js');
require('./components/nameCreator.react.js');
require('./components/percentPieChart.react');
require('./components/progressBar.react.js');
require('./components/responseItem.react.js');
require('./components/rubric.react.js');
require('./components/search.react.js');
require('./components/searchWithFilters.react.js');
require('./components/surveysList.react.js');
require('./components/surveysExploreList.react.js');
require('./components/tag.react.js');
require('./components/textEditor.react.js');
require('./components/timeline.react.js');
require('./components/viewMore.react.js');
require('./components/events/sampleEvents.js');
require('./components/events/sampleSubmittedEvents.js');
require('./components/events/eventList.react.js');
require('./components/events/eventCard.react.js');
require('./components/events/eventSummaryList.react.js');
require('./components/events/eventTable.react.js');
require('./components/fileDropzone.react.js');
require('./components/textEditor.react.js');
require('./components/events/attendanceTable.react.js');
require('./components/events/approvalTable.react.js');
require('./components/events/attendanceSummaryTable.react.js');
require('./components/events/eventGlobalSearch.react.js');