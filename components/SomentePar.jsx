export default function SomentePar(props) {
    if (props.numero % 2 == 0) {
        return <h1>Este Numero é par: {props.numero}</h1>
    } else {
        return <h1>Este Numero é impar: {props.numero}</h1>
    }
}

