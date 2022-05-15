import styles from './TextInput.module.scss';

const TextInput = (props) => {
    return (<input type="text" value={value} onChange={ e=>setValue(e.target.value)} 
    className={styles.input} placeholder={props.placeholder} />);
};

export default TextInput;