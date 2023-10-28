export default function Titulo(props) {
    return (
        <>
            <h1>{props.principal}</h1>
            <h3>{props.subtitulo}</h3>
            <p>{props.paragrafo}</p>
            <section>{props.anuncio}</section>
        </>
    )
}