import Image from 'next/image'
import { AiOutlineDown } from 'react-icons/ai'
import { urlFor } from '../sanity'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { removeBasket } from '../redux/basketslice'
import { toast } from 'react-hot-toast'

interface Props {
  items: Product[]
  id: string
}
const CheckoutProduct = ({ id, items }: Props) => {
  const dispatch = useDispatch()
  const removeFrombasket = () => {
    dispatch(removeBasket({ id }))
    toast.error(`${items[0].title}removed from basket`, {
      position: 'bottom-center',
    })
  }
  return (
    <div className="flex flex-col gap-x-4 mx-auto max-w-4xl border-b border-gray-300 pb-5 lg:flex-row lg:items-center">
      <div className="relative h-44 w-44">
        <Image
          src={urlFor(items[0].image[0]).url()}
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4>{items[0].title}</h4>
            <p className="flex items-center gap-x-1 font-semibold">
              {items.length} <AiOutlineDown className="h-4 w-4 text-blue-500" />
            </p>
          </div>
          <p className="flex items-center text-blue-500 hover:underline">
            show product detail <AiOutlineDown className="h-4 w-4" />
          </p>
        </div>
        <div>
          <h4 className="text-xl font-semibold lg:text-2xl">
            <Currency
              quantity={items.reduce((total, item) => total + item.price, 0)}
              currency="NPR"
            />
          </h4>
          <div>
            <button
              className="text-blue-500 hover:underline"
              onClick={removeFrombasket}
            >
              remove
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutProduct
