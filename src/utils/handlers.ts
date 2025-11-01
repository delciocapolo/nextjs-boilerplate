import { GetResponsiveSizeProps } from "@src/shared/@types/svg";

export const getResponsiveSize = ({ props, ...args }: GetResponsiveSizeProps) => {
    if (typeof props.size === "object") {
        return {
            className: `
                ${props.size.base ? `w-[${props.size.base}] h-auto` : ""}
                ${props.size.md ? `md:w-[${props.size.md}]` : ""}
                ${props.size.lg ? `lg:w-[${props.size.lg}]` : ""}
            `,
        };
    }

    return {
        width: props.size || props.width  || args.width || "100%",
        height: props.size || props.height || args.height ||  "auto",
    };
};
