import './index.css'
import Header from '../Header'
import Axios from 'axios'
import React, { useState } from 'react'

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [data, setData] = useState('');

    const handleRegister = (e) => { 
        e.preventDefault()
        Axios.post('http://localhost/api/v1/users/create', {
            nome: nome,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            cpf: cpf,
            data: data
        }).then(res => {
            console.log(res)
        })
    }

    return(
        <>
            <Header />
            <div className="corpo">
                <div className="resumo">
                    <img src="./upe.svg"/>
                    <p>Este site é um produto da disciplina de DCE x IV (Disciplina curricular de Extensão)
                        no curso de Bacharelado de Engenharia de Software da turma do 4º  período.</p><br/>
                    <p>Monitorado pelo: <p className={'strong'}>Prof. Dr. Ivaldir Honorio de Farias Junior.</p></p>
                    <p>Alunos: <p className={'strong'}>Gabriel Lima, Igor Leonardo, Renan Guilherme</p></p>
                </div>
                <form className="cadastro" onSubmit={handleRegister}>
                    <h1>Cadastro</h1>
                    <input type="text" placeholder={"Insira seu Nome"} name={'nome'} id={'nome'} value={nome} onChange={(e) => setNome(e.target.value)}/>
                    <input type="email" placeholder={"Insira seu E-mail"} name={'email'} id={'email'} value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder={"Insira sua Senha"} name={'password'} id={'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password" placeholder={"Confirme sua Senha"} name={'confirmPassword'} id={'confirmPassword'} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <input type="date" placeholder={"Insira sua Data de Nascimento"} name={'data'} id={'data'} value={data} onChange={(e) => setData(e.target.value)}/>
                    <input type="text" placeholder={"Insira seu CPF"} name={'cpf'} id={'cpf'} value={cpf} onChange={(e) => setCpf(e.target.value)}/>
                    <button>Cadastrar</button>
                </form>
            </div>
        </>
    )
}