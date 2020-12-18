import React, { Component } from "react";
import Person from "./Person";
import Vipin from "../../../images/Vipin.jpg";
import Vishak from "../../../images/Vishak.jpg";
import Vivek from "../../../images/Vivek.jpeg";

class About extends Component {
  state = {
    people: [
      {
        id: 1,
        img: Vipin,
        name: "Vipin R Bharadwaj",
        phone: "+91 9900112800",
        emailId: "vipinr.is17@bmsce.ac.in",
      },
      {
        id: 2,
        img: Vishak,
        name: "Vishak LV",
        phone: "+91 8310380647",
        emailId: "vishak.is17@bmsce.ac.in",
      },
      {
        id: 3,
        img: Vivek,
        name: "Vivek V",
        phone: "+91 8095739921",
        emailId: "vivek.is17@bmsce.ac.in",
      },
    ],
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ullamcorper pretium ornare. In iaculis, nulla vel feugiat efficitur, diam ex facilisis tortor, sit amet rutrum neque ligula quis diam. Vivamus vel lorem eu nibh interdum pulvinar ac in dolor. Sed orci libero, commodo vulputate laoreet id, blandit gravida libero. Nunc metus metus, vehicula nec cursus eu, pellentesque vel enim. Duis ornare risus est, sit amet dictum nibh porta sed.",
  };
  render() {
    return (
      <div>
        <br />
        <main className="container">
          <div className="section">
            <div className="row">
              <Person people={this.state.people} content={this.state.content} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default About;
