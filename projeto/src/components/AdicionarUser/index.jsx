import { useState } from 'react'
import './style.css'

export default function AdicionarUser() { 
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [listaDeUsuarios, setListaDeUsuarios] = useState([])

    const handleAdicionarUser = (event) => {
        event.preventDefault()

        if (nome && email) {
            setListaDeUsuarios([
                // ... = esticar
                ...listaDeUsuarios,
                { id: Date.now(), nome, email }
            ])
            setNome('')
            setEmail('')
        }
    }

    return (
        <div className='form'>
            <h2>Adicionar usuário</h2>

            <form onSubmit={handleAdicionarUser}>
                <input
                    type="text"
                    placeholder='Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    type="email"
                    placeholder='E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type='submit'>Adicionar</button>
            </form>

            <hr />

            <h2>Usuários Adicionados</h2>
            <ul>
                {listaDeUsuarios.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.nome} - {usuario.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}