import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Dashboard = () => {
  const Userid = localStorage.getItem("Userid");
  const userToken = localStorage.getItem("userToken");
  console.log(Userid);
  const [userdata, setUserdata] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (!userToken) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/user/readOne/${Userid}`
        );
        // console.log(response.data);
        setUserdata(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchdata();
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("Userid");
    localStorage.removeItem("userToken");
    navigate("/login");
    toast.success("Logout successfully!.");
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg shadow-[#52AAFF] rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Profile Dashboard</h1>
      <form>
        <div className="mb-4 flex justify-between">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name : {userdata.name}{" "}
          </label>
        </div>
        <div className="mb-4 flex justify-between">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email : {userdata.email}{" "}
          </label>
        </div>
        <div className="mb-4 flex justify-between">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone : {userdata.phone}
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          onClick={logOutHandler}
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
