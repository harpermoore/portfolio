function App() {
 
  return (
    <>
    <div className="flex flex-row justify-center items-center px-120 gap-16 mt-36">
      <img src="./public/profile-pic.png" alt="profile-picture" className="w-36"/>
      <div className="flex flex-col justify-center items-start gap-3">
        <p className="text-4xl font-bold tracking-wide">About Harper</p>
        <p className="text-lg font-semibold">{`{ Full-Stack Developer, UX Engineer }`}</p>
        <p>I believe learning goes beyond the classroom. It happens wherever I find opportunities to grow. I see self-growth as a journey that requires consistent effort, taken one step at a time. With this mindset, I’m always ready to take on new challenges and keep evolving.</p>
      </div>
      
    </div>

    </>
  )
}

export default App
