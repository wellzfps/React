function gerarList(final = 10){
    const lista = []

    for (let i = 0; i <= final; i++) {
        lista.push(<span>{i}<br></br></span>);
        
    }
    return lista
}

export default function lista(){

    return(
        <div>
            <div>
                {gerarList()}
            </div>
            <div>
                {gerarList(1)}
            </div>
            <div>
                {gerarList(100)}
            </div>
        </div>
    )
}