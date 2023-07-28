/// <reference types="react" />
export interface NavigationProps {
    children: React.ReactNode;
}
export interface NavigationArrowProps {
    handle(side: "prev" | "next"): void;
}
