import { useState } from "react";


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerLogin = () => {
        console.log(email);
        console.log(password);
    }

    return (
        <form>
            <label>
                <span>E-mail</span>
                <input value={email} type="email" onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                <span>Senha</span>
                <input value={password} type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <button type="button" onClick={handlerLogin}>Login</button>
        </form>
    );
}