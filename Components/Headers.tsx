import { profile } from 'console'
import Image from 'next/image'
import Link from 'next/link'
import { BiSearchAlt2 } from 'react-icons/bi'
import { FiShoppingCart } from 'react-icons/fi'
import { FaUser } from 'react-icons/fa'

const Headers = () => {
  const porfile = false
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#eeee] p-3">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 cursor-pointer">
            <Image
              alt="logo"
              src="https://rb.gy/vsvv2o"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Product</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Business</a>
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <BiSearchAlt2 className="headerIcon" />
        <Link href="/checkout">
          <div className="relative">
            <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-violet-500 text-sm text-white">
              1
            </span>
            <FiShoppingCart className="headerIcon" />
          </div>
        </Link>
        {porfile ? (
          <Image
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png"
            alt=""
            width={35}
            height={35}
            className="cursor-pointer"
          />
        ) : (
          <FaUser className="headerIcon" />
        )}
      </div>
    </header>
  )
}

export default Headers
