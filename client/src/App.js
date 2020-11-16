
// Components
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import PageBase from './pages/PageBase';
import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';


const Default = () => {
  return <div></div>;
};

function App() {
  return (
    <BrowserRouter>
      <HashRouter>
        <PageBase >
          <Switch>
            <Route path="/items/:id" component={ItemDetail} />
            <Route path="/items" component={ItemList} />
            <Route path="/" component={Default} />
          </Switch>
        </PageBase>
      </HashRouter>
    </BrowserRouter>
  );
}

export default App;
