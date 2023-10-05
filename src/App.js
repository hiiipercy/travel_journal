import data from "./data";
import Style from "./Style.css";
import Header from "./Header";
import Content from "./Content"

function App() {
const nums=data.map(item =>{
  return <Content 
            {...item}
          />
})

  return (
    <div className="app">
        <Header/>
        {nums}
    </div>
  );
}
export default App;