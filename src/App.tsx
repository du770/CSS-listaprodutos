import "./App.css";

export default function App() {
  return (
    <div>
      <header className="site-header">
        <h1>Loja Online</h1>
        <p>Os melhores produtos para você!</p>
      </header>
      <div className="product-list">
        <div className="product">
          <img src="https://cdn.awsli.com.br/600x450/1545/1545522/produto/265475803/r7--18-150-q95oyyg8ny.jpg" alt="Produto 1" width="150px" />
          <h3>Câmera Profissional Canon</h3>
          <p className="price">R$ 3500,00</p>
          <button className="buy-btn">Comprar</button>
        </div>
        <div className="product">
          <img src="https://cdn.awsli.com.br/2500x2500/1854/1854248/produto/310847027/93fd1f850a103975221b181930fc86c3-7nxcujncdu.jpg" alt="Produto 2" width="150px" />
          <h3>Kit Guitar Hero</h3>
          <p className="price">R$ 200,00</p>
          <button className="buy-btn">Comprar</button>
        </div>
        <div className="product">
          <img src="https://images.tcdn.com.br/img/img_prod/1016614/bola_de_vinil_infantil_personagens_mickey_zippy_toys_41405_1_02f5d1534c87d60ad574a062f9bdcb33.jpg" alt="Produto 3" width="150px" />
          <h3>Bola Mickey</h3>
          <p className="price">R$ 20,00</p>
          <button className="buy-btn">Comprar</button>
        </div>
        <div className="product">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwFSasZH1IORlP5DSmSh3pcV2WKUuiu8b1vA&s" alt="Produto 4" width="150px" />
          <h3>Tamagotchi Paradise</h3>
          <p className="price">R$ 90,00</p>
          <button className="buy-btn">Comprar</button>
        </div>
      </div>
    </div>
  );
}