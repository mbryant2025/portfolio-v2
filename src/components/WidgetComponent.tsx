import React from 'react';
import { Widget } from '../types';
import './styles/widgets.css'

const WidgetComponent: React.FC<Widget> = ({ title, subtitle, link }) => {
  return (
    <div className="widget" onClick={() => window.open(link, '_blank')}>
      <div className="container">
        <div className="text-col"> 
          <div className="text-box">
            <p className="widget-title">{title}</p>
            <p className="widget-subtitle">{subtitle}</p>
          </div>
        </div>
        <div className="image-col"> 
          <img src="https://via.placeholder.com/150" alt="placeholder" className="image"/>
        </div>
      </div>
    </div>
  );
};

export default WidgetComponent;
