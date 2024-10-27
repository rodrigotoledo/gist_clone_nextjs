// components/Footer.js
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center space-y-2 text-gray-800 text-sm opacity-45">
        <div className="flex flex-wrap justify-center gap-4 text-gray-400">
          <div className="flex items-center space-x-2">
            <FaGithub className="text-gray-500" size={20} />
            <span>© 2024 Gist NextJS Clone</span>
          </div>
          <Link href="/terms" className="hover:text-gray-600">Terms</Link>
          <Link href="/privacy" className="hover:text-gray-600">Privacy</Link>
          <Link href="/security" className="hover:text-gray-600">Security</Link>
          <Link href="/status" className="hover:text-gray-600">Status</Link>
          <Link href="/docs" className="hover:text-gray-600">Docs</Link>
          <Link href="/contact" className="hover:text-gray-600">Contact</Link>
          <Link href="/manage-cookies" className="hover:text-gray-600">Manage cookies</Link>
          <Link href="/do-not-share-info" className="hover:text-gray-600">Do not share my personal information</Link>
        </div>
      </div>
    </footer>
  );
}
