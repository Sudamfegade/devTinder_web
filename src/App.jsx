import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./componets/Body";
import Login from "./componets/Login";
import Profile from "./componets/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./componets/Feed";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/feed" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
