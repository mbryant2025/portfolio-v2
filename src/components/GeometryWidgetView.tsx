import React from 'react';
import Polyhedron from './Polyhedron';
import './styles/geometry.css'

interface GeometryWidgetViewProps {
  scrollWidgets: React.ReactNode;
  shape: string;
}

const ScrollableWidgetPanel: React.FC<GeometryWidgetViewProps> = ({ scrollWidgets, shape}) => {
  return (
    <div className="wrapper">
        <div>
            {scrollWidgets}
        </div>
        <div className="polyhedron">
            <Polyhedron type={shape}/>
        </div>
    </div>
  );
};

export default ScrollableWidgetPanel;
