import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: 'none',
        border: '2px solid var(--accent-color)',
        color: 'var(--accent-color)',
        padding: '6px 12px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: '600',
        marginLeft: '20px'
      }}
      aria-label="Toggle dark/light theme"
    >
      {theme === 'dark' ? 'Mode clair ☀️' : 'Mode sombre 🌙'}
    </button>
  );
}

export default ThemeSwitcher;
