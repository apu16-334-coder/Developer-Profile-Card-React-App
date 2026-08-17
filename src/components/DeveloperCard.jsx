import SkillList from "./SkillList";

function DeveloperCard({name, role, location, skills, isAvailable, level}) {
    return (
        <>
            <h2>{name}</h2>
            <p>{role}</p>
            <p>{location}</p>
            <SkillList skills = {skills} />
            <p>{isAvailable ? '✅ Open to work' : '❌ Not available'}</p>
            <p><span>{level === 'Senior' && '⭐'} {level}</span></p>
            
            <button>View Profile</button>
            
        </>
    )
}

export default DeveloperCard;