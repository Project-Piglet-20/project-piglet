import React from "react";

const Person = ({ people }) => {
  const personList = people.map((person) => {
    const name = (
      <div>
        <h5 className="deep-orange-text text-accent-3">
          {person.name}
          <i className="material-icons black-text right">keyboard_arrow_up</i>
        </h5>
      </div>
    );
    return (
      <div className="col s12 m4" key={person.id}>
        <div className="icon-block">
          <div className="card z-depth-5 cardImage">
            <div className="card-image waves-effect waves-block waves-light">
              <img className="activator" src={person.img} alt={person.name} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                <h5>{name}</h5>
              </span>
              <br />
              <p className="paraPadding">{person.content}</p>
              <div className="divider"></div>
              <div className="cardSpacing">
                <span className="left blue-text">
                  <div className="center">{person.phone}</div>
                </span>
                <span className="right blue-greytext text-darken-4">
                  <div className="center">{person.emailId}</div>
                </span>
                <br />
              </div>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                <h5 className="deep-orange-text text-accent-3">
                  {person.name}
                  <i className="material-icons black-text right">
                    keyboard_arrow_down
                  </i>
                </h5>
              </span>
              <br />
              <p>{person.more}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{personList}</div>;
};

export default Person;
