import React, {useState} from 'react';

const options = [
    { value: '1908', label: 'Afternoon Tea' },
    { value: '1909', label: 'Dining' },
    { value: '1910', label: 'Golf' },
    { value: '1911', label: 'Treatment Suites' },
    { value: '1912', label: 'Overnight Stays' },
    { value: '1913', label: 'Estate Activities' },
    { value: '1977', label: 'Cash Gift Vouchers' },
    { value: '1979', label: 'Featured Vouchers' },
    { value: '2177', label: 'Valentines' },
  ];

function List(props) {
  const { info } = props;
  
  const [appQuery, setAppQuery] = useState({
    Pname: "",
    category: "",
    arr: info
  });
  

  function SearchByName() {  
    const search=  (info).filter(item => (item.name).toUpperCase() === (appQuery.Pname).toUpperCase());
    setAppQuery((prevState) => ({
        ...prevState,
        arr: search,
      }));
   }
 
   function SearchByCategory() {
     console.log(appQuery.category);
     const search =  (info).filter(item => item.categories.find(element => element === appQuery.category));
     setAppQuery((prevState) => ({
        ...prevState,
        arr: search,
      }));
    }
 
   function PnameChange(e) {
     setAppQuery(prevState =>{
       return{
            ...prevState,
            Pname : e.target.value
       }
    })
   }
 
   function categoryChange(e) {
     setAppQuery(prevState =>{
       return{
            ...prevState,
            category : parseInt(e.target.value)
       }
    })
   }
 
   function goBack() {
     window.location.reload(false);
   }

   if (!info || info.length === 0) return <p>No repos, sorry</p>;
    return (
        <div>
         <div className='grid grid-cols-1 p-10 sm:p-10 w-full sm:w-2/3 m-auto gap-0'>

            <div className='col-auto grid grid-cols-1 sm:grid-cols-2 m-auto p-1 '>
             <div class="w-full m-auto">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-56 text-xl px-5 py-1  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Enter product name*' value={appQuery.Pname} onChange={PnameChange} />
              </div>
               <button onClick={SearchByName} type="button" class="text-white bg-rose-500 hover:bg-pink-700 w-56 sm:w-full font-extrabold hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg text-sm px-0 py-2.5 text-center m-auto mr-0 mt-2 mb-2">Submit</button>
           </div>

         <div className='col-auto grid grid-cols-1 sm:grid-cols-2 m-auto p-1 '>
          <div class="w-full m-auto">
            <select class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-56 text-xl px-5 py-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" defaultValue="Select Option" options={options} value={appQuery.category} onChange={categoryChange} >
             <option>select option</option>
              {Object.keys(options).map((item, i) =>{
                 return (
                  <option key={i} value={options[item].value}>
                      {options[item].label}
                  </option>
                   )
                  })}
            </select>
          </div>
         <button onClick={SearchByCategory} type="button" class=" text-white bg-rose-500 hover:bg-pink-700 font-extrabold  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 rounded-lg text-sm px-5 py-2.5 text-center mr-0 mt-2 mb-2">Submit</button>
        </div>
  
        </div>
        <button onClick={goBack} type="button" class="text-white bg-rose-500 hover:bg-pink-700 font-extrabold dark:focus:ring-lime-800 rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Refresh</button>
        <h1 className='p-4 text-xl'>{(appQuery.arr).length} Items Shown</h1>


          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 sm:p-24'>
         { (appQuery.arr).map((item) => {
             return (
              <div className='border-solid border-black border-2 rounded-2xl' style={{backgroundColor: "#E94560"}} key={item.id}>
                 <h1 className='text-xl font-bold p-10'>{item.name}</h1>
                 <img className='w-10/12 rounded-3xl m-auto ' alt="#" src={item.voucherImageUrl}/>
                 <h2 className='text-2xl font-bold p-5 sm:p-10'><span className='text-6xl'>{item.price}</span> {item.currency}</h2>
                 <p className='text-l p-5 sm:p-10 pt-2 text-left'>{item.description}</p>
                 
               </div>   
             );
         })

         }
         </div>
        </div>
    )
}

export default List;