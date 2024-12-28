import React from "react";

export default function Navbar(props) {
  return (
    <nav id="main-nav" className={props.variant}>
      <div className="container">
        <div className="wrapper">
          <div className="brand">
            <h1>Shop In Aja</h1>
          </div>
        </div>
      </div>
    </nav>
  )
}