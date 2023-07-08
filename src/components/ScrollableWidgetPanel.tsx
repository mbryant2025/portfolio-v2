import React from 'react';
import './styles/scroll.css'

interface ScrollableWidgetPanelProps {
  title: string;
  children: React.ReactNode;
}

const ScrollableWidgetPanel: React.FC<ScrollableWidgetPanelProps> = ({ title, children }) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
};

export default ScrollableWidgetPanel;
