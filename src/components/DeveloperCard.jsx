function DeveloperCard({name, role, location, skills, isAvailable, level}) {
    return (
        <>
            <h1>{name}</h1>
            <p>{role}</p>
            <p>{location}</p>
            <p>{skills}</p>
            <p>{isAvailable ? '✅ Open to work' : '❌ Not available'}</p>
            <p><span>{level === 'Senior' && '⭐'} {level}</span></p>
            
            <button>View Profile</button>
            
        </>
    )
}

export default DeveloperCard;