import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


// const App = () => {
//   const greeting = 'Hello Function Component!';
//   return <Headline value={greeting} abc={123} />;
// }
// const Headline = ({ value, abc }) => {
//   return <h1>{value} {abc}</h1>;
// }

const App = () => {
  const greeting = 'Hello Function Component!';
  const word = "sentence"
  return (
    <div>
      <Headline value={greeting} secondProp={word}/>
      <ParentPropsDestructuring />
      <ParentWithState />
    </div>
  );
};

const Headline = (props) => {
  console.log("THIS IS A PROP", props)
  return (
    <div>
      <h1>{props.value}</h1> 
      <h1>{props.secondProp}</h1>
    </div>
  )
}

const ParentPropsDestructuring = () => {
  const greeting = 'I am the first destructured prop from parent';
  const word = "I am the second destructured prop from parent"
  return <ChildPropsDestructuring value={greeting} secondProp={word}/>;
}

const ChildPropsDestructuring = ({value,secondProp}) => {
  return (
    <div>
      <h1>{value}</h1> 
      <h1>{secondProp}</h1>
    </div>
  )
}


const ParentWithState = () => {
  const [greeting, setGreeting] = useState(
    'Hello world! I am the initial state!'
  );
  const handleChange = event => setGreeting(event.target.value);
  return <ChildWithState headline={greeting} onChangeHeadline={handleChange} setGreetingProp={setGreeting}/>;
}


const ChildWithState = ({ headline, onChangeHeadline, setGreetingProp }) => {
  // const [greeting, setGreeting] = useState(
  //   'Hello world! I am the initial state!'
  // );

  // const handleChange = event => setGreeting(event.target.value);

  return (
    <div>
      <h1>{headline}</h1>
      <input
        type="text"
        value={headline}
        onChange={onChangeHeadline}
      />

      <button onClick={() => setGreetingProp("I am the new value")}>Edit text</button>
    </div>
  );
}


function anyThing() {
  console.log("rEACTTT")
}



    // const Headline = () => {
    //   let fuck = {
    //     k1: "v1",
    //     k2: "v2"
    //   };
    //   const [value, setValue] = useState(
    //     'Hello Function Component!'
    //   );

    //   return (
    //     <div>
    //       <button type="button" onClick={() => setValue("motherfucker" + new Date())}>
    //         Button
    //       </button>
    //       <h1>{value}</h1>
    //       <h2>{fuck.k1}</h2>
    //       <h2>{fuck.k2}</h2>
    //       <input
    //         type="text"
    //         value={value}
    //         onChange={event => setValue(event.target.value)}
    //       />
    //     </div>
    //   );
    // };

export default App;


  
