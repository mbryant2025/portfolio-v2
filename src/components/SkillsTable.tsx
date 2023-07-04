import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getFormattedName from '../mapNames';
import './styles/skills.css'

interface Skill {
    name: string;
    start_year: number;
}

const SkillsTable: React.FC = () => {
    const [skills, setSkills] = useState<Skill[]>([]);

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

    return (
        <div>
            <table className="skill-table">
                <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Experience</th>
                        <th>Projects</th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map((skill, index) => (
                        <tr key={index}>
                            <td>
                                <img src={`/img/skill-categories/${skill.name}.png`} alt={""} />
                                <div className="skill-title">
                                    {skill.name}
                                </div>
                            </td>
                            <td>
                                {new Date().getFullYear() - skill.start_year + 1}{' '}
                                {new Date().getFullYear() - skill.start_year + 1 === 1
                                    ? 'year'
                                    : 'years'}
                            </td>
                            <td>
                                <Link to="/projects?filter=opencv">
                                    <div className="button">
                                        <p>View</p>
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
