/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { twMerge } from 'tailwind-merge';

export const TypographyH2 = (props: any) => {
    return (
        <h2 className='scroll-m-20 pb-4 text-4xl font-semibold tracking-tight transition-colors first:mt-0 mb-2'>{props.children}</h2>
    );
};

export function TypographyLead(props: any) {
    return (
        <p className="text-xl text-muted-foreground">
            {props.children}
        </p>
    );
}

export function TypographyMuted(props: any) {
    return (
        <p className={twMerge('text-sm text-muted-foreground', props.className)}>{props.children}</p>
    );
}

export default TypographyH2;