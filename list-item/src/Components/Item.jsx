import styles from './Item.module.css';
const Item=({foodItems,onMessageSend})=>{

    return<>
     <li   className={`${styles["kgItem"]} list-group-item`}>
      <span className={`${styles.KgSpan}`}
        >{foodItems}</span>
        <button className={`${styles.Button} btn btn-primary`}
        onClick={onMessageSend}>Buy </button>  </li>
    </>

}
export default Item;