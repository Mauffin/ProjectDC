export default function App() {
  return (
    <>
    <header className="">
      menu
    </header>
    
    <div className="container mx-auto  bg-[#ffffff] h-screen">
    <div className="sm:grid grid-cols-1 grid-rows-2 gap-4 font-display ">
    <div className="sm:pt-20">
      <p className="text-4xl font-bold ">Damian Cardenas</p>
      <p className="sm:font-display font-extrabold text-3xl bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
        Full Stack<br/> Web 
        <br/> Development</p>
      <p className="  text-lg  font-semibold">Me encanta crear imaginar y codificar<br/>
        cosas para hacerlas reales y accesibles
        !Este es mi portafolio!</p>
    </div>
    <div className="grid grid-col-1 grid-rows-1 place-content-center " >
      <img className="sm:h-80  w-80  pt-20" src="src/assets/program.svg"   alt="program">
      </img>
    </div>
</div>

{/* card */}
    <div className="max-w-[900px] w-full  mx-auto pt-32">

        <div className=" flex flex-col  max-w-[800px] 
        sm:flex-row md:flex-row mx-auto ">
        {/* card izq*/}
        <div className="flex flex-col flex-row-5  w-80 pb-10  mx-auto">
          
          <div className="flex justify-center">
            <img className='w-20 h-20' src="src/assets/icon2.svg" alt="" />
          </div>
          <br />
          <div className="flex justify-center font-bold text-[#6E07F3]">
            <p>Frontend</p>
          </div>
          <div className="flex justify-center">
            <p>Html, Css, Javascript, React, Spring</p>
          </div>
          <br />
          <div className="flex justify-center font-bold text-[#6E07F3]">
            <p>Desing tools</p>
          </div>
          <div className="flex justify-center ">
            <p> Figma, Tailwind, Boostrap</p>
          </div>
          
        </div>
    {/*card der*/}
        <div className="flex flex-col flex-row-3 w-80 mx-auto ">
          
          <div className="flex justify-center">
            <img className='w-20 h-20' src="src/assets/icon.svg" alt="" />
          </div>
          <br />

          <div className="flex justify-center font-bold text-[#6E07F3]">
            <p>Backend</p>
          </div>
         
          <div className="flex justify-center">
            <p>Python, java, mySql, mongoDB</p>
          </div>
          <br />
          <div className="flex justify-center font-bold text-[#6E07F3]">
            <p>Dev Tools</p>
          </div>
         
          <div className="flex justify-center">
            <p>Git, Github, Express, Flask</p>
          </div>
        </div>

        </div>
    </div>
    {/*end card */}
    </div>


     
   
    </>
    
  )
}