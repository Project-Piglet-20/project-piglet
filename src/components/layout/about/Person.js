import React from 'react';

const Person = ({ people, content }) => {
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
                    <div
                        className="card z-depth-5"
                        style={{ minWidth: '100%', maxWidth: '360px' }}
                    >
                        <div className="card-image waves-effect waves-block waves-light">
                            <img
                                className="activator"
                                src={person.img}
                                alt={person.name}
                            />
                        </div>
                        <div className="card-content">
                            <span className="card-title activator grey-text text-darken-4">
                                <h5>{name}</h5>
                            </span>
                            <br />
                            <p
                                style={{
                                    paddingBottom: '10px'
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque ullamcorper pretium
                                ornare. In iaculis, nulla vel feugiat efficitur.
                            </p>
                            <div className="divider"></div>
                            <div
                                style={{
                                    paddingTop: '10px',
                                    paddingBottom: '10px'
                                }}
                            >
                                <span className="left blue-text">
                                    <div className="center">{person.phone}</div>
                                </span>
                                <span className="right blue-greytext text-darken-4">
                                    <div className="center">
                                        {person.emailId}
                                    </div>
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
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return <div>{personList}</div>;
};

export default Person;
