// import "./App.css";

import LoginForm from "./components/LoginForm";

function App() {
 
  return (
    <div className="flex">
      <LoginForm
        title="Login Into App"
        input={["someone@example.com", "Enter Password"]}
        btnvalue={["Log In", "Go To Sign up"]}
      />

      <LoginForm
        title="Sign Into App"
        input={["Enter Your Name", "someone@example.com", "Enter Password"]}
        btnvalue={["Sign In", "Go To Log In"]}
      />
    </div>
  );
}

export default App;
