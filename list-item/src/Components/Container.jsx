import styles from './Container.module.css';
const Container=({children})=>{
    return<>
    <div className={styles.Children}>{children}</div>
    </>
}
export default Container;