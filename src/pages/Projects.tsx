import React, { useEffect, useState } from 'react';
import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
import WidgetPeekComponent from '../components/WidgetPeekComponent';
import GeometryWidgetView from '../components/GeometryWidgetView';
import BackButton from '../components/BackButton';
import WidgetBar from '../components/WidgetBar';
import { PeekWidget } from '../types';
import getFormattedName from '../mapNames';

interface ProjectsProps {
    filter: string | undefined;
}

const Projects: React.FC<ProjectsProps> = ({ filter }) => {
    const [widgetData, setWidgetData] = useState<PeekWidget[]>([]);
    const [selectedPeek, setSelectedPeek] = useState<string | undefined>(filter);
    const [peekCommonPathPrefix, setPeekCommonPathPrefix] = useState<string>('');
    const [peekExtension, setPeekExtension] = useState<string>('');
    const [formattedSelectedPeek, setFormattedSelectedPeek] = useState<string>('');

    useEffect(() => {
        const fetchFormattedName = async () => {
            try {
                const formattedName = await getFormattedName(filter as string);
                setFormattedSelectedPeek(formattedName);
            } catch (error) {
                console.error('Error fetching and setting formatted name:', error);
            }
        };

        if (filter !== undefined) {
            fetchFormattedName();
        }
    }, [filter]);

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
                setPeekCommonPathPrefix(peekCommonPathPrefix);
                setPeekExtension(peekExtension);
            } catch (error) {
                console.error('Error fetching JSON:', error);
            }
        };

        fetchData();
    }, []);

    const handlePeekClick = async (peek: string | undefined) => {
        if (peek === selectedPeek) {
            setSelectedPeek(undefined);
            return;
        }

        const mappedTitle = await getFormattedName(peek);
        setSelectedPeek(peek);
        setFormattedSelectedPeek(mappedTitle);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const filteredWidgets = selectedPeek
        ? widgetData.filter((widget) => widget.peek.includes(selectedPeek))
        : widgetData;

    const peekImage = peekCommonPathPrefix + selectedPeek + peekExtension

    console.log(filteredWidgets)

    return (
        <div>
            <BackButton />
            <GeometryWidgetView
                scrollWidgets={
                    <ScrollableWidgetPanel title='Projects'>
                        {selectedPeek !== undefined && (
                            <WidgetBar image={peekImage} title={formattedSelectedPeek} onClick={() => handlePeekClick(undefined)} />
                        )}
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
