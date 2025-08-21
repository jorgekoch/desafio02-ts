import { Header } from "./Header";
import { Button } from "./Button";
import { Card } from "./Card";
import { boasVindas } from "./boasVindas";

export default function App() {
  return (
    <div>
      <Header />

      <Card>
        <h2>Login</h2>
        <form>
          <div>
            <label>Email: </label>
            <input type="email" placeholder="Digite seu email" />
          </div>
          <div>
            <label>Senha: </label>
            <input type="password" placeholder="Digite sua senha" />
          </div>
          <Button label="Entrar" onClick={boasVindas} />
        </form>
      </Card>
    </div>
  );
}
