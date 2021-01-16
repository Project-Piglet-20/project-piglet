import React from "react";
import moment from "moment";

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-dept-0 red darken-1">
        <div className="card-content">
          <span className="card-title white-text">
            <b>
              NOTIFICATIONS<i className="material-icons left">campaign</i>
            </b>
          </span>
          <div className="divider black"></div>
          <ul className="notifications white-text">
            {notifications &&
              notifications.map((notification) => {
                return (
                  <div className="input-field">
                    <li key={notification.id}>
                      <i className="material-icons left black-text">arrow_right</i>
                      <span>
                        <b>{notification.problem}</b> reported in{" "}
                        <b>{notification.locality}</b>
                      </span>
                      <div className="grey-text note-date date-spacing">
                        <b>{moment(notification.time.toDate()).fromNow()}</b>
                      </div>
                    </li>
                  </div>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
