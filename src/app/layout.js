
import './globals.css'; 

export const metadata = {
  title: "madebykeona",
  description: "Under Construction - Keona's portfolio is coming soon!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="Epilogue-Regular">
        <nav className="p-4 bg-white shadow-md border-b border-gray-800 flex justify-between items-end">
        <div className="flex items-center">
            <img src="/Group.svg" alt="Keona's Logo" className="h-8 w-auto" />
          </div>
          <ul className="flex justify-end space-x-8">
            <li><a href="/projects" className="text-gray-800 hover:text-purple-600">Projects</a></li>
            <li><a href="/about" className="text-gray-800 hover:text-purple-600">About</a></li>
            <li><a href="/contact" className="text-gray-800 hover:text-purple-600">Contact</a></li>
          </ul>
        </nav>
        
        {children}
      </body>
    </html>
  );
}
