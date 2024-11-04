import { RouteMiddleware } from "@/middleware";
import Auth from "@/pages/Auth";
import Dash from "@/pages/Dash";
import Register from "@/pages/Register";
import {
  BrowserRouter,
  Route,
  Routes as RDRoutes,
  Navigate,
} from "react-router-dom";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RDRoutes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route
          path="/register"
          element={
            <RouteMiddleware type="public">
              <Register />
            </RouteMiddleware>
          }
        />
        <Route
          path="/auth"
          element={
            <RouteMiddleware type="public">
              <Auth />
            </RouteMiddleware>
          }
        />
        <Route
          path="/dash"
          element={
            <RouteMiddleware type="private">
              <Dash />
            </RouteMiddleware>
          }
        />
        <Route path="*" element={<Navigate to="/auth" />} />
      </RDRoutes>
    </BrowserRouter>
  );
};
