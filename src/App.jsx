import './App.css';
import Logo from './assets/logo.svg'
import Badge from './assets/badge.svg'
import Group from './assets/group-avarts.png'
import Galeria1 from './assets/galeria-1.png'
import Galeria2 from './assets/galeria-2.png'
import Galeria3 from './assets/galeria-3.png'
import Galeria4 from './assets/galeria-4.png'
import Galeria5 from './assets/galeria-5.png'
import Galeria6 from './assets/galeria-6.png'
import Galeria7 from './assets/galeria-7.png'
import Galeria8 from './assets/galeria-8.png'
import Banner from './assets/banner.png'

function App() {
  return (
    <div className="container">

      {/* INICIO DA PARTE1 */}
        <div className='topoparte1'>

            {/* INICIO DO CABEÇALHO */}
            <div className='topo'>
                <img src={Logo} alt="" />
            </div>

            <div className='menu'>

                <ul>
                  <li> <a href="">Comprar NFT</a> </li>
                  <li> <a href="">Sobre</a> </li>
                  <li> <a href="">FAQ</a> </li>
                </ul>

            </div>

            <div className='botao-topo'>
              <button className='botao-meta'>Conectar Carteira</button>
            </div>
            {/* FIM DO CABEÇALHO */}

        </div>
        {/* FIM DA PARTE1 */}


        {/* INICIO DA PARTE 2 */}
        <div className='topoparte2'>

            <div className='texto-nft'>

              <p>
                Mercado Digital para colecionáveis em criptos e tokens não fungível (NFT). 
                <br /> Compre, venda e descubra ativos digitais exclusivos para você.

              </p>

              <img src={Group} alt="" /> <br />
              <span>+10 artistas selecionados</span>

            </div>

            <div className='titulo-nft'>
                <h1>Descubra a verdadeira arte digital e
                  <br /> colecione diversas <span className='orange'>NFTs</span></h1>
            </div>

            <div className='imagem-logo'>
                <img src={Badge} width="140" alt="" />
            </div>

        </div>
        {/* FIM DA PARTE 2 */}

        {/* INICIO DA GALERIA 1 */}
        <div className='galeria1'>

            <div className='fila1'>
              <img className='borda' src={Galeria1} width="220" alt="" />
              <img className='margem borda' src={Galeria2} width="220" alt="" />
              <img className='margem borda' src={Galeria3} width="220" alt="" />
              <img className='borda' width="220" src={Galeria4} alt="" />
            </div>

            <div className='fila2'>
              <img className='borda' src={Galeria5} width="220" alt="" />
              <img className='margem borda' src={Galeria6} width="220" alt="" />
              <img className='margem borda' src={Galeria7} width="220" alt="" />
              <img className='borda' src={Galeria8} width="220" alt="" />
            </div>
            
        </div>
        {/* FIM DA GALERIA 1 */}

        {/* INICIO DA MID */}
        <div className='mid'>
          
            <div className='lateral-esq'>
                <h1>10K+</h1>
                <p>Artes</p>
                <br />
                <h1>200K+</h1>
                <p>Vendas</p>
                <br />
                <h1>20K+</h1>
                <p>Artistas</p>
            </div>

            <div className='textos'>

                <div className='mid-texto1'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, <a href="">assumenda</a> facilis molestias quaerat doloremque nobis ratione sed laboriosam mollitia odio.</p> <br />
                    <a href="">Lorem ipsum</a>
                </div>

                <div className='mid-texto2'>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, non <a href="">laboriosam</a> fuga quam quas, culpa suscipit debitis dolore, exercitationem dicta praesentium!
                  </p> <br />
                  <a href="">Lorem ipsum</a>
                </div>

                <div className='banner'>
                  <img src={Banner} height="200" width="890" alt="" />
                </div>
        
            </div>


        </div>
        {/* FIM DA MID */}

    </div>
  );
}

export default App;
