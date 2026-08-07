export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 mt-16">
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-between text-sm text-gray-400">
        <span>© {new Date().getFullYear()} Abhinav Gudipati</span>
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/in/abhinavgudipati" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">LinkedIn</a>
          <a href="https://abhinavgudipati.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">Substack</a>
          <a href="https://youtube.com/@AbhinavGudipati" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">YouTube</a>
          <a href="mailto:gabhinavsiddharth@gmail.com" className="hover:text-gray-700 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
