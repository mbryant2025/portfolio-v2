import React from 'react';
import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
import WidgetComponent from '../components/WidgetComponent';
import BackButton from '../components/BackButton';
import '../components/styles/skills.css'


const Skills: React.FC = () => {


  const widget: { title: string, subtitle: string, link: string, image: string } = { title: 'Technical Skills', subtitle: 'Plus relevant experiences', link: '/skills', image: './src/img/skills-thumbnails/programming.png' };

  return (
    <div>
      <BackButton />
      <ScrollableWidgetPanel title='Michael Bryant'>
        <img src={"/img/michael.jpg"} alt={"Michael Bryant"} className="michael" />
        <WidgetComponent title={widget.title} subtitle={widget.subtitle} link={widget.link} image={widget.image} />
      </ScrollableWidgetPanel>
    </div>
  );
};

export default Skills;

