import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

import Geral from './styles/Geral';
import HeaderFooter from './styles/HeaderFooter';
import Componentes from './styles/Componentes';

import Home from './pages/Home';
import Produto from './pages/Produto';
import Erro from './pages/Erro';

const App: React.FC = () => {
  return (
    <>
      <Geral />
      <Componentes />
      <HeaderFooter />

      <Header />

      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/produto" component={Produto} />
          <Route path="*" component={Erro} />
        </Switch>  
      </BrowserRouter>

      <Footer />
    </>
  )
}
export default App;
