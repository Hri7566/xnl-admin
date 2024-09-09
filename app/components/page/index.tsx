import React from 'react';

export function PageContainer({ children }: React.PropsWithChildren) {
    return <div className="page-container w-[75vw] mx-auto">{children}</div>;
}

export function PageBox() {}
