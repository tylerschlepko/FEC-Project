import { createContext, useState, useEffect, useRef } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const profileMenuBtnRef = useRef();
  const profileMenuRef = useRef();
  const loginMenuRef = useRef();
  const langMenuRef = useRef();
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);
  const [isLoginMenuVisible, setIsLoginMenuVisible] = useState(false);
  const [isLangMenuVisible, setIsLangMenuVisible] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuVisible(!isProfileMenuVisible)
    document.getElementById('nav-bar-profile-menu-btn').classList.toggle('profile-menu-btn-shadow')
  }

  const openLoginMenu = () => {
    setIsLoginMenuVisible(true);
    toggleProfileMenu();
  }

  const closeLoginMenu = () => {
    setIsLoginMenuVisible(false);
  }

  const openLangMenu = () => {
    setIsLangMenuVisible(true);
  }

  const closeLangMenu = () => {
    setIsLangMenuVisible(false);
  }

  // Profile Menu outside-click, close-menu use-effect
  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu, then close the menu and toggle the shadow off
      if (isProfileMenuVisible && profileMenuRef.current && !profileMenuRef.current.contains(e.target) && profileMenuBtnRef.current && !profileMenuBtnRef.current.contains(e.target)) {
        setIsProfileMenuVisible(false)
        document.getElementById('nav-bar-profile-menu-btn').classList.toggle('profile-menu-btn-shadow')
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isProfileMenuVisible])
  
  // Login Menu outside-click, close-menu use-effect
  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu, then close the menu and toggle the shadow off
      if (isLoginMenuVisible && loginMenuRef.current && !loginMenuRef.current.contains(e.target)) {
        setIsLoginMenuVisible(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isLoginMenuVisible])
  
  // Language Menu outside-click, close-menu use-effect
  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the menu is open and the clicked target is not within the menu, then close the menu and toggle the shadow off
      if (isLangMenuVisible && langMenuRef.current && !langMenuRef.current.contains(e.target)) {
        setIsLangMenuVisible(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isLangMenuVisible])

  // Disables vertical scroll-bar when Login/Language window is visible
  useEffect(() => {
    isLoginMenuVisible || isLangMenuVisible
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isLoginMenuVisible, isLangMenuVisible]);

  return (
    <NavContext.Provider
      value={{
        profileMenuBtnRef,
        profileMenuRef,
        loginMenuRef,
        langMenuRef,
        toggleProfileMenu,
        openLoginMenu,
        closeLoginMenu,
        openLangMenu,
        closeLangMenu,
        isProfileMenuVisible,
        isLoginMenuVisible,
        isLangMenuVisible
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
