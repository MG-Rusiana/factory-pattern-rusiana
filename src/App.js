import './App.css';
import { ButtonFactory } from './factory/buttonFactory';

function App() {
  const button = [
    {title: "cancel", color: "red", width: 100, height: 60},
    {title: "submit", color: "green", width: 200, height: 80},
    {title: "lala", color: "orange", width: 300, height: 50},
    {title: "new button", color: "gray", width: 200, height: 100},
    {title: "exit", color: "red", width: 150, height: 50},
  ]
  return (
    <div className='flex flex-row m-[30] bg-[#18191A] w-screen h-screen'>
      
      <div className='flex fixed justify-center w-[100%] h-[60px] bg-[#242526] shadow-md'>
        <p className='font-[serif] font-[500] text-[40px] text-[#ffffff]'>Button Factory</p>
      </div>
     
      <div className='flex flex-row flex-wrap gap-[30px] p-5 mt-20'>
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

    </div>
  );
}

export default App;
