import type { MetaFunction } from '@remix-run/node';
import { PanelResizeHandle } from 'react-resizable-panels';
import EmploymentCard from '~/components/cards/employment';
import SampleCard from '~/components/cards/sample';
import Sidebar from '~/components/admin/sidebar';
import Title from '~/components/title';
import { ResizablePanelGroup } from '~/components/ui/resizable';

export const meta: MetaFunction = () => {
    return [{ title: 'Home' }, { name: 'description', content: 'Home' }];
};

export default function Admin() {
    return (
        <div className="flex">
            <Sidebar />
            <div id="main-content" className="flex-1 overflow-y-scroll">
                <Title title="Home" />
                <div className="flex items-stretch h-[calc(100vh-5rem)]">
                    <ResizablePanelGroup
                        direction="vertical"
                        autoSaveId="main-panel-group-"
                        className="px-4 py-2 overflow-y-scroll"
                    >
                        <EmploymentCard />
                        <PanelResizeHandle />
                        <SampleCard />
                    </ResizablePanelGroup>
                </div>
            </div>
        </div>
    );
}
