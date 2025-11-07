export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 text-center mt-10">
      <p>© {new Date().getFullYear()} EduFlex. All rights reserved.</p>
      <p className="text-sm mt-2">Built with MERN Stack ❤️</p>
    </footer>
  );
}
