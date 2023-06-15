import styles from './Header.module.css'
import images from '../../../../assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles['logo']}>
          <a aria-label="Vào bảng tin Cho bạn trên TikTok" href="/">
            <img src={images.logo} alt="TikTok" style={{height: 28.74, margin: 8}} />
          </a>
        </div>
        <div className={styles.search}>
          <form>
            <input placeholder='Search accounts or videos' spellCheck={false} />
            <FontAwesomeIcon icon={faCircleXmark} className={styles['reset-search']} />
            <FontAwesomeIcon icon={faSpinner} className={styles.loading} />
            <span className={styles.spilter}></span>
            <button className={styles['search-btn']}>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{
                color: 'black', outline: 'none', width: 15, height: 15, marginRight: 15, fontSize: 20
              }} />
            </button>
          </form>
        </div>
        <div className={styles.action}>

        </div>

      </div>
    </header>
  )
};

export default Header;