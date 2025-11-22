export default function Footer() {
  return (
    <footer className="py-8 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF2D20] to-transparent opacity-30"></div>
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl">CodingwithRK</h3>
        </div>
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} CodingwithRK. This website is{" "}
          <a href="https://github.com/codingwithrk/portfolio">open source</a>.
        </div>
      </div>
    </footer>
  );
}
