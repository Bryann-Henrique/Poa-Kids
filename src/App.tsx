import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Geral from './styles/Geral';
import Componentes from './styles/Componentes';
import Footer from './components/Footer';
import Header from './components/Header';

import Erro from './pages/Erro';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Produto from './pages/Produto';
import Carrinho from './pages/Carrinho';
import Pagamento from './pages/Pagamento';
import Confirmacao from './pages/Confirmacao';
import Pedido from './pages/Pedido';
import PedidoDetalhe from './pages/PedidoDetalhe';
import PedidoPagamento from './pages/PedidoPagamento';

const App: React.FC = () => {
  return (
    <>
      <Geral />
      <Componentes />

      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Sobre" component={Sobre} />
          <Route path="/produto" component={Produto} />
          <Route path="/carrinho" component={Carrinho} />
          <Route path="/pagamento" component={Pagamento} />
          <Route path="/confirmacao" component={Confirmacao} />
          <Route path="/pedido" component={Pedido} />
          <Route path="/pedidodetalhe" component={PedidoDetalhe} />
          <Route path="/pedidopagamento" component={PedidoPagamento} />
          <Route path="*" component={Erro} />
        </Switch>  

        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App;
