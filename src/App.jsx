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
    <div className="grid grid-col-1 grid-rows-1 place-content-center border-4" >
      <img className="sm:h-80  w-80  pt-20" src="src/assets/program.svg"   alt="program">
      </img>
    </div>
    
</div>
    <div className="container h-96 w-96  mx-auto border-4">
      <div className=" border-4 min-w-max min-h-[420px]:" >
        <div className="sm:grid grid-cols-1 grid-rows-1 gap-4 
                        md:grid grid-cols-2 grid-rows-1 ">
          <div className="flex flex-col flex-row-2 mx-auto h-screen" >
          
          <div className="flex flex-col flex-row-2  "> 
            <div className="flex justify-center">
              <img className="h-20 w-20 "  src="src/assets/icon.svg" alt="" /></div>
            <div className="flex justify-center text-xl"><p>Frontend</p></div>
           </div>
            
           <br />
            <div className="flex flex-col flex-row-3">
              <div className="flex justify-center">
                <span className="text-lg">
                  <p>Html, Css, Javascript, React, Spring</p>
                </span>
                
              </div>
              <br />
              <div className="flex justify-center">
                <span className="text-xl">
                  <p>dev tools</p>
                </span>
              </div>
              <br />
              <div className="flex justify-center">
                <span className="text-lg">
                  <p>Git, Github, Tailwind, Boostrap</p>
                </span>
                
              </div>
            </div>
             
              
              
            
          </div>

          <div className="flex flex-col flex-row-1">
          <img className="h-20 w-20 "  src="src/assets/icon2.svg" alt="" />
          </div>
        </div>
      </div>
      
    </div>
      
    </div>


     
   
    </>
    
  )
}