import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(60); // 設定倒數 60 秒
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number | undefined;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      clearInterval(interval);
      alert("時間到！");
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setSeconds(60);
    setIsActive(false);
  };

  return (
    <div className="timer-container">
      <h1>我的 PWA 計時器</h1>
      <div className="time-display">
        {seconds} <span>秒</span>
      </div>
      <div className="controls">
        <button onClick={toggle} className={`btn ${isActive ? 'pause' : 'start'}`}>
          {isActive ? '暫停' : '開始'}
        </button>
        <button onClick={reset} className="btn reset">
          重設
        </button>
      </div>
      <p className="pwa-hint">安裝後即可離線使用</p>
    </div>
  )
}

export default App