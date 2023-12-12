import React from 'react';
import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
import WidgetComponent from '../components/WidgetComponent';
import GeometryWidgetView from '../components/GeometryWidgetView';
import { Widget } from '../types';

const Homepage: React.FC = () => {
  const widgetData: Widget[] = [
    { title: 'Project Portfolio', subtitle: 'Includes writeups', link: '/projects', image: './img/project-thumbnails/vision-guided-robot.JPG' },
    { title: 'About Me', subtitle: 'Technical skills', link: '/skills', image: './img/michael-robot.jpeg' },
    { title: 'Games and Simulations', subtitle: 'Run now in the browser', link: '/games', image: './img/project-thumbnails/maze-solver.png' }
  ];

  return (
    <div>
      <GeometryWidgetView scrollWidgets={<ScrollableWidgetPanel title='Michael Bryant'>
        {widgetData.map((widget) => (
          <WidgetComponent key={widget.title} title={widget.title} subtitle={widget.subtitle} link={widget.link} image={widget.image} />
        ))}
      </ScrollableWidgetPanel>} shape='tetrahedron'/>
    </div>
  );
};

export default Homepage;

