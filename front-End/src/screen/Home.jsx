import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";


const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
   
    try{
      const {data} = await axios.post('http://localhost:5000/user/create',{
        name,
        email,
        password,
        phone:Number(phone)
            } )
       
      console.log(data)
      // toast(res.data.message)

      if(data.success){
        toast.success(data.message)
        
        setName(" ")
        setEmail(" ")
        setPassword(" ")
        setPhone(" ")

        
        }
        else{
          toast.error(data.message)
        }
      
      }catch(error){
        console.log(error);
        toast.error(error.response.data.message)
      }
  };

  return (
    <>
      <Navbar />
      {/* Sign-up Start */}
      <div className="bg-gray-300 py-6 sm:py-8 ">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className=" text-center text-2xl font-bold text-gray-800  lg:text-3xl">
            Sign-up
          </h2>

          <form  className=" bg-[#FFFFFF]  shadow-xl shadow-[#52AAFF] mx-auto max-w-lg rounded-lg border">
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>

              <button
                type="submit"
                onClick={submitHandler}
                className="block rounded-lg bg-[#52AAFF] px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
              >
                Sign-up
              </button>
            </div>

            <div className="flex items-center justify-center bg-gray-100 p-4">
              <p className="text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  Log-in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      {/* Sign-up End */}
    </>
  );
};

export default Home;
