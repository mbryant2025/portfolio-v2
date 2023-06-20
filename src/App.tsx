import React from 'react';
import ScrollableWidgetPanel from './components/ScrollableWidgetPanel';
import WidgetComponent from './components/WidgetComponent';
import GeometryWidgetView from './components/GeometryWidgetView';
import { Widget } from './types';

const App: React.FC = () => {
  const widgetData: Widget[] = [
    { title: 'Project Portfolio', subtitle: 'Full list of writeups', link: 'https://www.google.com' },
    { title: 'Technical Skills', subtitle: 'Includes relevant experiences', link: 'https://www.google.com' },
    { title: 'Games', subtitle: 'I like to make obnoxious games', link: 'https://www.google.com' },
    { title: 'About Me', subtitle: 'Bio, Contact', link: 'https://www.google.com' },
  ];

  return (
    <div>
      <GeometryWidgetView scrollWidgets={<ScrollableWidgetPanel title="Michael Bryant">
        {widgetData.map((widget) => (
          <WidgetComponent title={widget.title} subtitle={widget.subtitle} link={widget.link} />
        ))}
      </ScrollableWidgetPanel>} />

      {/* <ScrollableWidgetPanel>
        {widgetData.map((widget) => (
          <WidgetComponent title={widget.title} subtitle={widget.subtitle} link={widget.link} />
        ))}
      </ScrollableWidgetPanel> */}
    </div>
  );
};

export default App;
