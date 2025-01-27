// src/app/page.js
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-circle-gradient">
      <main className="flex flex-1 justify-center items-center text-center text-black">
        <div>
          <h1 className="text-6xl font-bold mb-4">Hey! I’m Keona</h1>
          <p className="text-xl">and this site is currently under construction. Check back soon!</p>
        </div>
      </main>

      <footer className="bg-white p-4 text-center text-gray-800 shadow-md border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Keona's Portfolio</p>
      </footer>
    </div>
  );
}
