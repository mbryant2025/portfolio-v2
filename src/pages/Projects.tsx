import React, { useEffect, useState } from 'react';
import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
import DetailComponent from '../components/DetailComponent';
import DetailView from '../components/DetailView';
import WidgetBar from '../components/WidgetBar';
import { PeekWidget } from '../types';
import getFormattedName from '../mapNames';

interface ProjectsProps {
    filter: string | undefined;
}

const Projects: React.FC<ProjectsProps> = ({ filter }) => {

    const [formattedSelectedPeek, setFormattedSelectedPeek] = useState<string>('');
    const [widgetData, setWidgetData] = useState<PeekWidget[]>([]);
    const [selectedPeek, setSelectedPeek] = useState<string | undefined>('');
    const [peekCommonPathPrefix, setPeekCommonPathPrefix] = useState<string>('');
    const [peekExtension, setPeekExtension] = useState<string>('');

    // Load selected peek from local storage once when the component mounts
    useEffect(() => {
        const savedPeek = localStorage.getItem('selectedPeek');
        if (savedPeek === null || savedPeek === '' || savedPeek === 'undefined') {
            setSelectedPeek(undefined);
        } else {
            setSelectedPeek(savedPeek);
            // Now to set the formatted name
            getFormattedName(savedPeek).then((formattedName) => {
                setFormattedSelectedPeek(formattedName);
            });
        }
    }, []);

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
            localStorage.setItem('selectedPeek', '');
            return;
        }

        const mappedTitle = await getFormattedName(peek);
        setSelectedPeek(peek);
        setFormattedSelectedPeek(mappedTitle);
        localStorage.setItem('selectedPeek', peek as string);

        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    };

    const filteredWidgets = selectedPeek
        ? widgetData.filter((widget) => widget.peek.includes(selectedPeek))
        : widgetData;

    const peekImage = peekCommonPathPrefix + selectedPeek + peekExtension

    return (
        <div>            
            <DetailView title={'Projects'}
                widgetBar = {selectedPeek !== undefined && (
                    <WidgetBar image={peekImage} title={formattedSelectedPeek} onClick={() => handlePeekClick(undefined)} />
                )}
                scrollWidgets={
                    <ScrollableWidgetPanel title=''>
                        {filteredWidgets.map((widget) => (
                            <DetailComponent
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
            />
        </div>
    );
};

export default Projects;
