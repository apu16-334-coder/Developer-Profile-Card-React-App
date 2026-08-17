function DeveloperCard({name, role, location, skills, isAvailable, level}) {
    return (
        <>
            <h1>{name}</h1>
            <p>{role}</p>
            <p>{location}</p>
            <p>{skills}</p>
            <p>{isAvailable}</p>
            <p>{level}</p>
        </>
    )
}

export default DeveloperCard;