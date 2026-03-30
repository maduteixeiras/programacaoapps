import { use, useState } from 'react'
import './style.css'

function InfoCurso() {
    const [name, setName] = useState("Programação de Aplicativos")
    const [cargaHoraria, setCargaHoraria] = useState(90)
    const [locale, setLocale] = useState("C10")

    return (
        <div className='info-curso'>
            <h2>Course Details:</h2>
            <p>Name: {name}</p>
            <p>Hours: {cargaHoraria}</p>
            <p>Locale: {locale}</p>
        </div>
    )
}

export default InfoCurso