import React from 'react';
import { Button } from '../ui/button';

export function NavLink({
    href,
    children
}: React.PropsWithChildren & { href: string }) {
    return (
        <Button variant="ghost" className="text-lg">
            <a href={href}>{children}</a>
        </Button>
    );
}

export function Nav() {
    return (
        <div className="flex justify-between gap-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
        </div>
    );
}
