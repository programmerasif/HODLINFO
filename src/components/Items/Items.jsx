import { useEffect, useState } from "react";


const Items = () => {
      const [data,setData] = useState([])
    
    useEffect(() =>{
      fetch('http://localhost:5000/GetAllData')
      .then(response => response.json())
      .then(data => setData(data))
    },[])
    console.log();
    return (
        <div className="w-full mt-10">
            <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="overflow-x-auto ">
          <tr>
            <th className="px-6 py-3 text-[#ffffff66]  text-center text-3xl leading-4 font-medium  tracking-wider">
              #
            </th>
            <th className="px-6 py-3 text-[#ffffff66] text-center text-3xl leading-4 font-medium  tracking-wider">
            Platform
            </th>
            <th className="px-6 py-3 text-[#ffffff66] text-center text-3xl leading-4 font-medium  tracking-wider">
            Last Traded Price
            </th>
            <th className="px-6 py-3 text-[#ffffff66] text-center text-3xl leading-4 font-medium  tracking-wider">
            Buy / Sell Price
            </th>
            <th className="px-6 py-3 text-[#ffffff66] text-center text-3xl leading-4 font-medium  tracking-wider">
            Difference
            </th>
            <th className="px-6 py-3 text-[#ffffff66] text-center text-3xl leading-4 font-medium  tracking-wider ">
            Base_unit
            </th>
            
          </tr>
        </thead>
        <tbody>
          {
            data.map((itm,i )=> <>
            <tr className=" ">
            <td className="px-6 py-4 whitespace-no-wrap text-center mb-5">
              {i +1 }
            </td> 
            <td className="px-6 py-4 mb-5 text-2xl font-bold whitespace-no-wrap text-center">
              {
                itm.name
              }
            </td>
            <td className="px-6 py-4 mb-5 text-2xl font-bold  whitespace-no-wrap text-center">
            ₹{
                itm.last
              }
            </td>
            <td className="px-6 py-4 mb-5 text-2xl font-bold  whitespace-no-wrap text-center">
              {
                `₹${itm.buy} / ₹${itm.sell} `
              }
            </td>
            <td className="px-6 py-4 mb-5 text-2xl font-bold  whitespace-no-wrap text-center">
              {
                itm.volume
              }
            </td>
            <td className="px-6 py-4 mb-5 text-2xl font-bold  whitespace-no-wrap text-center">
              {
                itm.base_unit
              }
            </td>
            
          </tr>
            </>)
          }
          
          
          
        </tbody>
      </table>
    </div>
        </div>
    );
};

export default Items;