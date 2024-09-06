import { ResizablePanel } from '../ui/resizable';

export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <ResizablePanel
            minSize={30}
            className="m-1 bg-primary-foreground rounded-lg shadow-md p-4 overflow-y-scroll"
        >
            <div className="overflow-y-scroll">{children}</div>
        </ResizablePanel>
    );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
            {children}
        </div>
    );
}
