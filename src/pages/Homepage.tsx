import React from 'react';
import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
import WidgetComponent from '../components/WidgetComponent';
import GeometryWidgetView from '../components/GeometryWidgetView';
import { Widget } from '../types';

const Homepage: React.FC = () => {
  const widgetData: Widget[] = [
    { title: 'Project Portfolio', subtitle: 'Includes writeups', link: '/projects', image: './src/img/project-thumbnails/flight-tracker.png' },
    { title: 'Technical Skills', subtitle: 'Plus relevant experiences', link: '/skills', image: './src/img/skills-thumbnails/programming.png' },
    { title: 'Games', subtitle: 'I like to make obnoxious games', link: 'https://www.google.com', image: './src/img/games-thumbnails/pong.png' },
    { title: 'About Me', subtitle: 'Bio, Contact', link: 'https://www.google.com', image: './src/img/about-me-thumbnails/face.png' },
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

