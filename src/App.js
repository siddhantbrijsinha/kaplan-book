import React from "react";
import { Provider } from "react-redux";
import { getConfiguredStore } from "./reduxConfig/configStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideNavBar from "./components/SideNavBar";
import Dashboard from "./pages/Dashboard";
import ContentManagement from "./pages/ContentManagement.js";
import Courses from "./pages/Courses";
import SelectedBookpage from "./pages/SelectedBookPage.js";

const store = getConfiguredStore();

const App = () => {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <SideNavBar>
            <Routes>
              <Route path="/">
                <Route index element={<Dashboard />} />
                <Route
                  path="content-management"
                  element={<ContentManagement />}
                />
                <Route path="courses" element={<Courses />} />
                <Route path=":bookId" element={<SelectedBookpage />} />
              </Route>
            </Routes>
          </SideNavBar>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
