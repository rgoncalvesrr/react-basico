import React, { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
    nome: string;
    emailLogado?: string;
    onLogout: () => void;
}

interface IProps {
    children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IProps> = ({ children }) => {
    const [nomeState, setNomeState] = useState('');
    const [emailLogadoState, setEmailLogadoState] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setNomeState('Ricardo');
            setEmailLogadoState('ricardo@goncalves.biz');
        }, 1000)
    })

    const handleLogout = useCallback(() => {
        setNomeState('');
        setEmailLogadoState('');
    }, [])

    return (
        <UsuarioLogadoContext.Provider value={{ nome: nomeState, emailLogado: emailLogadoState, onLogout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );

}