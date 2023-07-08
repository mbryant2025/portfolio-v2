import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getFormattedName from '../mapNames';
import './styles/skills.css';

interface Skill {
  name: string;
  category: string;
  start_year: number;
}

const SkillsTable: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [filter, setFilter] = useState<string | undefined>(undefined);
  const [formattedNames, setFormattedNames] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/skills.json');
        const jsonData = await response.json();
        setSkills(jsonData.skills);
      } catch (error) {
        console.error('Error fetching skills data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchFormattedNames = async () => {
      const formattedNamesMap: { [key: string]: string } = {};
      for (const skill of skills) {
        if (!formattedNamesMap[skill.name]) {
          const formattedName = await getFormattedName(skill.name);
          formattedNamesMap[skill.name] = formattedName;
        }
      }
      setFormattedNames(formattedNamesMap);
    };

    fetchFormattedNames();
  }, [skills]);

  const displaySkills = skills.filter((skill) => {
    if (filter === undefined) {
      return true;
    } else {
      return skill.category === filter;
    }
  });

  const isButtonSelected = (category: string | undefined) => {
    return filter === category ? 'button-small' : 'button-small button-neutral';
  };

  const formatSkillName = (name: string): string => {
    return formattedNames[name] || name;
  };

  return (
    <div className="table-container">
      <div className="button-row">
        <div className={isButtonSelected(undefined)} onClick={() => setFilter(undefined)}>
          <p><b>All</b></p>
        </div>
        <div className={isButtonSelected('software')} onClick={() => setFilter('software')}>
          <p><b>Software</b></p>
        </div>
        <div className={isButtonSelected('electronics')} onClick={() => setFilter('electronics')}>
          <p><b>Electrical</b></p>
        </div>
        <div className={isButtonSelected('mechanical')} onClick={() => setFilter('mechanical')}>
          <p><b>Mechanical</b></p>
        </div>
      </div>

      <table className="skill-table">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Experience</th>
            <th>Projects</th>
          </tr>
        </thead>
        <tbody>
          {displaySkills.map((skill, index) => (
            <tr key={index}>
              <td className="skill">
                <img className="skill-image" src={`/img/skill-categories/${skill.name}.png`} alt={''} />
                <div className="skill-title">{formatSkillName(skill.name)}</div>
              </td>
              <td>
                {new Date().getFullYear() - skill.start_year + 1}{' '}
                {new Date().getFullYear() - skill.start_year + 1 === 1 ? 'year' : 'years'}
              </td>
              <td>
                <Link to={`/projects/${skill.name}`} style={{ textDecoration: 'none' }}>
                  <div className="button-small">
                    <p><b>View</b></p>
                  </div>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsTable;
