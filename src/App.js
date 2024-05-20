import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NewPlaces from "./places/pages/NewPlaces";
import UserPlaces from "./places/pages/UserPlaces";
import MainNavigation from "./shared/Navigation/MainNavigation";
import NotFound from "./shared/components/NotFound";
import Users from "./users/pages/Users";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" exact={true} element={<Users />} />
          <Route path="/places/new" exact={true} element={<NewPlaces />} />
          <Route path="/:userId/places" exact={true} element={<UserPlaces />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
