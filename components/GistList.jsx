export default function GistList({ gists }) {
  return (
    <section className="p-4">
      <h2 className="text-lg font-semibold mb-2">Recent Gists</h2>
      <ul className="space-y-3">
        {gists.slice(0, 4).map((gist) => (
          <li key={gist.id} className="border-b border-gray-200 pb-2">
            <h3 className="text-blue-600 font-semibold">{gist.name}</h3>
            <p className="text-gray-500 text-sm">{gist.description}</p>
          </li>
        ))}
      </ul>
      <a href="/your-gists" className="text-blue-500 hover:underline mt-4 inline-block">
        View your gists
      </a>
    </section>
  );
}