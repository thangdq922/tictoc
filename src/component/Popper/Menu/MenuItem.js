import Button from '../../Button';
import styles from './Menu.module.css';


function MenuItem({ data, onClick }) {
    
    const classes = [styles['menu-item'], data.separate && styles['separate'], data.settingV && styles.settingV ];
    return (
        <Button className={classes.join(' ')} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;