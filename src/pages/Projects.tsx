import React, { useEffect, useState } from 'react';
import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
import WidgetPeekComponent from '../components/WidgetPeekComponent';
import GeometryWidgetView from '../components/GeometryWidgetView';
import { PeekWidget } from '../types';

const Projects: React.FC = () => {

    const [widgetData, setWidgetData] = useState<PeekWidget[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('/projects.json');
            const jsonData = await response.json();
    
            const { imageCommonPathPrefix, peekCommonPathPrefix, peekExtension, widgetData } = jsonData;
            const modifiedWidgetData = widgetData.map((widget: PeekWidget) => ({
              ...widget,
              image: imageCommonPathPrefix + widget.image,
              peek: widget.peek.map((peekPath: string) => peekCommonPathPrefix + peekPath + peekExtension),
            }));
    
            setWidgetData(modifiedWidgetData);
          } catch (error) {
            console.error('Error fetching JSON:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div>
            <GeometryWidgetView scrollWidgets={<ScrollableWidgetPanel title='Projects'>
                {widgetData.map((widget) => (
                    <WidgetPeekComponent title={widget.title} subtitle={widget.subtitle} link={widget.link} image={widget.image} peek={widget.peek} />
                ))}
            </ScrollableWidgetPanel>} shape='tetrahedron' />
        </div>
    );
};

export default Projects;

