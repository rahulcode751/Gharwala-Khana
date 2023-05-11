import react from "react";
import "../index.css";
import Aboutusimg from '../images/aboutus.jpg';
const AboutusPara = () => {
    return (
        <>
            <img src={Aboutusimg} alt="About us img" className="h-full w-full heighta" style={{ width: "100vw" }} />
            <div className="py-4">

                <h1 className="text-center text-2xl py-4 sm:text-3xl md:text-4xl" style={{ fontFaimily: "unset", fontWeight: "600" }}>Welcome to Gharwala Khana</h1>
                <p className="px-8 text-justify text-sm sm:text-md lg:text-lg" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="px-8 text-justify text-sm sm:text-md lg:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


                <h6 className="py-2 px-8 text-xl font-medium pt-6 sm:text-2xl ">About:</h6>
                <p className="px-8 font-semibold text-sm sm:text-md lg:text-lg"> <span className="font-bolder  text-xl">*</span>Inception of idea and motive of our project :</p>
                <p className="px-8 py-1 text-justify text-sm sm:text-md lg:text-lg">&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p className="px-8 py-1 text-justify text-sm sm:text-md lg:text-lg">&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </>
    );
}
export default AboutusPara;