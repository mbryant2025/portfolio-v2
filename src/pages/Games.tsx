import React from 'react';
// import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
// import WidgetComponent from '../components/WidgetComponent';
// import GeometryWidgetView from '../components/GeometryWidgetView';
// import { Widget } from '../types';
// import BackButton from '../components/BackButton';

const Homepage: React.FC = () => {
    // const widgetData: Widget[] = [
    //     { title: 'Maze Solver', subtitle: 'Draw your own mazes!', link: '/games/maze-solver', image: './img/project-thumbnails/maze-solver.png' },
    //     { title: 'Chaotic Snake', subtitle: 'Various custom snake games', link: '/games/snake', image: './img/project-thumbnails/snake.png' },
    //     { title: 'Eight Queens', subtitle: 'Arrange 8 queens that don\'t threaten each other', link: '/games/eight-queens', image: './img/project-thumbnails/queens.png' },
    //     // { title: 'Super Meme Bros', subtitle: 'Meme-hunting platformer where memes have effects', link: '/games/super-meme-bros', image: './img/project-thumbnails/super-meme-bros.png' },
    //     { title: 'Sociology Arcade', subtitle: 'Sociology-related games!', link: '/games/sociology-arcade', image: './img/games/sociology/connections.png' }
    // ];

    return (
        <div>
            {/* <BackButton />
            <GeometryWidgetView scrollWidgets={<ScrollableWidgetPanel title='Games and Simulations'>
                {widgetData.map((widget) => (
                    <WidgetComponent key={widget.title} title={widget.title} subtitle={widget.subtitle} link={widget.link} image={widget.image} />
                ))}
            </ScrollableWidgetPanel>} shape='octahedron' /> */}
        </div>
    );
};

export default Homepage;

