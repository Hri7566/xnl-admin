import { ModeToggle } from '../mode-toggle';

export default function Title(props: { title: string }) {
    return (
        <div
            id="main-header"
            className="flex items-center justify-between px-4 py-2 mb-4 border-b"
        >
            <div id="main-title">
                <h1 className="text-2xl font-bold">{props.title}</h1>
            </div>

            <ModeToggle />
        </div>
    );
}
