import { useCallback, useState } from "react";

export const HomePage = () => {
    const [lista, setLista] = useState<string[]>(['Joana', 'Jobson', 'Tadeu', 'Ernesto']);

    const handlerInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key !== 'Enter')
            return;

        if (e.currentTarget.value.trim().length === 0) return;

        const value = e.currentTarget.value;
        e.currentTarget.value = '';

        // Esta é a forma correta de incrementar uma lista em React
        //
        // Não deve ser usado setList([...lista, e.currentTarget.value]) porque se houver nova chamada
        // subsequente da função setList dentro do mesmo evento o primeiro item adicionado é perdido.
        //
        // Exemplo:
        //  
        //  setList([...lista, 'Josefina']);
        //
        //  setList([...lista, 'Romeu']);
        //
        // Nesse exemplo, o  valor 'Josefina' será pedido, porque ambas as chamadas adicionam o novo elemento
        // a partir da lista original
        setLista((oldLista) => {

            if (oldLista.includes(value))
                return oldLista;

            return [...oldLista, value];
        });
    }, []);

    return (
        <>
            <p>Lista</p>
            <input type="text" onKeyDown={handlerInputKeyDown} />
            <ul>
                {
                    lista.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })
                }
            </ul>
        </>
    );
}