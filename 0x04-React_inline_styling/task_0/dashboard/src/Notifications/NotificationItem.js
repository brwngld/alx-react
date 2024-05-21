
import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';



class NotificationItem extends React.PureComponent {

  render() {
    const { type, html, value, id, markAsRead} = this.props
  
  if (type && value) {
      return <li data-priority={type} onClick={() => markAsRead(id)}>{value}</li>;
  }
  return <li data-priority={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>;
}
}


NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  value: PropTypes.string,
  id: PropTypes.number,
}
NotificationItem.defaultProps = {
  type: 'default',
  html: {},
  value: '',
  id: 0,
};



export default NotificationItem;