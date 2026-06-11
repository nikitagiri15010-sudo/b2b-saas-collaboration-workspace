import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <aside className="w-64 border-r border-gray-200 p-4">
            <nav>
                <ul className="space-y-3">
                    
                    <li>
                        <Link to="/" className="block rounded px-3 py-2 hover:bg-gray-100">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/dashboard" className="block rounded px-3 py-2 hover:bg-gray-100">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/workspace" className="block rounded px-3 py-2 hover:bg-gray-100">                       Workspace
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;