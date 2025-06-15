export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-[#030f1a]/70 border-gray-300 dark:border-gray-700 text-center py-10 text-sm text-gray-600 dark:text-gray-400">
      <div className="mb-4">
        © {new Date().getFullYear()} Nishant Patil. All rights reserved.
      </div>
      <div className="flex justify-center space-x-6 text-base">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}
