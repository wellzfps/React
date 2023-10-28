import styles from '../pages/css/descricao.module.css'
import {Poppins} from 'next/font/google'
const fonte = Poppins({ subsets: ['latin'], weight: ['400']})

export default function descricao(){
    return(
        <>
        <div className={`${styles.descricao} ${fonte.className}`}>
            <p>Desenvolvimento web front-end é o desenvolvimento da interface gráfica do usuário de um site, através do uso de HTML, CSS e JavaScript, para que os usuários possam visualizar e interagir com esse site.</p>
            <p>O backend é a estrutura que possibilita a operação do sistema, enquanto o front-end é responsável pela parte visual, como apresentação, design, linguagens, cores, entre outros. Mesmo tendo papéis diferentes, essas aplicações estão ligadas intimamente para que os ambientes eletrônicos operem em sincronia.</p>
            <p>Full Stack é um tipo de profissional ligado à área de TI capaz de trabalhar nas mais diversas atividades que dizem respeito ao desenvolvimento e programação web, muito valorizado no mercado graças ao seu conhecimento em diferentes linguagens, códigos e tecnologias.</p>
        </div>
        </>
    )
}