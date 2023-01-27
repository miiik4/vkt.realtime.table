import { getDateTime } from 'src/utils/time';
import './Header.css';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="headerWrapper">
      <h1>logo</h1>
      <h1 className="headerTitle">{title}</h1>
      <h1>{getDateTime(new Date().toString())}</h1>
    </div>
  );
};

export default Header;
