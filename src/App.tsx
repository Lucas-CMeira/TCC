import Form from "./components/Form";

import logo from "./assets/LogoFinanças.png";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 gap-4">
        <h1>ORGANIZE SUAS FINANÇAS DE UMA FORMA MUITO MAIS PRÁTICA!</h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <Form />
      </div>
    </>
  );
}

export default App;
