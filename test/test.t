import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { decrement, increment } from "./redux/counter/counter.slide";
import { useAppDispatch, useAppSelector } from "./redux/counter/hooks";
import Button from "react-bootstrap/Button";

function App() {
  // const count = useSelector((state: RootState) => state.counter);

  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
        <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
      </div>
      <div>
        <h1> My current = {count.value} </h1>
        <Button variant="info">test</Button>

        <div>
          <button onClick={() => dispatch(increment())}> + 1</button>
          <button onClick={() => dispatch(decrement())}> -1 </button>
        </div>
      </div>
    </>
  );
}

export default App;
