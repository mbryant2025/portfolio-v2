import React from 'react';
import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
import WidgetComponent from '../components/WidgetComponent';
import GeometryWidgetView from '../components/GeometryWidgetView';
import { Widget } from '../types';

const Homepage: React.FC = () => {
  const widgetData: Widget[] = [
    { title: 'Project Portfolio', subtitle: 'Includes writeups', link: '/projects', image: './img/project-thumbnails/vision-guided-robot.JPG' },
    { title: 'About Me', subtitle: 'Technical skills', link: '/skills', image: './src/img/skills-thumbnails/programming.png' },
    { title: 'Games', subtitle: 'I like to make obnoxious games', link: '/games', image: './src/img/games-thumbnails/pong.png' }
  ];

  return (
    <div>
      <GeometryWidgetView scrollWidgets={<ScrollableWidgetPanel title='Michael Bryant'>
        {widgetData.map((widget) => (
          <WidgetComponent title={widget.title} subtitle={widget.subtitle} link={widget.link} image={widget.image} />
        ))}
      </ScrollableWidgetPanel>} shape='cube'/>
    </div>
  );
};

export default Homepage;

