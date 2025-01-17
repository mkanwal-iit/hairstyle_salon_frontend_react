export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Hair Haven Studio</h2>
          <p className="text-sm">Your beauty, our passion.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="text-sm text-gray-400">
          <p>&copy; 2025 Hair Haven Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
