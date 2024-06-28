import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {

    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "80px",
        fontFamily: "Sans-Serif"
      };

  return (
    <>
      <h1 style={{color: "red",backgroundColor: "lightblue"}}>Hello Style!</h1>
      <p>Add a little style!</p>

      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>


    <h1 className='p-[90px] bg-blue-300 text-[40px] mb-[90px]'>hjhjfhjfhj</h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

export default Header