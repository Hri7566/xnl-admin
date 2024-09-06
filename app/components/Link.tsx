import { LinkProps } from '@remix-run/react';

export default function Link(props: LinkProps & { to: string }) {
    return (
        <a
            className="hover:underline duration-300 hover:text-primary hover:shadow-md"
            href={props.to}
            {...props}
        >
            {props.children}
        </a>
    );
}
