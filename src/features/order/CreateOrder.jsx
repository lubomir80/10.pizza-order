import { Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { userSelector } from "../../Redux/User/selectors";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, getTotalPriceSelector } from "../../Redux/Cart/selectors"
import EmptyCart from "../cart/EmptyCart"
import { clearCart } from "../../Redux/Cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";
import { fetchAddress } from "../../Redux/User/thunks";
import store from "../../Redux/store";

store


const isValidPhone = (str) =>
   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      str
   );


function CreateOrder() {
   const [withPriority, setWithPriority] = useState(false)
   const navigation = useNavigation()
   const isSubmitting = navigation.state === "submitting"
   const formErrors = useActionData()
   const { username, status: addresStatus, position, address, error: errorAddress } = useSelector(userSelector)
   const isLoadingAddress = addresStatus === "loading"
   const cart = useSelector(cartSelector)
   const totalCartPrice = useSelector(getTotalPriceSelector)
   const priorityPrice = withPriority ? 1.2 : 1;
   const totalPrice = (totalCartPrice * priorityPrice).toFixed(2);
   const dispatch = useDispatch()

   const handelGetPsition = e => {
      e.preventDefault()
      dispatch(fetchAddress())
   }


   if (!cart.length) return <EmptyCart />

   return (
      <div className="px-4 py-6">
         <h2 className="text-xl font-semibold mb-8">
            {`Ready to order? Let's go!`}
         </h2>

         <Form method="POST">

            <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
               <label className="sm:basis-40">First Name</label>
               <input defaultValue={username} type="text" name="customer" required className="input grow" />
            </div>

            <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
               <label className="sm:basis-40">Phone number</label>
               <div className="grow">
                  <input type="tel" name="phone" required className="input w-full" />
                  {formErrors?.phone && <p
                     className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">
                     {formErrors.phone}
                  </p>}
               </div>
            </div>

            <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center relative">
               <label className="sm:basis-40">Address</label>
               <div className="grow ">
                  <input
                     className="input w-full"
                     type="text"
                     name="address"
                     disabled={isLoadingAddress}
                     defaultValue={address}
                     required />

                  {addresStatus === "error" && <p
                     className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">
                     {errorAddress}
                  </p>}
               </div>
               {!position.latitude && !position.longitude &&
                  (<span className="absolute right-[3px] top-[35px] sm:top-[3px] md: right-[7px] md:top-[7px]">
                     <Button disabled={isLoadingAddress} type="small" onClick={handelGetPsition}>Get position</Button>
                  </span>)
               }
            </div>

            <div className="mb-12 flex gap-5 items-center">
               <input
                  className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
                  type="checkbox"
                  name="priority"
                  id="priority"
                  value={withPriority}
                  onChange={(e) => setWithPriority(e.target.checked)}
               />
               <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
            </div>

            <div>
               <input type="hidden" name="cart" value={JSON.stringify(cart)} />
               <input type="hidden" name="position" value={position.latitude && position.longitude ? `${position.latitude}${position.longitude}` : ""} />
               <Button type="primary" disabled={isSubmitting || isLoadingAddress} >
                  {isSubmitting ? "Placing order..." : `Order now from ${formatCurrency(totalPrice)}`}
               </Button>
            </div>
         </Form>
      </div>
   )
}


export async function action({ request }) {
   const formData = await request.formData()
   const data = Object.fromEntries(formData)



   const order = {
      ...data,
      cart: JSON.parse(data.cart),
      priority: data.priority === "true"
   };


   const errors = {}
   if (!isValidPhone(order.phone))
      errors.phone = "Please give us your correct phone number. We might need it to contact you."
   if (Object.keys(errors).length > 0) return errors

   const newOrder = await createOrder(order)
   store.dispatch(clearCart())

   return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder