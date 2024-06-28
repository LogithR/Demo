// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function MissedGoal() {
// 	return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
// 	return <h1>GOAL!</h1>;
// }

// function Goal() {
//   const isGoal = true;
//   if (isGoal) {
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Goal />);

// export default Goal

// ----------------------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom/client';

function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
	return (
		<>
			{ isGoal ? <MadeGoal/> : <MissedGoal/> }
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);

export default Goal