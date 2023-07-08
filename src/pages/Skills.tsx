import React from 'react';
import ScrollableWidgetPanel from '../components/ScrollableWidgetPanel';
import SkillsTable from '../components/SkillsTable';
import BackButton from '../components/BackButton';
import '../components/styles/skills.css'
import FullWidthWidget from '../components/FullWidthWidget';


const Skills: React.FC = () => {

  return (
    <div>
      <BackButton />
      <ScrollableWidgetPanel title='Michael Bryant'>
        <img src={"/img/michael.jpg"} alt={"Michael Bryant"} className="michael" />
        <FullWidthWidget>
          <SkillsTable />
        </FullWidthWidget>
      </ScrollableWidgetPanel>
    </div>
  );
};

export default Skills;

