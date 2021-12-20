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
                            <div className='flex-1 flex items-center justify-centet sm:items-stretch sm:justify-start'>
                                <div className='flex-shrink-0 flex items-center'>
                                    <img 
                                        className='block lg:hidden h-8 w-auto'
                                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                        alt="Workflow"
                                    />
                                    <img
                                        className="hidden lg:block h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                        alt="Workflow"
                                    />
                                </div>
                                <div className='hidden sm:block sm:ml-6'>
                                    <div className='flex space-x-4'>
                                        {navigation.map((item) => (
                                            <a 
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            }
        </Disclosure>
    )
}