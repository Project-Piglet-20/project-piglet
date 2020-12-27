import React from "react";
import moment from "moment";

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-dept-0 red darken-1">
        <div className="card-content">
          <span className="card-title white-text">
            <b>Notifications</b>
          </span>
          <div className="divider black"></div>
          <ul className="notifications white-text">
            {notifications &&
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
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
