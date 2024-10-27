export default function AuthHeader() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-lg font-bold">Gist Clone</h1>
      <nav>
        <a href="/your-gists" className="hover:underline">
          Your Gists
        </a>
      </nav>
    </header>
  );
}