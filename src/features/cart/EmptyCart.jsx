import React from 'react'
import LinkButton from '../../ui/LinkButton'

function EmptyCart() {
   return (
      <div className="py-3 px-4">
         <LinkButton to="/menu">
            &larr; Back to menu
         </LinkButton>
         <h2 className="mt-7 text-xl font-semibold text-center">Your cart is empty </h2>
      </div>
   )
}

export default EmptyCart