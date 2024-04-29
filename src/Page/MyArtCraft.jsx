import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import SingleCard3 from "../component/SingleCard3";
const MyArtCraft = () => {
  const { user, loading } = useContext(AuthContext);

  const [ourData, setOurData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/craft-email/${user.email}`)
      .then((res) => res.json())
      .then((d) => setOurData(d));
  }, [user.email]);
 

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center align-middle">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="my-14 max-w-6xl mx-auto">
// {ourData.map((data) => (
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

// {ourData.map((data) => (
//   <SingleCard3
//   afterDelete={setOurData}
//     key={data._id} 
//     myData={ourData}
//     data={data}
//   />
// ))}