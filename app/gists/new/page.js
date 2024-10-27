import AuthHeader from "@/components/AuthHeader";
import GistForm from "@/components/GistForm";
import GistList from "@/components/GistList";

export default function New() {
  const recentGists = [
    { id: 1, name: 'Gist 1', description: 'This is the first gist' },
    { id: 2, name: 'Gist 2', description: 'This is the second gist' },
    { id: 3, name: 'Gist 3', description: 'This is the third gist' },
    { id: 4, name: 'Gist 4', description: 'This is the fourth gist' },
  ];
  return (
    <div className="min-h-screen">
      <AuthHeader />
      <main className="max-w-2xl mx-auto py-6 space-y-8">
        <GistList gists={recentGists} />
        <h2 className="text-2xl font-bold text-gray-800">Create a New Gist</h2>
        <GistForm />
      </main>
    </div>
  )
}