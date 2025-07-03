import { useState, useEffect, useRef, useMemo } from 'react'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useSpring, animated } from 'react-spring';

import reactLogo from './assets/react.svg'
import HTMLLogo from './assets/html-5-logo.svg';
import cssLogo from './assets/css-3-logo.svg';
import viteLogo from '/vite.svg';
import podmig from './assets/podmigivanie.svg';
import shizactorina from './assets/shizactorina.svg'
import shiztelki from './assets/shiztelki.svg';
import deansOffice from './assets/deansOffice.svg';

import './App.css'

import NavContainer from './components/NavContainer'

const projectLinks = {
  shizactorina: "https://github.com/BUBONDUDON/mini-apps/tree/art-victorina",
  shiztelki: "https://github.com/BUBONDUDON/mini-apps/tree/hotelki",
  deansOffice: "https://github.com/BUBONDUDON/bd/tree/deansOffice",
};

function App() {
  const skillWrapperRef = useRef(null);
  const iconHeight = 100; // Высота каждого логотипа, должна совпадать с CSS
  const animationDuration = 10; // Длительность анимации, должна совпадать с CSS
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  const buttonData = [
    { name: "HTML", description: "Изучаю 2 года" },
    { name: "CSS", description: "Изучаю 2 года" },
    { name: "REACT", description: "Использую 1 год" },
    { name: "VK", description: "Использовал для разработки VK Mini Apps 6 месяцев" },
    { name: "C#", description: "Учу в университете 2 года" },
  ];

  // UseMemo, чтобы не пересоздавать объекты при каждом рендере
  const defaultContent = useMemo(() => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40
    }}>
      <KeyboardArrowUpIcon className='arrow' style={{ fontSize: 50 }} />
      <img src={podmig} style={{ height: '6em', color: '#333' }} alt="Winking Face" />
    </div>
  ), []);

  const animatedContent = useSpring({
    opacity: selectedButtonIndex !== 0 ? 1 : 0,
    from: { opacity: 0 },
    reset: true,  // Добавляем reset
    config: { duration: 500 }
  });

  useEffect(() => {
    if (skillWrapperRef.current) {
      const numChildren = skillWrapperRef.current.children.length;
      const totalHeight = numChildren * iconHeight;
      skillWrapperRef.current.style.setProperty(
        "--animationDuration",
        `${animationDuration}s`
      );
      skillWrapperRef.current.style.setProperty(
        "--totalHeight",
        `${totalHeight}px`
      );
    }
  }, []);

  const handleProjectClick = (projectKey) => {
    window.location.href = projectLinks[projectKey];
  };

  return (
    <>
      <div className="mainDiv">
        <div className="skill-container">
          <div className="skill-wrapper" ref={skillWrapperRef}>
            {/* Skill items as before */}
            <img src={HTMLLogo} className="logo skill-item html" alt="html logo" />
            <img src={cssLogo} className="logo skill-item css" alt="css logo" />
            <img src={viteLogo} className="logo skill-item" alt="Vite logo" />
            <img src={reactLogo} className="logo skill-item react" alt="React logo" />
            <img
              src="https://logo-teka.com/wp-content/uploads/2025/06/vk-logo.svg"
              className="logo skill-item VK"
              alt="VK logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/ff/C-Sharp_Logo.svg"
              className="logo skill-item cSharp"
              alt="C# logo"
            />

          </div>
          <div aria-hidden className="skill-wrapper" ref={skillWrapperRef}>
            {/* Skill items as before */}
            <img src={HTMLLogo} className="logo skill-item html" alt="html logo" />
            <img src={cssLogo} className="logo skill-item css" alt="css logo" />
            <img src={viteLogo} className="logo skill-item" alt="Vite logo" />
            <img src={reactLogo} className="logo skill-item react" alt="React logo" />
            <img
              src="https://logo-teka.com/wp-content/uploads/2025/06/vk-logo.svg"
              className="logo skill-item VK"
              alt="VK logo"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/ff/C-Sharp_Logo.svg"
              className="logo skill-item cSharp"
              alt="C# logo"
            />
          </div>
        </div>
        <div className="skill-container info">
          <div className='divHeader'>
            {buttonData.map((item, index) => (
              <button
                key={index}
                style={{ margin: 10, marginBottom: 10, marginTop: 10 }}
                onClick={() => { setSelectedButtonIndex(index + 1); }}
              >
                {item.name} {/* Отображаем название кнопки */}
              </button>
            ))}
          </div>
          <div>
            {selectedButtonIndex === 0 ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40
              }}>
                <KeyboardArrowUpIcon className='arrow' style={{ fontSize: 50 }} />
                <img src={podmig} style={{ height: '6em', color: '#333' }} />
              </div>
            ) : (
              <animated.div className="info-text" style={animatedContent}>
                {selectedButtonIndex === 0 ? (
                  defaultContent // Используем вынесенный элемент
                ) : (
                  <p>{buttonData[selectedButtonIndex - 1].description}</p>
                )}
              </animated.div>
            )}
          </div>
        </div>
      </div >
      <div className='project-container'>
        <div className='project'>
          <button onClick={() => handleProjectClick("shizactorina")}><img src={shizactorina} className='logo shiza' /></button>
          <p>Чуть чуть VKUI и icons Вся маршрутизация на vk-mini-apps-router Размещение при помощи vk-miniapps-deploy</p>
        </div>
        <div className='project'>
          <button onClick={() => handleProjectClick("shiztelki")}><img src={shiztelki} className='logo shiza' /></button>
          <p>VKUI + VK Icons Вся маршрутизация на vk-mini-apps-router Размещение при помощи vk-miniapps-deploy, немного недоделанный правда</p>
        </div>
        <div className='project'>
          <button onClick={() => handleProjectClick("deansOffice")}><img src={deansOffice} className='logo shiza' /></button>
          <p>Всё написано на C# с использованием Windows Forms. Весь код объектно-ориентированный, я старался :)</p>
        </div>
      </div>
    </>
  );
}

export default App;

