import { Nav } from './Nav';

export default function Header() {
    return (
        <>
            <header className="px-4 py-2 w-full">
                <div className="flex w-[76%] mx-auto my-1 justify-between text-center items-center">
                    <a
                        href="/"
                        id="main-logo"
                        className="flex items-center justify-center mb-4"
                    >
                        <img src="/logo.svg" alt="XNL Logo" className="w-32" />
                    </a>

                    <Nav />
                </div>
            </header>
        </>
    );
}
