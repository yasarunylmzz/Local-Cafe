import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import "./App.css";
import QrMenu from "./QrMenu/QrMenu";
import Login from "./Login/Login";
import HomePage from "./HomePage/HomePage";
import Panel from "./Login/Panel";
import ProtectedAdminRoute from "./Login/ProtectedAdminRoute";
import CategoriesScreen from "./Category/Category";
import ItemsScreen from "./Items/Items";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/qr-menu" element={<QrMenu />} />
          <Route path="/admin" element={<Login />} />
          <Route
            path="/admin/panel"
            element={
              <ProtectedAdminRoute>
                <Panel />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/panel/categories"
            element={
              <ProtectedAdminRoute>
                <CategoriesScreen />
              </ProtectedAdminRoute>
            }
          />
          <Route
            path="/admin/panel/categories/:id"
            element={
              <ProtectedAdminRoute>
                <ItemsScreen />
              </ProtectedAdminRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
