import { useContext, useState } from "react";
import { UsuarioLogadoContext } from "../../shared/contexts";
import { InputLogin } from "./components/InputLogin";


export const Login = () => {
    const { nome, emailLogado } = useContext(UsuarioLogadoContext)
    const [email, setEmail] = useState(emailLogado);
    const [password, setPassword] = useState('');

    const handlerLogin = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <>
            <h1>{nome}</h1>
            <form>
                <InputLogin type="email" label="E-mail" value={email} onChange={newValue => setEmail(newValue)} />
                <InputLogin type="password" label="Senha" value={password} onChange={newValue => setPassword(newValue)} />
                <button type="button" onClick={handlerLogin}>Login</button>
            </form>
        </>
    );
}