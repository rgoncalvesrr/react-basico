import React, { createContext, useCallback } from "react";

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
    const handleLogout = useCallback(() => {        
        console.log('Logout realizado');
    }, [])

    return (
        <UsuarioLogadoContext.Provider value={{ nome: 'Ricardo', emailLogado: 'ricardo@goncalves.biz', onLogout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );

}