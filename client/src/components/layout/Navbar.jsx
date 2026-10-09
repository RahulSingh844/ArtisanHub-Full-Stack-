import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


function Navbar() {

  const { user, logout } = useAuth();


  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">


        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          ArtisanHub
        </Link>


        {/* Navigation */}

        <div className="flex items-center gap-6">


          {/* Home */}

          <Link
            to="/"
            className="hover:text-blue-600 transition"
          >
            Home
          </Link>


          {/* Categories */}

          <Link
            to="/categories"
            className="hover:text-blue-600 transition"
          >
            Categories
          </Link>


          {/* Logged Out */}

          {!user ? (

            <>

              {/* Login */}

              <Link
                to="/login"
                className="hover:text-blue-600 transition"
              >
                Login
              </Link>


              {/* Register */}

              <Link
                to="/register"
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
              >
                Register
              </Link>

            </>

          ) : (

            <>
              {/* Dashboard */}

              <Link
                to="/creator/dashboard"
                className="hover:text-blue-600 transition"
              >
                Dashboard
              </Link>
              {/* Become Creator */}

              <Link
                to="/creator/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Become Creator
              </Link>


              {/* User Name */}

              <span className="font-semibold text-gray-700">
                {user.name}
              </span>


              {/* Logout */}

              <button
                onClick={logout}
                className="border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-50 transition"
              >
                Logout
              </button>

            </>

          )}

        </div>

      </div>

    </nav>
  );
}


export default Navbar;