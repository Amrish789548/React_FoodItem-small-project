import styles from './AppInput.module.css';
const AppInput=({handleKeyDown})=>{

    
    return<>
    <input type="text" className={styles.Input} placeholder="Enter something here"
    onKeyDown={handleKeyDown}></input>
    </>
}
export default AppInput;