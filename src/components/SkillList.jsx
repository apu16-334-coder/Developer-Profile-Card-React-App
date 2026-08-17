function SkillList({ skills }) {

    if (skills.length === 0) return <p>No skills listed yet.</p>;

    return (
        <ol>
            {skills.map(skill => <li key={skill}>{skill}</li>)}
        </ol>
    )
}

export default SkillList;