
import pagamentoImg from '../assets/pagamento-cartao-de-credito.png'
import negociacaoImg from '../assets/negociacao-de-debitos.png'
import clienteImg from '../assets/novo-cliente.png'


function MainContent() {

    return (

        <main className='mainContent'>
            <article>
                <div className="opcoes">
                    <h1>AGÊNCIA VIRTUAL</h1>
                    <img src={pagamentoImg} alt="logo" className='pagamentoImg'/>
                    <img src={negociacaoImg} alt="logo" className='negociacaoImg'/>
                    <img src={clienteImg} alt="logo"  className='clienteImg'/>
                </div>
            </article>
        </main>
    )
}

export default MainContent
