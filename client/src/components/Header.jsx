import { Link } from 'react-router-dom';

'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Notifications from './Notifications';

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt=""
                            src="data:image/jpeg;base64,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"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                            Thông tin
                            <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                    >
                                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div className="flex-auto">
                                            <a href={item.href} className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                                    >
                                        <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Kết nối
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Hỗ trợ
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                        Tải ứng dụng
                    </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-6">
                    {/*-----------------------------
                    Login 
                     -------------------------------*/}
                    <Link to="/login" className="text-sm/6 font-semibold text-gray-900">
                        Đăng Nhập <span aria-hidden="true">&rarr;</span>
                    </Link>
                    {/*-----------------------------
                    Register
                     -------------------------------*/}
                    <Link to="/signup" className="text-sm/6 font-semibold text-gray-900">
                        Đăng Kí <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

