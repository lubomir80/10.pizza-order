import { Link } from 'react-router-dom';



function Button({ children, disabled, onClick, to, type }) {
   const base = `cursor-pointer
               bg-yellow-400 text-sm uppercase font-semibold
               text-stone-800 inline-block tracking-wide rounded-full
               hover:bg-yellow-300 transition-colors duration-300 focus:outline-none
               focus:ring focus:ring-yellow-300 focus:ring-offset-2`


   const styles = {
      primary: base + ` py-3 px-4 sm:px-6 sm:py-4`,
      small: base + ` py-2 px-4 sm:px-5 sm:py-2 text-xs`,
      secondary: `text-sm cursor-pointer py-2.5 px-4 sm:px-6 sm:py-3.5
      uppercase border-2 border-stone-300 font-semibold
      text-stone-400 inline-block tracking-wide rounded-full
      hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:outline-none
      focus:bg-stone-300
      focus:ring focus:ring-stone-200 focus:ring-offset-2`
   }


   if (to) return (
      <Link to={to}
         className={styles[type]}>
         {children}
      </Link>
   )



   return (
      <div
         className={styles[type]}
         onClick={onClick}
         disabled={disabled}
      >
         {children}
      </div>
   )
}





export default Button

