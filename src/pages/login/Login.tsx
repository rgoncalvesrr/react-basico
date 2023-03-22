import { useState } from "react";
import { InputLogin } from "./components/InputLogin";


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerLogin = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <form>
            <InputLogin type="email" label="E-mail" value={email} onChange={newValue => setEmail(newValue)} />
            <InputLogin type="password" label="Senha" value={password} onChange={newValue => setPassword(newValue)} />
            <button type="button" onClick={handlerLogin}>Login</button>
        </form>
    );
}