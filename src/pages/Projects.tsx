import React from 'react';
import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
import WidgetPeekComponent from '../components/WidgetPeekComponent';
import GeometryWidgetView from '../components/GeometryWidgetView';
import { PeekWidget } from '../types';

const Projects: React.FC = () => {
  const widgetData: PeekWidget[] = [
    { title: 'Flight Tracker', subtitle: 'Ground plane antenna and SDR to decode ADS-B transmissions', link: 'https://www.google.com', image: './img/project-thumbnails/flight-tracker.png', peek: ['/img/skill-categories/python.png', '/img/skill-categories/raspberry-pi.png', '/img/skill-categories/js.png', '/img/skill-categories/html.png', '/img/skill-categories/css.png'] },
    { title: 'Plane GAN', subtitle: 'GAN to generate images of planes', link: 'https://www.google.com', image: './img/project-thumbnails/plane-gan.png', peek: ['/img/skill-categories/python.png', '/img/skill-categories/tensorflow.png'] },
    { title: 'Ball Balancing Robot', subtitle: 'Computer vision ball tracking, dual PID controllers', link: 'https://www.google.com', image: './img/project-thumbnails/ball-balancing.png', peek: ['/img/skill-categories/cc.png', '/img/skill-categories/opencv.png', '/img/skill-categories/arduino.png'] },
    { title: 'Vision Guided Robot', subtitle: 'Autonomous obstacle avoidance', link: 'https://www.google.com', image: './img/project-thumbnails/vision-guided-robot.JPG', peek: ['/img/skill-categories/python.png', '/img/skill-categories/tensorflow.png', '/img/skill-categories/opencv.png', '/img/skill-categories/raspberry-pi.png'] },
  ];

  return (
    <div>
      <GeometryWidgetView scrollWidgets={<ScrollableWidgetPanel title='Projects'>
        {widgetData.map((widget) => (
          <WidgetPeekComponent title={widget.title} subtitle={widget.subtitle} link={widget.link} image={widget.image} peek={widget.peek}/>
        ))}
      </ScrollableWidgetPanel>} shape='tetrahedron'/>
    </div>
  );
};

export default Projects;

