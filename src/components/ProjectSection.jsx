
const ProjectSection = ({title, description}) => {
    return(
        <>
        <div className="flex flex-col justify-center items-start mt-4 min-w-full" >
        <p className="text-lg font-semibold">{title}</p>
        <p>{description}</p>
        </div>
        </>
    ) 
}


export default ProjectSection;