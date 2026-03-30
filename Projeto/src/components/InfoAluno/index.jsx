import './style.css'

function InfoAluno() {
    const name = "João Silva"
    const age = 28
    const course = "Enginner Software"

    return (
        <div className='info-aluno'>
            <h2>student information:</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Course: {course}</p>
        </div>
    )
}

export default InfoAluno