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

import Ast1 from './assets/astronauta 1.png'
import Ast2 from './assets/astronauta-2.png'
import Ast3 from './assets/astronauta-3.png'
import Ast4 from './assets/astronauta-4.png'

import Arrow from './assets/arrow-white.svg'
import ArrowOrange from './assets/arrow-orange.svg'

import Art1 from './assets/artista-1.png'
import Art2 from './assets/artista-2.png'
import Art3 from './assets/artista-3.png'
import Art4 from './assets/artista-4.png'
import Art5 from './assets/artista-5.png'
import Art6 from './assets/artista-6.png'


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

        {/* INICIO DOS POPULARES */}
        <div className='populares'>

            <div className='conjunto1'>
              <h1 className='titulo-populares'> <span className='orange'>Populares</span> da semana</h1>

                <div className='astronauta-1'>
                  <h1 className='titulo'>Astronauta 1 <img className='seta' src={Arrow} alt="" /></h1> <br />
                  <span className='autor'>Mayk Brito</span> 
                  <span className='valor'>1.50 RKT</span> <br />
                  <img src={Ast1} alt="" />
                </div>

                <div className='astronauta-3'>
                  <h1 className='titulo'>Astronauta 3 <img className='seta' src={Arrow} alt="" /></h1> <br />
                  <span className='autor'>João Inácio (Biro)</span> 
                  <span className='valor'>3.75 RKT</span> <br />
                  <img src={Ast3} alt="" />
                </div>

            </div>

            <div className='conjunto2'>

            <div className='astronauta-2'>
                  <h1 className='titulo'>Astronauta 2 <img className='seta' src={Arrow} alt="" /></h1> <br />
                  <span className='autor'>Jakeliny Gracielly</span> 
                  <span className='valor'>2.0 RKT</span> <br />
                  <img src={Ast2} alt="" />
                </div>

                <div className='astronauta-4'>
                  <h1 className='titulo'>Astronauta 3 <img className='seta' src={Arrow} alt="" /></h1> <br />
                  <span className='autor'>Tamires Santos</span> 
                  <span className='valor'>4.30 RKT</span> <br />
                  <img src={Ast4} alt="" />
                </div>

            </div>

        </div>
        {/* FIM DOS POPULARES */}

        <div className='titulo-artistas'>
              <h1> <span className='orange'> Melhores </span> Artistas</h1>
        </div>


        {/* INICIO MELHORES ARTISTAS */}
        <div className='Melhores-artistas'>

            {/* INICIO FILEIRA 1 */}
            <div className='fileira-art-1'>

                <div className='artista'>

                  <div><img src={Art1} alt="" width="70" /></div>

                  <div> 
                    <h2>Mayk Brito</h2> <br />
                    <p className='orange'>80 fotografias</p>
                  </div>

                </div>

                <div className='artista-red'>

                  <div><img src={Art2} alt="" width="70" /></div>

                  <div> 
                    <h2>Jakeliny</h2> <br />
                    <p>99 fotografias</p>
                  </div>
                  
                </div>

                <div className='artista'>

                  <div><img src={Art3} alt="" width="70" /></div>

                  <div> 
                    <h2>João L (Biro)</h2> <br />
                    <p className='orange'>50 fotografias</p>
                  </div>

                </div>

            </div>
            {/* FIM FILEIRA 1 */}

            {/* INICIO FILEIRA 2 */}
            <div className='fileira-art-2'>

                <div className='artista'>

                  <div><img src={Art4} alt="" width="70" /></div>

                  <div> 
                    <h2>Tamires Santos</h2> <br />
                    <p className='orange'>43 fotografias</p>
                  </div>

                </div>

                <div className='artista'>

                  <div><img src={Art5} alt="" width="70" /></div>

                  <div> 
                    <h2>Ana Silva</h2> <br />
                    <p className='orange'>28 fotografias</p>
                  </div>

                </div>

                <div className='artista'>

                  <div><img src={Art6} alt="" width="70" /></div>

                  <div> 
                    <h2>Diego F.</h2> <br />
                    <p className='orange'>20 fotografias</p>
                  </div>

                </div>

            </div>
            {/* FIM FILEIRA 2 */}

        </div>
        {/* FIM MELHORES ARTISTAS */}
        <p className='veja-todos'>
         <a href="">Veja todos os artistas <img src={ArrowOrange} alt="" width="12" /> </a>
        </p>
    </div>
  );
}

export default App;
