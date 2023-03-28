import logo from '../../../images/logo.svg';
import './Header.css';

const Header = () => 
  <header  data-testid="header" className="app-header">
    <img src={logo} className="header-logo" alt="logo" />
    <p>Easy test</p>
  </header>;

export default Header;
