import React from "react";
import moment from "moment";

const Resolved = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-dept-0 green darken-1">
        <div className="card-content">
          <span className="card-title black-text">
            <b>
              RESOLVED<i className="material-icons left">done_all</i>
            </b>
          </span>
          <div className="divider white"></div>
          <ul className="notifications black-text">
            {notifications &&
              notifications.map((notification) => {
                return (
                  <li key={notification.id}>
                    <i className="material-icons left black-text">
                      arrow_right
                    </i>
                    <span>
                      <b className="white-text">{notification.problem}</b>{" "}
                      resolved in{" "}
                      <b className="white-text">{notification.locality}</b>
                    </span>
                    <div className="black-text note-date date-spacing">
                      <b>{moment(notification.time.toDate()).fromNow()}</b>
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
