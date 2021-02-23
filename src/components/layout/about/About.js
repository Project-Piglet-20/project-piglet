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
        content: "",
        more: "",
      },
      {
        id: 2,
        img: Vishak,
        name: "Vishak LV",
        phone: "+91 8310380647",
        emailId: "vishak.is17@bmsce.ac.in",
        content:
          "Eager to contribute significantly to the success of an organization through any role & responsibility, while improving my skills and knowledge to grow along with the organization.",
        more:
          'Vishak is completing his Bachelor\'s of Engineering(B.E) in Information Science and Engineering from BMS College of Engineering. As a fresher just entering into the IT industry, he is keen to learn more about new and upcoming technologies and also likes to see these technologies implemented from the "drawing board" onto the real world. He is interested and specialized in Cloud technologies, Data Structures, Algorithms and languages like Python, Java and many more. He likes to explore the world and has a constant desire to always learn.',
      },
      {
        id: 3,
        img: Vivek,
        name: "Vivek V",
        phone: "+91 8095739921",
        emailId: "vivek.is17@bmsce.ac.in",
        content: "Hi ! I'm Vivek, Nice to meet you.",
        more:
          "Ever curious and always wanting to know more. I enjoy tinkering around new technologies. Born and brought up in Bangalore. I Love discovering new places and people.",
      },
    ],
  };
  render() {
    return (
      <div>
        <br />
        <main className="container">
          <div className="section">
            <div className="row">
              <Person people={this.state.people} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default About;
