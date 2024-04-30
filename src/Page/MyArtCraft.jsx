import { useContext, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { AuthContext } from "../Provider/AuthProvider";
import SingleCard3 from "../component/SingleCard3";
const MyArtCraft = () => {
  const { user, loading } = useContext(AuthContext);

  const [ourData, setOurData] = useState([]);
  const [filterData, setFilterData] = useState(ourData)
console.log(user);
  const { register, handleSubmit, } = useForm(); 

  useEffect(() => {
    fetch(`https://new-art.vercel.app/craft-email/${user.email}`)
      .then((res) => res.json())
      .then((d) => {
        setFilterData(d)
        setOurData(d)
      }); 
  }, [user.email]); 

  if (!user.email) {
    return <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mt-14">
     <h1 className="text-xl font-bold">Maybe you login by git hub. that process didnt giv email property </h1>
     <p>you should choice another option for log </p>
     <ul className="text-center">
       <li>
         you should log Out 
       </li>
       <li>
         then login by google or create user use by email and password
       </li>
     </ul>
    </div> 
   }

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center align-middle">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
 
 
const onSubmit = data => { 
  const newData = ourData.filter(items=> items.Customization ==data.customization)
  setFilterData(newData);
   
};

  return (
    <div className="my-14 max-w-6xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:flex-row gap-3 mb-5">
    
      <label>Filter by Customization:</label>
      <select {...register("customization")}  defaultValue="yes">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
 

      <button className="border text-secondary" type="submit">Search</button>
   
      </form>
      {filterData?.map((data) => (
        <SingleCard3
          afterDelete={setOurData}
          key={data._id}
          myData={ourData}
          data={data}
        />
      ))}
    </div>
  );
};

export default MyArtCraft;
