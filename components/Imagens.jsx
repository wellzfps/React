import Image from 'next/image'
import Front from '../IMG/FirstImage.svg'
import Back from '../IMG/SecondImage.svg'
import Full from '../IMG/ThirdImage.svg'
import styles from '../pages/css/imagens.module.css'

export default function Imagens() {
    return (
        <>
            <div className={styles.imagens}>
                <Image
                    src={Front}
                    width={350}
                    height={350}
                    alt="Picture of the author"
                />

                <Image
                    src={Back}
                    width={350}
                    height={350}
                    alt="Picture of the author"
                />

                <Image
                    src={Full}
                    width={350}
                    height={350}
                    alt="Picture of the author"
                />
            </div>
        </>
    )
}