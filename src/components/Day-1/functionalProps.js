// import React from 'react';

// function Car(props) {
//   return <h2>I am a {props.color} Car!</h2>;
// }



// export default Car

// ------------------------------------------------------------------------------------

// import React from 'react';

// function Car() {
//   return (
//     <>
//     <h2>I am a Car!</h2>
//     <Bike />
//     </>
//   )
  
// }

// function Bike() {
//     return <h2>I am a Bike!</h2>;
//     <Demo />
//   }

//   function Demo() {
//     return <h2>I am a demo!</h2>;
   
//   }

// function Garage() {
//   return (
//     <>
// 	    <h1>Who lives in my Garage?</h1>
// 	    <Car />
//     </>
//   );
// }



// export default Garage

// ------------------------------------------------------------------------------------------

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Car(props) {
//   return <h2>I am a {props.brand}!</h2>;
// }



// export default Car

// ------------------------------------------------------------------------------------------

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Car(props) {
//   return <h2>I am a { props.brand }!</h2>;
// }

// function Garage() {
//   return (
//     <>
// 	    <h1>Who lives in my garage?</h1>
// 	    <Car brand="Ford" />
//     </>
//   );
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);

// export default Garage

// -------------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(hi) {
  return (
    <div>
  <h2>I am a 2002 Ford Mustang !</h2>
  <p>fjfjklllllllllllllllllllll  {hi.brand} </p>
  </div>
  )
}

function Garage() {
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <Car brand="Ford"/>
    </>
  );
}


export default Garage