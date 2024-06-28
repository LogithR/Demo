// import React from 'react';

// function MyForm() {
//   return (
//     <form>
//       <label>Enter your name:
//         <input type="text" placeholder='hi'/>
//       </label>
//     </form>
//   )
// }



// export default MyForm

// ------------------------------------------------------------------------------------------

// import { useState } from "react";

// function MyForm() {
//   const [name, setName] = useState("");

//   return (
//     <form>
//       <label>Enter your name:
//         <input
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//     </form>
//   )
// }

// export default MyForm

// -------------------------------------------------------------------------------------

// import { useState } from "react";
// import ReactDOM from 'react-dom/client';

// function MyForm() {
//   const [name, setName] = useState("");

//   const handleSubmit = (event) => {
//     // event.preventDefault();
//     alert(`The name you entered was: ${name}`);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input 
//           type="text" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

// export default MyForm

// -------------------------------------------------------------------------------

// import { useState } from "react";
// import ReactDOM from "react-dom/client";

// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="name" 
//         value={inputs.name || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

// export default MyForm

// -----------------------------------------------------------------------------------------

import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {

  const [myCar, setMyCar] = useState("Ford");
  console.log(myCar);

  const handleChange1 = (event) => {
    setMyCar(event.target.value)
  }

  const [textarea, setTextarea] = useState(
    ""
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} /><br />

      <select value={myCar} onChange={handleChange1}>
        <option value="ford">BMW</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
        <option value="benz">Benz</option>
      </select>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);

export default MyForm