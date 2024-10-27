import Image from "next/image";
import Link from "next/link";
import { MdCode, MdForkLeft, MdStar, MdArrowDropDown, MdCheck } from "react-icons/md";
import { FaCodeCommit } from "react-icons/fa6";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';


export default function Home() {
  return (
    <div>
      <header className="bg-emDark-bgTop p-4 gap-4 text-white">
        <div className="flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <span className="font-workBold text-3xl hover:opacity-80">Gist</span><span className="font-workRegular text-3xl hover:opacity-80">NextClone</span>
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded border border-gray-600 bg-[#0D1117] text-white placeholder-gray-400 focus:outline-none focus:bg-[#3F4249]"
            />
            <Link href="/sign-in" className="text-lg font-bold hover:opacity-80">All gists</Link>
            <Link href="/sign-in" className="text-lg font-bold hover:opacity-80">Back to GitHub</Link>
          </div>
          <nav className="flex gap-4 items-center">
            <Link href="/sign-in" className="hover:opacity-80 font-bold text-lg">
              Sign In
            </Link>
            <Link href="/sign-up" className="hover:opacity-80 font-bold text-lg rounded border border-gray-600 bg-[#0D1117] px-3 py-1">
              Sign Up
            </Link>
          </nav>
        </div>
      </header>
      <main className="">
        <h1 className="text-3xl text-white text-center mt-10">Instantly share code, notes, and snippets.</h1>
        <div className="p-4 mb-4 flex justify-between">
          <div className="text-white flex items-center text-2xl font-bold space-x-2">
            <MdCode className="text-white border-white border" size={32} />
            <span>Discover gists</span>
          </div>
          <div className="absolute right-0 mr-4">
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-md border border-gray-600 bg-emDark-bgTop py-1.5 px-3 text-sm font-semibold text-white focus:outline-none hover:bg-gray-700 focus:bg-gray-700">
                <span className="text-gray-400">Sort:</span>
                Recently created
                <MdArrowDropDown className="size-4 fill-white" />
              </MenuButton>

              <MenuItems
                className="origin-top-right rounded-xl border border-gray-600 bg-emDark-bgTop p-1 mt-1 text-sm text-white shadow-lg focus:outline-none"
              >
                <MenuItem>
                  <button className="group flex w-full items-center justify-between gap-2 rounded-lg py-1.5 px-3 hover:bg-gray-600">
                    <MdCheck className="size-4 fill-white" />
                    <span className="ml-auto">Recently created</span>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full justify-end gap-2 rounded-lg py-1.5 px-3 hover:bg-gray-600">
                    <span>Last recently created</span>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full justify-end gap-2 rounded-lg py-1.5 px-3 hover:bg-gray-600">
                    <span>Recently updated</span>
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
        <ul className="flex gap-4 w-fit px-4">
          <li className="border-b-[#fa7a18] border-b-2">
            <Link href="/" className="inline-flex items-center text-white pb-2 font-bold hover:bg-emDark-bgTop p-2 rounded-md space-x-2">
              <MdCode className="text-gray-600 border border-gray-600" size={20} /> <span>All gists</span>
            </Link>
          </li>
          <li>
            <Link href="/forked" className="inline-flex items-center text-white pb-2 font-bold hover:bg-emDark-bgTop p-2 rounded-md">
              <MdForkLeft className="text-gray-600" size={20} /> Forked
            </Link>
          </li>
          <li>
            <Link href="/starred" className="inline-flex items-center text-white pb-2 font-bold hover:bg-emDark-bgTop p-2 rounded-md">
              <MdStar className="text-gray-600" size={20} /> Starred
            </Link>
          </li>
        </ul>
        <hr className="border border-b border-emDark" />
      </main>
    </div>
  );
}
