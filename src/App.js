// 카운터
import React,{useState} from 'react';
import { Button } from 'react-bootstrap';

function App(){
  //count라는 값을 상태값 정의
  const [count, setCount] = useState(0);

return(
  <div>
  {/*버튼을 누르면 count가 변경 */}
    <p>Number : {count} </p>
    {/*버튼을 클릭해 count + 1 */}
    <Button onClick={() => setCount(count + 1)}>
      Click me + 
    </Button>
    {/*버튼을 클릭해 count - 1 */}
    <Button onClick={() => setCount(count - 1)}>
    Click me - 
  </Button> 
  </div> 
);
}

export default App;
