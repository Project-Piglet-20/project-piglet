import React from "react";
import moment from "moment";

const Notifications = (props) => {
  const { notifications } = props;
  const notificationList = notifications ? (
    notifications.map((notification) => {
      return (
        <li key={notification.id}>
          <span>
            <b>{notification.problem}</b> reported in{" "}
            <b>{notification.locality}</b>
          </span>
          <div className="grey-text note-date">
            {moment(notification.time.toDate()).fromNow()}
          </div>
        </li>
      );
    })
  ) : (
    <p className="white-text">No pending issues</p>
  );
  return (
    <div className="section">
      <div className="card z-dept-0 red darken-1">
        <div className="card-content">
          <span className="card-title white-text">
            <b>Notifications</b>
          </span>
          <div className="divider black"></div>
          <ul className="notifications white-text">
            {/* {notifications &&
              notifications.map((notification) => {
                return (
                  <li key={notification.id}>
                    <span>
                      <b>{notification.problem}</b> reported in{" "}
                      <b>{notification.locality}</b>
                    </span>
                    <div className="grey-text note-date">
                      {moment(notification.time.toDate()).fromNow()}
                    </div>
                  </li>
                );
              })} */}
            {notificationList}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
