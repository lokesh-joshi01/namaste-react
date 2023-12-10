//Nested header element using react 

// const header = React.createElement("h1",{class:"title"},
// React.createElement("h2",{class:"title"},
// React.createElement("h3",{class:"title"}, "h3 tag")));
const Logo = () =>(
<img src="./images/l7.jpg" alt="logo" width={100} height={100} />
);
const Header = () => (
    <div id="container">
        <h1>I am Joshi</h1>
   <Logo/>
    </div>
    
);