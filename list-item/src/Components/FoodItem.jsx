import Item from "./Item";

const FoodItem=({item})=>{
    
         
    return<>
    <ul className="list-group">
    {item.map((item)=>
    <Item foodItems={item} key={item} onMessageSend={()=> console.log(`the item is clicked ${item}`)}></Item>
    )}
</ul>
    </>
}
export default FoodItem;