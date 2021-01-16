import React from "react";
import moment from "moment";

const Resolved = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-dept-0 green darken-1">
        <div className="card-content">
          <span className="card-title white-text">
            <b>Resolved</b>
          </span>
          <div className="divider black"></div>
          <ul className="notifications white-text">
            {notifications &&
              notifications.map((notification) => {
                return (
                  <li key={notification.id}>
                    <span>
                      <b>{notification.problem}</b> resolved in{" "}
                      <b>{notification.locality}</b>
                    </span>
                    <div className="black-text note-date">
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

export default Resolved;
