export default function Footer() {
  return (
    <footer className="relative px-8 py-8 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center text-gray-400">
        © {new Date().getFullYear()} Rizky Nugraha. All rights reserved.
      </div>
    </footer>
  );
}
