import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Logo placeholder - añade tu referencia de logo aquí */}
        <img src="/logo.png" alt="Ithaka Logo" className={styles.logoImage} />
        <span className={styles.logoText}>Ithaka</span>
      </div>
    </header>
  );
};

export default Header;
