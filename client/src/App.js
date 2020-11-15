
import './App.css';


// Components
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import PageBase from './pages/PageBase';
import Item from './components/Item';
import ItemList from './pages/ItemList';


const Default = () => {
  return <div></div>;
};

function App() {
  return (
    <BrowserRouter>
      <HashRouter>
        <PageBase>
          <Switch>
            <Route path="/item" component={Item} />
            <Route path="/items" component={ItemList} />
            <Route path="/" component={Default} />
          </Switch>
        </PageBase>
      </HashRouter>
    </BrowserRouter>
  );
}

export default App;
