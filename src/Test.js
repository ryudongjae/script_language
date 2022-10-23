//리엑트 컴포넌트 만들때 
import React from "react";

function Test({color , name}){
    return <div style={{color}}> 테스트 {name}</div>
}


// props 를 지정하지 않았을떄 기본적으로 사용하는 설정값 
Test.defaultProps = {
    name: '이름없음'
    ,color : 'black'
}

//Test 컴포넌터를 내보낸다. 다른 컴포넌트에서 불러와서 사용이 가능하다.
export default Test;