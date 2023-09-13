import React from 'react';
import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
import SkillsTable from '../components/SkillsTable';
import BackButton from '../components/BackButton';
import '../components/styles/skills.css'
import FullWidthWidget from '../components/FullWidthWidget';
import Socials from '../components/Socials';


const Skills: React.FC = () => {

  return (
    <div>
      <BackButton />
      <ScrollableWidgetPanel title='Michael Bryant'>
        <img src={"/img/michael.jpg"} alt={"Michael Bryant"} className="michael" />
        <Socials />

        <FullWidthWidget>
          <SkillsTable />
        </FullWidthWidget>
      </ScrollableWidgetPanel>
    </div>
  );
};

export default Skills;

