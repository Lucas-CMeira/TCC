import Form from "./components/Form"

function App() {

  return (
    <>
    <div className="flex flex-col items-center justify-center mt-10 gap-4">
      <h1>ORGANIZE SUAS FINANÇAS DE UMA FORMA MUITO MAIS PRÁTICA!</h1>
    </div>
    <div className="flex flex-col justify-center items-center gap-3">
      <h2 className="text-red-600"> Acesse sua conta agora!</h2>
        <Form />
      </div>
    </>
  )
}

export default App
