import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { decrement, increment } from "./redux/counter/counter.slide";
import { useAppDispatch, useAppSelector } from "./redux/counter/hooks";
import Button from "react-bootstrap/Button";
import Header from "./components/header";
import { TabContent } from "react-bootstrap";
import TabsContent from "./components/tabs.content";
import UsersTable from "./components/users.table";

function App() {
  // const count = useSelector((state: RootState) => state.counter);

  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <Header />
      <TabsContent />
    </>
  );
}

export default App;
