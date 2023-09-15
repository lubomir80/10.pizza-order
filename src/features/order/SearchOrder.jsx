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
            onChange={(e) => setSearch(e.target.value)} />
      </form>
   )
}

export default SearchOrder