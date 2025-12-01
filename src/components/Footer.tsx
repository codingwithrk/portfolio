export default function Footer() {
  return (
    <footer className="py-8 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF2D20] to-transparent opacity-30"></div>
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl">
            🎄 CodingwithRK - Spreading Code & Joy 🎄
          </h3>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} CodingwithRK. Merry Christmas! This
          website is{" "}
          <a
            href="https://github.com/codingwithrk/portfolio"
            className="underline hover:text-yellow-300"
          >
            open source
          </a>
          . Have a festive season! 🎅✨
        </div>
      </div>
    </footer>
  );
}
