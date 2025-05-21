import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { add, sub, changestep } from './redux/actions';

function App() {

  const count = useSelector(state=>state.count);
  const step = useSelector(state=>state.step);

  const dispatch = useDispatch();
  // TODO

  return (<>
    <div>{count}</div>
    <input name="step" id="step"
    type="number" step="1" min="1" />
    <button id="add">+</button>
    <button id="sub">-</button>
  </>)
}

export default App
