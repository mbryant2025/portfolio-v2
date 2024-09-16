import React from 'react';
import '../styles/scroll.css'

interface ScrollableWidgetPanelProps {
  title: string;
  children: React.ReactNode;
  narrow?: boolean;
}

const ScrollableWidgetPanel: React.FC<ScrollableWidgetPanelProps> = ({ title, children, narrow }) => {
  return (
    <div className={`white-text ${narrow ? 'narrow' : ''}`}>
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
};

export default ScrollableWidgetPanel;
