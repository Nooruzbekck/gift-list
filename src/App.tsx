import { useState } from "react";
import { Input } from "./components/UI/Input";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Enter your password"
        type="password"
      />
    </div>
  );
}

export default App;
