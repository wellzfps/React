import Titulo from "../components/Exemplo";

export default function usandoTitulo() {
    return (
        <>
            <Titulo titulo="Introdução a programação orientada a objetos"
                subtitulo="Uma jornada inicial"
                paragrafo="Para aprender POO, é necessário dominar lógica de programação"
            />

            <Titulo
                paragrafo="Olá eu sou outro parágrafo"

            />

        </>

    )

}