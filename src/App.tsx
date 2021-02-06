import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Geral from './styles/Geral';
import Componentes from './styles/Componentes';
import Footer from './components/Footer';
import Header from './components/Header';

import Erro from './pages/Erro';
import Home from './pages/Home';
import Produto from './pages/Produto';
import Carrinho from './pages/Carrinho';
import Pagamento from './pages/Pagamento';

const App: React.FC = () => {
  return (
    <>
      <Geral />
      <Componentes />
      
      <Header />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/produto" component={Produto} />
          <Route path="/carrinho" component={Carrinho} />
          <Route path="/pagamento" component={Pagamento} />
          <Route path="*" component={Erro} />
        </Switch>  
      </BrowserRouter>

      <Footer />
    </>
  )
}
export default App;
