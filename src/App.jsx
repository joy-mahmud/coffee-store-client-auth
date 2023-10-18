import { Outlet, useLoaderData } from "react-router-dom"
import CoffeCard from "./components/CoffeCard"
import { useState } from "react"
// import Header from "./components/Header"


function App() {

  const coffeCollection = useLoaderData()
  const [coffes,setCoffes] = useState(coffeCollection)
 

  return (
    <>
    {/* <Header></Header> */}
     
      <h1>Hot and cold coffies</h1>
      <div className="grid md:grid-cols-2 gap-5">
        {
          coffes.map(coffe=><CoffeCard key={coffe._id} coffee={coffe} coffes={coffes} setCoffes={setCoffes}></CoffeCard>)
        }
        <Outlet></Outlet>
        
      </div>
    
    </>
  )
}

export default App
