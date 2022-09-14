import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { selectBasketItems } from '../redux/basketslice'

const Basket = () => {
  const items = useSelector(selectBasketItems)
  if (items.length === 0) return null
  return (
    <Link href="/checkout">
      <div className="fixed bottom-10 right-10 z-50 cursor-pointer items-center justify-center rounded-full bg-gray-300 p-2">
        {items.length > 0 && (
          <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from bg-pink-500 to-violet-500 text-center text-white">
            {items.length}
          </span>
        )}
        <AiOutlineShoppingCart className="h-8 w-8 headerIcon" />
      </div>
    </Link>
  )
}

export default Basket
