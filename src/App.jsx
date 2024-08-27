import "./App.css";
import "./fonts/fonts.css";
import Header from "./comps/Header";
import Body from "./comps/Body";
import { UserProvider } from "./context/userContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <UserProvider>
      <div className="mainContainer">
        <Header />
        <Toaster />
        <Body />
      </div>
    </UserProvider>
  );
}

export default App;
