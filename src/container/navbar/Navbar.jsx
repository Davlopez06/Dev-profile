import { useRef, useState } from 'react';
import NavbarInfo from '../../datalist/navbarOptions.json';
import useWindowSize from '../../utils/useWindowSize';
import SideMenuIcon from '../../asets/icons/SideMenuIcon';
import style from './Navbar.module.scss';

const Navbar = () => {
  const { isMobile, isTablet } = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);
  const mobileItemRef = useRef(null);

  function goToId(id) {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMenu(false);
  }

  const getMenuIcon = () => {
    if (!isMobile && !isTablet) return null;
    const sideMenuStyle = showMenu ? { background: '#F4F6F7' } : {};

    return (
      <div className={style.navbarMenuIcon}>
        <SideMenuIcon
          onClick={() => setShowMenu(!showMenu)}
          style={sideMenuStyle}
        />
        <p>Welcome to my dev profile</p>
      </div>
    );
  };

  const getHeight = () => {
    if (mobileItemRef.current) {
      return mobileItemRef.current.clientHeight;
    }

    return 0;
  };

  const navbarMobileStyle = () => {
    if (showMenu)
      return {
        transform: 'translateX(0)',
        minHeight: `calc(100vh - ${getHeight()}px)`
      };

    return {};
  };

  const getNavbarItems = () => {
    if (!NavbarInfo.options) return null;

    return NavbarInfo.options.map((item, index) => (
      <div
        className={style.navbarItem}
        key={`${item + index}`}
        onClick={() => goToId(item)}
      >
        {item}
      </div>
    ));
  };

  const getMobileNavbarItems = () => (
    <div
      className={style.navbarItemMobile}
      ref={mobileItemRef}
      style={navbarMobileStyle()}
    >
      {getNavbarItems()}
    </div>
  );

  const isMobileNavabar =
    isMobile || isTablet ? getMobileNavbarItems() : getNavbarItems();

  return (
    <div className={style.navbar}>
      {getMenuIcon()}
      {isMobileNavabar}
    </div>
  );
};

export default Navbar;
