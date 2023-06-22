import React, { useEffect, useState } from 'react';
import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
import WidgetPeekComponent from '../components/WidgetPeekComponent';
import GeometryWidgetView from '../components/GeometryWidgetView';
import { PeekWidget } from '../types';

const Projects: React.FC = () => {
    const [widgetData, setWidgetData] = useState<PeekWidget[]>([]);
    const [selectedPeek, setSelectedPeek] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/projects.json');
                const jsonData = await response.json();

                const { imageCommonPathPrefix, peekCommonPathPrefix, peekExtension, widgetData } = jsonData;

                const modifiedWidgetData = widgetData.map((widget: PeekWidget) => ({
                    ...widget,
                    image: imageCommonPathPrefix + widget.image,
                    peekImages: widget.peek.map((peekPath: string) => peekCommonPathPrefix + peekPath + peekExtension),
                  }));

                setWidgetData(modifiedWidgetData);
            } catch (error) {
                console.error('Error fetching JSON:', error);
            }
        };

        fetchData();
    }, []);

    const handlePeekClick = (peek: string | undefined) => {

        if (peek === selectedPeek) {
            setSelectedPeek(undefined);
            return;
        }

        setSelectedPeek(peek);
    };

    const filteredWidgets = selectedPeek
        ? widgetData.filter((widget) => widget.peek.includes(selectedPeek))
        : widgetData;

    //log all widget images
    widgetData.forEach((widget) => {
        console.log(widget.image);
    });
    
    return (
        <div>
            <GeometryWidgetView
                scrollWidgets={
                    <ScrollableWidgetPanel title='Projects'>
                        {filteredWidgets.map((widget) => (
                            <WidgetPeekComponent
                                key={widget.title}
                                title={widget.title}
                                subtitle={widget.subtitle}
                                link={widget.link}
                                image={widget.image}
                                peek={widget.peek}
                                peekImages={widget.peekImages}
                                onClick={handlePeekClick}
                            />
                        ))}
                    </ScrollableWidgetPanel>
                }
                shape='tetrahedron'
            />
        </div>
    );
};

export default Projects;
