import { Avatar, AvatarImage, AvatarFallback } from '~/components/ui/avatar';
import { LogOut } from 'lucide-react';
import { Button } from '~/components/ui/button';

export default function SidebarProfile() {
    return (
        <div id="sidebar-profile" className="flex items-center gap-2">
            <Avatar>
                <AvatarImage
                    src="https://github.com/hri7566.png"
                    width={32}
                    height={32}
                />
                <AvatarFallback>H</AvatarFallback>
            </Avatar>
            <Button variant="outline">
                <LogOut className="h-4 w-4 m-2" />
                <span>Logout</span>
            </Button>
        </div>
    );
}
