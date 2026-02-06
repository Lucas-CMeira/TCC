import logo from "../assets/logo.jpg";

const forms = () => {
  return (
    <div className="w-96 border border-gray-400 rounded-lg shadow-md p-6 flex flex-col gap-4">
      <div className="flex flex-col items-center gap-2">
        <img src={logo} alt="Imagem de finanças" className="w-48 h-48" />
        <h2 className="font-semibold"> Acesse sua conta agora!</h2>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Nome:</label>
        <input type="text" placeholder="Digite seu nome" id="name" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Digite seu email"
          id="email"
          className="border rounded-md"
        />
      </div>
      
      <div>
        <a href="#" className="text-blue-500 hover:underline text-sm">
          Esqueceu sua senha?
        </a>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
        Entrar
      </button>
    </div>
  );
};

export default forms;
