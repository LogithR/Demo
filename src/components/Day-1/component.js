// import React from 'react';

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }

// export default Car

// ------------------------------------------------------------------------------------

import React from 'react';

class Car extends React.Component {
  constructor() {
    super();
    this.hi = {model: "Mustang",brand:"ford", color:"yellow"};
  }
  render() {
    return (
      <div>
    <h2>I am a {this.hi.color} {this.hi.model} {this.hi.brand} Car!</h2>
    <p>I {this.hi.brand}</p>
    </div>
    );
  }
}


export default Car


