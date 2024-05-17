import ListGroup from "./Components/ListGroup";

let items = ["New Rork", "San Franco", "London", "UK", "The place"];
const handleSelectItem = (item: string) => {console.log(item);}

function App() {
  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}></ListGroup></div>
}

export default App;