import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <header  data-testid="footer" className="app-footer">
      <p>Grzegorz Perko &copy; {year}</p>
    </header>
  );
}

export default Footer;
