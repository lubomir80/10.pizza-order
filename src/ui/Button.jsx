import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



function Button({ children, disabled, onClick, to, type }) {
   const className = `cursor-pointer
bg-yellow-400 uppercase font-semibold
sm:px-6 sm:py-4
text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full
hover:bg-yellow-300 transition-colors duration-300 focus:outline-none
  focus:ring focus:reing-yellow-300 focus:ring-yellow-300 focus:ring-offset-2`

   const base = `cursor-pointer
               bg-yellow-400 uppercase font-semibold
               text-stone-800 inline-block tracking-wide rounded-full
               hover:bg-yellow-300 transition-colors duration-300 focus:outline-none
               focus:ring focus:reing-yellow-300 focus:ring-yellow-300 focus:ring-offset-2`


   const styles = {
      primary: base + ` py-3 px-4 sm:px-6 sm:py-4`,
      small: base + ` py-2 px-4 sm:px-5 sm:py-2 text-xs`
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

