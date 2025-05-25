import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { add, sub, changestep } from './redux/actions';

function App() {

  const count = useSelector(s=>s.count);
  const step = useSelector(s=>s.step);

  const dispatch = useDispatch();

  const addnum = () => {
    dispatch(add(parseInt(step)))
  }
  const subnum = () => {
    dispatch(sub(parseInt(step)))
  }
  const updstep =(e)=> {
    e.preventDefault()
    dispatch(changestep(e.target.value))
  }


  return (<>
    <div>{count}</div>
    <input name="step" id="step"
    type="number" step="1" min="1" value={step}
    onChange={updstep}/>
    <button id="add" onClick={addnum}>+</button>
    <button id="sub" onClick={subnum}>-</button>
  </>)
}

export default App
