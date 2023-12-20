import React from 'react';
import { Widget } from '../types';
import { Link } from 'react-router-dom';
import './styles/widgets.css'

const WidgetComponent: React.FC<Widget> = ({ title, subtitle, link, image }) => {
  return (
    <Link to={link} className="link">
      <div className="widget">
        <div className="container">
          <div className="text-col"> 
            <div className="text-box">
              <p className="widget-title">{title}</p>
              <p className="widget-subtitle">{subtitle}</p>
            </div>
          </div>
          <div className="image-col"> 
            <img src={image} alt={title} className="image" draggable="false" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WidgetComponent;
