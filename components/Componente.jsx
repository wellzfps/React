export default function Section(props) {
    return (
        <>
            <h1>{props.titulo}</h1>
            <section>{props.secao}</section>
            <strong>{props.strong}</strong>
            <p>{props.paragrafo}</p>
        </>
    )
}