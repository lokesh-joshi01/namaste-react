import React from "react";
import ReactDOM from "react-dom/client";
import logo from './images/7.jpg';
import userIcon from './images/userIcon.png';

//React.createElement => React Element(object) => HTML element(while rendering)

//React Element
// const heading = React.createElement("h1", { id: "heading" }, "Namste React");

// console.log(heading);

//JSX React

//JSX (transpiled before it reaches the JS engine)

//JSX => React.createElement => React Element(object) => HTML element(while rendering)

const jsxHeadinh = (
  <h1 id="root" className="first">
    Namaste React using JSX
  </h1>
);
// const abc=200;
//React Functional componenet=> normal javascript function
const Title = () => <h1 id="loki">Title component.</h1>;
const HeadingComponent = ()=> (
    <div id="container">
      <Title />
      <h1>{jsxHeadinh}</h1>
<h1 className="loki">Namaste React functional component.</h1>
</div>
);


const root = ReactDOM.createRoot(document.getElementById("root")); 

// const header = React.createElement("div",{id:"grandparent"},
// React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"},
// React.createElement("h1",{},"Hello there"))));

const Logo = () =>(
    <img src={logo} alt="logo" width={80} height={100} />
    );

const SearchBar = () =>(
    <form>
    <label>Enter your name:
      <input type="text" />
    </label>
  </form>
);

const UserIcon = () => (
    <img src={userIcon} alt="icon" />
)
    const Header = () => (
        <div id="container">
       <Logo/>  <SearchBar/> <UserIcon/>
        </div>
        
    );

root.render(<Header/>);



