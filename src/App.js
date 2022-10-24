import React from "react";
import Counter from "./Counter";
import Test from "./Test";
import Wrapper from "./Wrapper";


function App() {
    return (
      // <Wrapper>
      //   {/* Test라는 컴포넌트를 내보낸다. */}
      //   <Test name="react1" color="blue" isSpecial={true}/>
      //   <Test color="red" cisSpecial={false}/>
      //   <Test name="react2" isSpecial={false}/>
      // </Wrapper>

      <Counter/>
    );
}

export default App;