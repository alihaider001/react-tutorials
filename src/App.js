import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import Counter from "./components/Counter/Counter";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  const handleLogin = () => {
    console.log("Login Click");
  };

  const handleSignUp = () => {
    console.log("Sign Up Click");
  };
  return (
    <div>
      <Button />
      <Button title={"Login"} onClick={handleLogin} />
      <Button title={"Sign Up"} onClick={handleSignUp} />
      <ProductsList />
    </div>
  );
}

export default App;
