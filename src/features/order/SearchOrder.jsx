import { useState } from 'react'
import { useNavigate } from 'react-router'

function SearchOrder() {
   const [search, setSearch] = useState('')
   const navigate = useNavigate()

   const handleSubmit = (e) => {
      e.preventDefault()
      if (!search) return
      navigate(`/order/${search}`);
      setSearch("");
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            placeholder='Search order #'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='rounded-full px-4 py-2 text-sm bg-yellow-100
            placeholder:text-stone-400 sm:focus:w-72 sm:w-64 transition-all duration-300
            focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-opacity-50'
         />
      </form>
   )
}

export default SearchOrder