import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className='bg-gray-300 w-full lg:w-auto p-9'>
        <ul className="ml-[60%] flex gap-[90px]">
          <li className=" p-2 hover:overline">
            <Link to="/l">Layout</Link>
          </li>
          <li className="border border-red-500 p-2 hover:border-dashed">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="p-2 hover:bg-white">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      
    </div>
  )
};

export default Layout;