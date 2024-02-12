import "./App.css";
import Form from "./components/Auth_Form/form";
import Home from "./components/Home/home";
import { Route, Routes, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, auth =false}) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null || false;

  if (!isLoggedIn && auth) {
    return <Navigate to={"/users/signin"} />;
  } else if (
    isLoggedIn &&
    ["/users/signin", "/users/signup"].includes(window.location.pathname)
  ) {
    //  console.log('object :>> ');
    return <Navigate to={"/"} />;
  }

  return children;
};

function App() {
  return (
    <Routes>    
      <Route
        path="/users/signup"
        element={
          <ProtectedRoute  >
            <Form isSignInPage={false} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users/signin"
        element={
          <ProtectedRoute>
            <Form isSignInPage={true} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute auth={true}>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
