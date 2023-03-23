import { useUsuarioLogado } from "../../shared/hooks";

export const HomePage = () => {
    const { nome, onLogout } = useUsuarioLogado();

    return (
        <>
            <h1>Página Home</h1>
            <br />
            <h2>Usuário Logado: {nome}</h2>

            <button type="button" onClick={onLogout}>Logout</button>
        </>
    );
}