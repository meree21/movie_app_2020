import React,{useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [state, setState] = useState({id: "", pw: "", list:[]});

  useEffect(()=>{
    console.log("id:" + state.id, "pw:" + state.pw);
  });

  const handleChange = (e) => {
    setState({
    ...state,
      [e.target.name]: e.target.value,
    });
  }

  const hendleCreate = () => {
    const {id,pw,list} = state;
    setState({
      ...state,
      list:list.concat({
        id:id,
        pw:pw
      })
    })
  };

  const handleRemove = ({id}) =>{
    const {list} = state;
    setState({
      ...state, 
      list:list.filter((data) => data.id !== id),        
    });                                   
  }

  return (
    <div className="App">
      <h1>로그인</h1>
      <form>
        <input placeholder="id" value={state.id} onChange={handleChange} name="id" />
        <input placeholder="pw" value={state.pw} onChange={handleChange} name="pw" />
        <p onClick={hendleCreate}>등록</p>
      </form>
      <ul> 
        {state.list.map((data,idx) => {
          return(
            <li key={idx} onClick={handleRemove}>
              {data.id} / {data.pw}
            </li>
          );
        })}
    </ul>
    </div>
  )
}

export default App;
