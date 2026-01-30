import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card.jsx'


function App() {

  const [data, setData] = useState([]);
  const [idx , setIdx] = useState(1);

  var printData  = <h3 className='text-gray-400 text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>Loading...</h3>;

  if(data.length > 0){
    printData = data.map((elem, idx) => {
      return <Card key={idx} elem = {elem} idx = {idx} />
    })
  }
 
  const fetchData = async () => {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${idx}&limit=15`)
      setData(response.data)
  }

  useEffect(function(){
    fetchData();
  }, [idx]);


  return (
    <>
      <div className='h-screen bg-black overflow-auto p-10 text-white'>
        <h1 className='m-4 font-bold text-4xl'>Gallery App</h1>

        <div className='flex flex-wrap gap-4'>
          {printData}
        </div>

        <div className='flex justify-center mt-10 fixed bottom-4 left-1/2 transform -translate-x-1/2'>
          <button
          style={{opacity: idx == 1 ? 0.5 : 1}}
          className='bg-amber-500 mt-4 rounded-lg px-4 py-2'
          onClick={()=>{
            if(idx > 1){
              setData([]);
              setIdx(idx - 1);
            }
          }}>
            Prev
          </button>
          <h2 className='mt-6 ml-4'>Page {idx}</h2>
          <button
          className='bg-amber-500 mt-4 ml-4 rounded-lg px-4 py-2'
          onClick={()=>{
            setData([]);
            setIdx(idx + 1);
          }}>
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default App
