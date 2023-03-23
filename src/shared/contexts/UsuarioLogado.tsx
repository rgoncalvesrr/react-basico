import React, { createContext } from "react";

interface IUsuarioLogadoContextData {
    nome: string;
    emailLogado?: string;
}

interface IProps {
    children: React.ReactNode;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IProps> = ({ children }) => {
    return (
        <UsuarioLogadoContext.Provider value={{ nome: 'Ricardo', emailLogado: 'ricardo@goncalves.biz' }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );

}