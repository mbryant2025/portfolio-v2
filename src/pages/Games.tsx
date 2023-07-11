import React from 'react';
import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
import WidgetComponent from '../components/WidgetComponent';
import GeometryWidgetView from '../components/GeometryWidgetView';
import { Widget } from '../types';
import BackButton from '../components/BackButton';

const Homepage: React.FC = () => {
    const widgetData: Widget[] = [
        { title: 'Snake+', subtitle: 'Standard Snake with a twist', link: '/games/snake-plus', image: './img/project-thumbnails/snake.png' },
        { title: 'Snake++', subtitle: 'There may or may not be an emeny snake', link: '/games/snake-plus-plus', image: './img/project-thumbnails/snake.png' },
        { title: 'Snake+++', subtitle: 'Cursed Snake', link: '/games/snake-plus-plus-plus', image: './img/project-thumbnails/snake.png' },
        { title: 'Snake---', subtitle: 'Maximally cursed Snake', link: '/games/snake-minus-minus-minus', image: './img/project-thumbnails/snake.png' }
    ];

    return (
        <div>
            <BackButton />
            <GeometryWidgetView scrollWidgets={<ScrollableWidgetPanel title='Games'>
                {widgetData.map((widget) => (
                    <WidgetComponent key={widget.title} title={widget.title} subtitle={widget.subtitle} link={widget.link} image={widget.image} />
                ))}
            </ScrollableWidgetPanel>} shape='octahedron' />
        </div>
    );
};

export default Homepage;

