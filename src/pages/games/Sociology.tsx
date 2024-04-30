import React from 'react';
import ScrollableWidgetPanel from '../../components/ScrollableWidgetPanel';
import WidgetComponent from '../../components/WidgetComponent';
import GeometryWidgetView from '../../components/GeometryWidgetView';
import { Widget } from '../../types';
import BackButton from '../../components/BackButton';

const SociologyArcade: React.FC = () => {
    const widgetData: Widget[] = [
        { title: 'Connections', subtitle: 'Blatant ripoff of the NYT game', link: '/games/sociology-arcade/connections', image: './img/games/sociology/connections.png' },
        { title: 'Word Hunt', subtitle: 'Find sociology words!', link: '/games/sociology-arcade/word-hunt', image: './img/games/sociology/wordhunt.png' },
    ];

    return (
        <div>
            <BackButton />
            <GeometryWidgetView scrollWidgets={<ScrollableWidgetPanel title='Sociology Arcade'>
                {widgetData.map((widget) => (
                    <WidgetComponent key={widget.title} title={widget.title} subtitle={widget.subtitle} link={widget.link} image={widget.image} />
                ))}
            </ScrollableWidgetPanel>} shape='cube' />
        </div>
    );
};

export default SociologyArcade;

