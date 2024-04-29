import { Link, useLoaderData } from "react-router-dom";

const AllArt = () => {
  const datas = useLoaderData();
  return (
    <div className="max-w-6xl  mx-auto">
      <h1 className="text-center font-bold text-3xl my-8">All Art</h1>

      <div className="overflow-x-auto">
        <table className="table"> 
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((item) => {
              const {
                image,
                name, 
                _id,
                sub_category,  
                processing_time,
              } = item;

              return (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {name}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {processing_time}
                    </span>
                  </td>
                  <td>{sub_category}</td>
                  <th>
                    <Link to={`/coffee-details/${_id}`}>
                      <button className="btn btn-secondary">details</button>
                    </Link>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArt;

{
  /* <div className="md:grid grid-cols-2 gap-8 max-w-6xl mx-auto mb-14 items-start">
{datas?.map(data=><SingleCard2 key={data._id} data={data}/>)  }
 </div> */
}
