import Link from '../../Link';
import SidebarProfile from './SidebarProfile';

export default function Sidebar() {
    return (
        <div
            id="sidebar-main"
            className="w-64 min-h-screen border-r p-2 flex flex-col justify-between"
        >
            <div id="sidebar-content" className="flex flex-col gap-4 px-4">
                <a
                    href="/"
                    id="main-logo"
                    className="flex items-center justify-center mb-4"
                >
                    <img src="/logo.svg" alt="XNL Logo" className="w-24" />
                </a>

                <div id="sidebar-nav-title" className="text-xl font-bold">
                    Navigation
                </div>
                <nav id="sidebar-nav" className="flex flex-col gap-2 px-2">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div
                id="sidebar-footer"
                className="flex items-center justify-center pb-4"
            >
                <SidebarProfile />
            </div>
        </div>
    );
}
