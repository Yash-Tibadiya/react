import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";
import PrivacyMessage from "./components/PrivacyMessage";
import { useSelector, useDispatch } from "react-redux";

function App() {

  const privacy = useSelector((state) => state.privacy);

  return (
    <div className="px-4 py-5 my-5 text-center d-flex justify-content-center">
      <Container>
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ?  <PrivacyMessage /> : <DisplayCounter />}
          <Controls />
        </div>
      </Container>
    </div>
  );
}

export default App;
