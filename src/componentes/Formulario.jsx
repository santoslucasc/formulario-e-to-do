import React from 'react'
import { useState } from 'react'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Formulario = () => {
    /* 
        Variaveis
            Nome
            Idade
            Cidade
            [] Para agrupar os dados e enviar via submit e exibir via console log
    */
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [cidade, setCidade] = useState('')
    const [tabela, setTabela] = useState([])   
    const [parent] = useAutoAnimate()
    
    const handleNome = (e) => setNome(e.target.value)
    const handleIdade = (e) => setIdade(e.target.value)
    const handleCidade = (e) => setCidade(e.target.value)

    const enviar = (e) => {
        e.preventDefault() //previne a atualização da página
       
        let erros = []

        // Verifica se os campos estão vazios e retorna um erro caso verdadeiro.

        if (!nome.trim()) {
            erros.push('Falta Nome')
            alert('Nome é obrigatório')
        }
        if(erros.length > 0){
            console.log(erros.join("\n"))
            
            return
        }


        if(!idade.trim()) {
            erros.push('Falta Idade')
            alert('Idade é Obrigatório')
        }
        if(erros.length > 0){
            console.log(erros.join("\n"))
           
            return
        }


        if(!cidade.trim()){
            erros.push('Falta Cidade')
            alert('Cidade é Obrigatório')
        }
        if(erros.length > 0){
            console.log(erros.join("\n"))
            return
        }

        const dadosLimpos = {
            id: Date.now(),
            Nome: nome,
            Idade: idade,
            Cidade: cidade
        }

        setTabela([...tabela, dadosLimpos])

        console.log(dadosLimpos)
        
        setNome('')
        setIdade('')
        setCidade('')

        return 

        
        
    }
    const removerDaTabela = (removeIndex) => {
        let novoEstado = tabela.filter(item => item.id !== removeIndex)

        setTabela(novoEstado)
      
    }
   
  
    


        
  return (
    <div className='moldura' >
    {/* Itens de Cadastro
            Nome
            Idade
            Cidade    
    */}    
    <h2>Cadastro</h2>
    <form onSubmit={enviar}>
    Nome:
    <br />
    <input value={nome} onChange={handleNome} type="text" placeholder='Digite Seu Nome' /> 
   <br />
    Idade: 
    <br />
    <input value={idade} onChange={handleIdade}  type="text" placeholder='Digite Sua Idade' /> 
    <br />
    Cidade: 
    <br />
    <input value={cidade} onChange={handleCidade} type="text" placeholder='Digite Sua Cidade' />  
    <br />
    <br />
    <button type='submit'> Enviar </button>

    {tabela.length > 0 ? <h3>Tabela</h3> : null}
    </form>
    <ul ref={parent} >
    {tabela.map((item, index,tabelaCompleta) => (
    <li key={item.id}>
        {item.Nome} - {item.Idade + 'anos'} - {item.Cidade}
        {/* Abaixo foi chamado uma function dentro de uma arrow function pois como tem argumento na function ela executaria instantaneamente, dessa forma não*/}
        <button onClick={() => removerDaTabela(item.id)} > X </button>
         {console.log(tabelaCompleta)}
         
    </li>
    
    ))}

 

    </ul>
    

    </div>
  )
}

export default Formulario