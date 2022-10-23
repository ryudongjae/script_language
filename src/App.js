import React from "react";
import Test from "./Test";
import Wrapper from "./Wrapper";


function App() {
    return (
      <Wrapper>
        {/* Test라는 컴포넌트를 내보낸다. */}
        <Test name="react1" color="blue"/>
        <Test color="red"/>
        <Test name="react2"/>
      </Wrapper>
    );
}

export default App;
