import React from 'react';
import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
import WidgetComponent from '../components/WidgetComponent';
import GeometryWidgetView from '../components/GeometryWidgetView';
import BackButton from '../components/BackButton';
import { Widget } from '../types';

const Games: React.FC = () => {
    const widgetData: Widget[] = [
        { title: 'Project Portfolio', subtitle: 'Includes writeups', link: '/projects', image: './src/img/project-thumbnails/flight-tracker.png' },
        { title: 'About Me', subtitle: 'Skills and experiences', link: '/skills', image: './src/img/skills-thumbnails/programming.png' },
        { title: 'Games', subtitle: 'I like to make obnoxious games', link: 'https://www.google.com', image: './src/img/games-thumbnails/pong.png' }
    ];

    return (
        <div>
            <BackButton />
            <GeometryWidgetView scrollWidgets={<ScrollableWidgetPanel title='Games'>
                {widgetData.map((widget) => (
                    <WidgetComponent title={widget.title} subtitle={widget.subtitle} link={widget.link} image={widget.image} />
                ))}
            </ScrollableWidgetPanel>} shape='octahedron' />
        </div>
    );
};

export default Games;

