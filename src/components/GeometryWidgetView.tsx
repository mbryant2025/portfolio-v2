import React from 'react';
import './styles/geometry.css'

interface GeometryWidgetViewProps {
  scrollWidgets: React.ReactNode;
}

const ScrollableWidgetPanel: React.FC<GeometryWidgetViewProps> = ({ scrollWidgets }) => {
  return (
    <div className="wrapper">
        <div>
            {scrollWidgets}
        </div>
        <div>

        </div>
    </div>
  );
};

export default ScrollableWidgetPanel;
