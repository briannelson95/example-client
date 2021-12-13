import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const navigation = [
    {name: "Home", href: "/", current: true},
    {name: "About", href: "/about", current: false},
    {name: "Team", href: "/team", current: false},
    {name: "Blog", href: "/blog", current: false},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return(
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => 
                <>
                    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile Menu */}
                                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='sr-only'>Open Menu</span>
                                    {open ? (
                                        <HiOutlineX className='block h-6 w-6' aria-hidden="true" />
                                    ) : (
                                        <HiOutlineMenu className='block h-6 w-6' aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </Disclosure>
    )
}