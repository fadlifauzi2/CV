import { Card } from "flowbite-react"
import pp from "../assets/pp.jpg"

const Profile = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 p-6">
          {/* Left Section */}
          <div className="text-left">
            <p className="text-xl font-medium text-gray-900">Hello There</p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              My Name is
              <br />
              <span className="text-black">Rasya Bayu Pratama</span>
            </h1>
            <p className="text-xl mt-4 font-medium text-gray-900">I’m a 
              <span className="font-bold"> Student</span>
            </p>
          </div>
  
          {/* Right Section */}
          <div className="relative">
            <div className="w-72 h-72 md:w-26 md:h-96 rounded-full overflow-hidden shadow-xl">
              <img
                src={pp}
                alt="Artwork"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

        

    );
  };
  
        
    


export default Profile