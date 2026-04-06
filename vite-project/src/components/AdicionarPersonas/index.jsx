import { useState } from 'react'
import './style.css'
// The Last of Us  Controle de Sobreviventes
// A Ideia: O mundo acabou e você é o líder do acampamento. Você precisa registrar os sobreviventes que chegam aos seus portões.

// A Imagem: Um cenário de cidade abandonada ao fundo ou o logo da série.

// A Lista: Os inputs podem ser "Nome do Sobrevivente" e "Arma principal" ou "Habilidade" (ex: Ellie - Imunidade ou Daryl - Besta).

export default function AdicionarPersonas() {
    const [nomeSobrevivente, setNomeSobrevivente] = useState('')
    const [habilidade, setHabilidade] = useState('')
    const [listaDePersonagens, setListaDePersonagens] = useState([])

    const handleAdicionarPersonas = (event) => {
        event.preventDefault()

        if (nomeSobrevivente && habilidade) {
            setListaDePersonagens([
                // ... = esticar
                ...listaDePersonagens,
                { id: Date.now(), nomeSobrevivente, habilidade }
            ])
            setNomeSobrevivente('')
            setHabilidade('')
        }
    }
    return (
        <div className='form'>
            <h2>Adicionar Sobreviventes</h2>

            <form onSubmit={handleAdicionarPersonas}>
                <input
                    type="text"
                    placeholder='Nome do Sobrevivente'
                    value={nomeSobrevivente}
                    onChange={(e) => setNomeSobrevivente(e.target.value)}
                />

                <input
                    type="text"
                    placeholder='Habilidade'
                    value={habilidade}
                    onChange={(e) => setHabilidade(e.target.value)}
                />

                <button type='submit'>Adicionar Sobrevivente</button>
            </form>
            
            <hr />

            <h2>Sobreviventes Adicionados</h2>
            <ul>
                {listaDePersonagens.map((personagens) => (
                    <li key={personagens.id}>
                        {personagens.nomeSobrevivente} - {personagens.habilidade}
                    </li>
                ))}
            </ul>
        </div>
    )
}