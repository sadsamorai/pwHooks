import './UseState.css'
import React, { useState } from "react"

const UseState = props => {

    const [ nome, setNome ] = useState("")
    const [ sobrenome, setSobrenome ] = useState("")
    const [ mensagem, setMensagem ] = useState("")

    return (
        <div>
            <div className="titulo">
                <h1>useState</h1>
                <h2>Manipula Estados em componentes funcionais</h2>
            </div>
            <div className="conteudo">
                <input
                    className="campo"
                    type="text" value={nome}
                    placeholder="Digite seu nome"
                    onCharge={ e => setNome(e.target.value) }
                />
                <input
                    className="campo"
                    type="text"
                    value={sobrenome}
                    placeholder="Digete seu sobrenome"
                    onCharge={ e => setSobrenome(e.target.value) }
                />
                <button
                    className="botao"
                    onClick={ () => setMensagem('Olá ${nome} ${sobrenome}, seja bem vindo')}
                    >OK</button>

                    <p className="campo">{mensagem}</p>
            </div>
        </div>
    )
}
export default UseState