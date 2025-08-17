import ProjectSection from "./components/projectSection"
import HorizontalLine from "./components/HorizontalLine"


const projects = [
  {
    title: "Building Automation @Salesforce Sponsor",
    description: "Built features with POC that enhance the collaboration experience in Salesforce Flow Builder based on 9 user interviews with Salesforce admin users."
  }, 
  {
    title: "Sniff and Seek", 
    description: "Built a cross-platform mobile application with location-based search function, implementing HTTP/JSON API, React component-driven design, UI/UX design, and visual design."
  }, 
  {
    title: "Besmoke Scientific",
    description: "Developed an inventory management system powered by ASP.NET and React and implemented CRUD operaitons with EF Core."
  }
]




function App() {
 
  return (
    <>
    <div className="flex flex-col justify-center items-center px-160">
    <div className="flex flex-row justify-center items-center gap-16 mt-36">
      <img src="./public/profile-pic.png" alt="profile-picture" className="w-36"/>
      <div className="flex flex-col justify-center items-start gap-3">
        <p className="text-2xl font-bold tracking-wide underline decoration-pink-500/30 decoration-4">Harper Moore</p>
        <p className="text-lg font-semibold">{`{ Full-Stack Developer, UX Engineer }`}</p>
        <p className="text-lg">I believe learning goes beyond the classroom. It happens wherever I find opportunities to grow. I see self-growth as a journey that requires consistent effort, taken one step at a time. With this mindset, I’m always ready to take on new challenges and keep evolving.</p>
        
      </div>
    </div>


    <HorizontalLine/>
    <div className="flex flex-col justify-center items-start mt-6">
    <p className="text-2xl font-bold tracking-wide underline decoration-pink-500/30 decoration-4 ">Selected Projects</p>

    {projects.map((project)=>{
      return (<ProjectSection 
      title={project.title}
      description={project.description}
      key={project.title}
      />)
    })}

    </div>





    
    </div>
  

     <p className="fixed bottom-0 w-full text-center">©{new Date().getFullYear()} Created by Harper Moore</p>
    </>
  )
}

export default App
