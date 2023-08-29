/* eslint-disable @typescript-eslint/no-explicit-any */
import { twMerge } from 'tailwind-merge';

export const TypographyH2 = (props: any) => {
    return (
        <h2 className={twMerge('scroll-m-20 pb-4 text-4xl font-medium tracking-tight transition-colors first:mt-0 mb-2', props.className)}>{props.children}</h2>
    );
};

export function TypographyLead(props: any) {
    return (
        <p className={twMerge('text-xl text-muted-foreground', props.className)}>
            {props.children}
        </p>
    );
}

export function TypographyMuted(props: any) {
    return (
        <p className={twMerge('text-sm text-muted-foreground mb-2 capitalize', props.className)}>{props.children}</p>
    );
}

export default TypographyH2;