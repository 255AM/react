
import './App.css';

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}</h1>
    </header>
  )
}

function Main(props){
  return(
    <section>
      <p>we serve a lot of {props.adjective} in here</p> 
      <ul>
        {props.dishes.map((dish) => <li>{dish}</li>)}
      </ul>
    </section>
  )
}

function Footer(props){
  return(
    <footer>
      <h2>Copyright {props.year}</h2>
    </footer>
  )
}

const dishes = [
  'stuf a',
  'stuff b',
  'stuff c'
]


function App() {
  return (
    <div className="App">
      <Header name="chicky chicky"/>
      <Main adjective="wagons wagons wagons" dishes={dishes}/>
      <Footer year={new Date().getFullYear()}/>  
    </div>
  );
}

export default App;
