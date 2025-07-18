import Link from "next/link";

export default function Footer() {
  return (
    <footer className="xxl:text-base text-sm  text-foreground mt-16 border-t backdrop-blur-[1px]  dark:bg-gray-900/70 dark:border-gray-700 text-center pt-10 pb-4 ">
      <div className="mb-4 flex justify-center space-x-8 ">
        <Link
          href="https://github.com/nishnt2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/nishant-patil-160000185/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          LinkedIn
        </Link>
        <Link
          href="https://twitter.com/ImNishant3"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          X(Twitter)
        </Link>
        <Link
          href="https://discordapp.com/users/nshxt"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          Discord
        </Link>
      </div>

      <p className=" font-code">
        © {new Date().getFullYear()} Nishant. Made with Nextjs.
      </p>

      <p className=" mt-6 text-[12px] font-code">Glad you visited :&#41;</p>
    </footer>
  );
}
