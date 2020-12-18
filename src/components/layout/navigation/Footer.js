import React from "react";

const Footer = () => {
  return (
    <footer
      className="page-footer grey darken-3"
      style={{
        paddingBottom: "10px",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <div className="row footer-copyright">
        <div className="col s5 m5 left">© 2014 Copyright Text</div>
        <div className="col s7 m7">
          <div className="right">
            DISCLAIMER: Data displayed here is for testing purpose only!
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
