export default function repeticao1_1(){
    const listaAprovados = ['Carlos', 'Maria', 'Paulo', 'Ricardo', 'Andréia', 'Fernando']

    function renderizarLista(){
        return listaAprovados.map((nome, i) => <li>{nome}</li>)
    }

    return(
        <>
            {renderizarLista()}
        </>
    )
}