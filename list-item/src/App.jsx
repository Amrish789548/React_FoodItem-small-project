import 'bootstrap/dist/css/bootstrap.min.css';
import AppName from './Components/AppName';
import Message from './Components/Message';
import FoodItem from './Components/FoodItem';
import './App.css';
import Container from './Components/Container';
import AppInput from './Components/AppInput';
import { useState } from "react";
function App(){
   
  //let foodItems=[];
  const [foodItems,setFoodItems] = useState([ ]);
  
  const onKeyDown=(event)=>{
         if(event.key==="Enter"){
        let newFood=event.target.value;
        event.target.value="";
        let addedItem=[...foodItems,newFood];
        setFoodItems(addedItem);
         }
    }
  return<>
  <Container> 
  <AppName></AppName>
  <Message item={foodItems}></Message>
  <AppInput handleKeyDown={onKeyDown}></AppInput>
   
  <FoodItem item={foodItems}></FoodItem>
  </Container>
  </>
}
export default App;