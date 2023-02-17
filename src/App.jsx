import React from "react";
import Styles from './App.css';
// import styled from "styled-components";

// const DivStyle = styled.div`
//   height: 100vh;
//   display: flex;
//   font-size: 2.5vw;
//   font-weight: 600;
//   align-items: center;
//   letter-spacing: 0.15rem;
//   justify-content: center;
// `;

const App = () => {
  // return <DivStyle>Happy coding with custom react app</DivStyle>;
  return (
    <div id={Styles.appWrapper}>
      <div className={Styles.app}>Happy coding with custom react app</div>
      <img className={Styles.image} src="assets/images/souvik.jpg" alt="It's my image" />
    </div>
  )
};

export default App;
