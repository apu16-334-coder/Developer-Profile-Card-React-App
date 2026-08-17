import PageHeader from "./components/PageHeader";
import DeveloperCard from "./components/DeveloperCard";

const developers = [
  {
    id: 1,
    name: 'Muhammad Apu Hossain',
    role: 'Backend Developer',
    location: 'Dhaka, Bangladesh',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL'],
    isAvailable: true,
    level: 'Junior'
  },
  {
    id: 2,
    name: 'Sarah Ahmed',
    role: 'Frontend Developer',
    location: 'Chittagong, Bangladesh',
    skills: ['React', 'TypeScript', 'Tailwind'],
    isAvailable: false,
    level: 'Senior'
  },
  {
    id: 3,
    name: 'Karim Hassan',
    role: 'Full Stack Developer',
    location: 'Remote',
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    isAvailable: true,
    level: 'Senior'
  },
  {
    id: 4,
    name: 'Nadia Islam',
    role: 'Backend Developer',
    location: 'Dhaka, Bangladesh',
    skills: [],
    isAvailable: false,
    level: 'Junior'
  }
]

function App() {
    const developerCard = developers.map(developer => {
        const {id, ...rest} = developer;
        return <DeveloperCard key = {id} {...rest} />
    })

    return (
        <>
            <PageHeader title='Welcome To Developer Profile List' />
            {developerCard}
        </>
    )
}

export default App;