export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white py-12 px-4 w-full">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Inspire ERS</h3>
            <p className="text-blue-200">
              Leading the way in emergency response technology and innovation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">Emergency Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Response Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consulting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-blue-200">
              <li>info@inspireers.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Emergency Way</li>
              <li>Response City, RC 12345</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-700 pt-8 text-center text-blue-200">
          <p>&copy; 2024 Inspire ERS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
