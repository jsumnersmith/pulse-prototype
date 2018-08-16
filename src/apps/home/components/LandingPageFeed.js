import React from 'react';
import moment from 'moment';
import './landingPageFeed.less';

export default ({items}) => (
  <div className="landing-feed block-flat">
    {items.map(item => <LandingFeedItem {...item} />)}
  </div>
)

const getIconForType = (typeName) => {
  if (typeName === 'event'){
    return 'fa-calendar-alt';
  } else if (typeName === 'response' || typeName === 'report') {
    return 'fa-file-text-o';
  } else {
    return 'fa-line-chart';
  }
}

const getColorForType = (typeName) => {
  if (typeName === 'event'){
    return 'green';
  } else if (typeName === 'response' || typeName === 'report') {
    return 'pulse-blue';
  } else {
    return 'purple';
  }
}

const getTextForType = (typeName) => {
  if (typeName === 'event'){
    return 'See Event';
  } else if (typeName === 'response' || typeName === 'report') {
    return 'Browse Report';
  } else {
    return 'See Details';
  }
}

const LandingFeedItem = ({title = "", type = "", date = new Date(), isTeacher = false}) => (
  <div className="feed-item">
    <div className="feed-item__date meta">
      <div className="feed-item__month">
        {moment(date).format('MMM')}
      </div>
      <div className="feed-item__day">
        {moment(date).format('DD')}
      </div>
      <div className="feed-item__year">
        {moment(date).format('YYYY')}
      </div>
    </div>
    <div className="feed-item__content">
      <div className="feed-item__type"><i className={`far ${getIconForType(type)} circle-icon circle-icon--small ${getColorForType(type)}`} /> <span className="meta">{type}</span></div>
      <h5 className="feed-item__title">{title}</h5>
    </div>
    { isTeacher ? null :
      <div className="feed-item__action">
        <a className="btn btn-sm btn-block">{getTextForType(type)}</a>
      </div>
    }
  </div>
)