import React, { useEffect, useState } from 'react';
import ScrollableWidgetPanel from './ScrollableWidgetPanel';
import DetailComponent from './DetailComponent';
import DetailView from './DetailView';
import WidgetBar from './WidgetBar';
import { PeekWidget } from '../types';
import getFormattedName from '../mapNames';

interface ProjectsProps {
    filter: string | undefined;
}

function scrollToTopOfProjects(top = 0) {
    setTimeout(() => {
        window.scrollTo({ top: top, behavior: 'smooth' });
    }, 100);
}

const Projects: React.FC<ProjectsProps> = ({ filter }) => {

    const [formattedSelectedPeek, setFormattedSelectedPeek] = useState<string>('');
    const [widgetData, setWidgetData] = useState<PeekWidget[]>([]);
    const [selectedPeek, setSelectedPeek] = useState<string | undefined>('');
    const [peekCommonPathPrefix, setPeekCommonPathPrefix] = useState<string>('');
    const [peekExtension, setPeekExtension] = useState<string>('');
    const detailViewRef = React.createRef<HTMLDivElement>();

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

    // Get the y position of the detail view on load
    const getDetailViewYPosition = () => {
        const pos = detailViewRef.current?.getBoundingClientRect().top;
        console.log('pos:', pos);
        return pos ? window.scrollY + pos - 100 : 0;
    }

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
            scrollToTopOfProjects(getDetailViewYPosition());
            return;
        }

        const mappedTitle = await getFormattedName(peek);
        setSelectedPeek(peek);
        setFormattedSelectedPeek(mappedTitle);
        localStorage.setItem('selectedPeek', peek as string);

        scrollToTopOfProjects(getDetailViewYPosition());
        
    };

    const filteredWidgets = selectedPeek
        ? widgetData.filter((widget) => widget.peek.includes(selectedPeek))
        : widgetData;

    const peekImage = peekCommonPathPrefix + selectedPeek + peekExtension

    return (
        <div 
        ref={detailViewRef}
        >            
            <DetailView title={'Personal Projects'}
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
