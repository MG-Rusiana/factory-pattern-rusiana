import logo from './logo.svg';
import './App.css';
import { ButtonFactory } from './factory/buttonFactory';

function App() {
  const button = [
    {title: "cancel", color: "red", width: 100, height: 100},
    {title: "submit", color: "green", width: 200, height: 200},
    {title: "lala", color: "orange", width: 300, height: 300},
    {title: "new button", color: "gray", width: 200, height: 200},
  ]
  return (
    <div style={{display: 'flex', flexDirection: 'row', margin: 30, gap: 30}}>
      {button.map((a)=>{
        return(
          <ButtonFactory 
            title = {a.title}
            color = {a.color}
            height = {a.height}
            width = {a.width}
        />
        )
      })}
    </div>
  );
}

export default App;
