import { FaInstagram } from "react-icons/fa6";
import { FaFacebook, FaTiktok } from "react-icons/fa";
export default function Redes(){
  return(
    <div className="w-full flex gap-6 justify-center items-center flex-wrap">
  <a
    href="https://www.instagram.com/alfred123fer?igsh=MXM5cWRkdXdhY2Qzdg=="
    target="_blank"
    rel="noopener noreferrer nofollow"
    aria-label="Síguenos en Instagram"
    className="group relative p-4 rounded-full bg-gradient-to-br from-pink-200 to-white hover:from-pink-100 hover:to-pink-50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
  >
    <FaInstagram className="w-7 h-7 text-pink-600 group-hover:text-pink-700 transition-colors duration-300" />
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      Instagram
    </span>
  </a>
  
  <a
    href="https://www.facebook.com/share/1WFkCKsuV3/"
    target="_blank"
    rel="noopener noreferrer nofollow"
    aria-label="Visítanos en Facebook"
    className="group relative p-4 rounded-full bg-gradient-to-br from-blue-200 to-white hover:from-blue-100 hover:to-blue-50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
  >
    <FaFacebook className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      Facebook
    </span>
  </a>
  
  <a
    href="https://www.tiktok.com/@alf.fer4?_r=1&_t=ZM-92fBzEGbBCV"
    target="_blank"
    rel="noopener noreferrer nofollow"
    aria-label="Síguenos en TikTok"
    className="group relative p-4 rounded-full bg-gradient-to-br from-gray-200 to-white hover:from-gray-100 hover:to-gray-50 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
  >
    <FaTiktok className="w-7 h-7 text-gray-900 group-hover:text-black transition-colors duration-300" />
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
      TikTok
    </span>
  </a>
</div>
  )
}
