export default function Footer() {
  return (
    <footer className=" mt-16 border-t bg-[#030f1a]/70 border-gray-300 dark:border-gray-700 text-center pt-10 pb-4 text-sm">
      <div className="mb-4 flex justify-center space-x-8 text-base">
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
          href="https://twitter.com/ImNishant3"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black dark:hover:text-white transition"
        >
          Twitter
        </a>
      </div>

      <div className=" font-code">
        © {new Date().getFullYear()} Nishant. Made with Nextjs.
      </div>

      <div className=" mt-6 font-code">Glad you visited :&#41;</div>
    </footer>
  );
}
