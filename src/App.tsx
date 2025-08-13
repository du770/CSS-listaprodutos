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
          <h3>Câmera Profissional</h3>
          <p className="price">R$ 3500,00</p>
          <button className="buy-btn">Comprar</button>
        </div>
        <div className="product">
          <img src="https://cdn.awsli.com.br/2500x2500/1854/1854248/produto/310847027/93fd1f850a103975221b181930fc86c3-7nxcujncdu.jpg" alt="Produto 2" width="150px" />
          <h3>Guitar Hero</h3>
          <p className="price">R$ 80,00</p>
          <button className="buy-btn">Comprar</button>
        </div>
        <div className="product">
          <img src="https://images.tcdn.com.br/img/img_prod/1016614/bola_de_vinil_infantil_personagens_mickey_zippy_toys_41405_1_02f5d1534c87d60ad574a062f9bdcb33.jpg" alt="Produto 3" width="150px" />
          <h3>Bola Mickey</h3>
          <p className="price">R$ 20,00</p>
          <button className="buy-btn">Comprar</button>
        </div>
        <div className="product">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREo_B3Rofv30R2H4byHLq2DzJ387863igLDJYxrX7MzUtkXK-u8VtNgRzrz-H6qrl6_uk&usqp=CAU" alt="Produto 4" width="150px" />
          <h3>Tamagotchi Rosa</h3>
          <p className="price">R$ 30,00</p>
          <button className="buy-btn">Comprar</button>
        </div>
      </div>
    </div>
  );
}