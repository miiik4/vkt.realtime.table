import { getTimeOfDate } from 'src/utils/time';
import './Header.css';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="headerWrapper">
      <h2>logo</h2>
      <h2 className="headerTitle">{title}</h2>
      <h2 className="headerClock">{getTimeOfDate(new Date().toString())}</h2>
    </div>
  );
};

export default Header;
