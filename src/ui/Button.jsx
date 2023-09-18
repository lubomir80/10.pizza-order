import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



function Button({ children, disabled, onClick, to }) {
   const className = `cursor-pointer
bg-yellow-400 uppercase font-semibold
sm:px-6 sm:py-4
text-stone-800 py-3 px-4 inline-block tracking-wide rounded-full
hover:bg-yellow-300 transition-colors duration-300 focus:outline-none
  focus:ring focus:reing-yellow-300 focus:ring-yellow-300 focus:ring-offset-2`


   if (to) return (
      <Link to={to}
         className={className}>
         {children}
      </Link>
   )


   return (
      <div
         className={className}
         onClick={onClick}
         disabled={disabled}
      >
         {children}
      </div>
   )
}





export default Button

