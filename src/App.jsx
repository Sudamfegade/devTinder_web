import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./componets/Body";
import Login from "./componets/Login";
import Profile from "./componets/Profile";
import { Provider } from "react-redux";
import Feed from "./componets/Feed";
import Connections from "./componets/Connections";
import appStore from "./store/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Connections />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
