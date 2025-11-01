export interface CustomSVGProps extends SVGProps<SVGSVGElement> {
    size: number | string | { base?: string; md?: string; lg?: string };
    color: string;
    fill?: string;
    width: string | number;
    height: string | number;
};

type GetResponsiveSizeProps = {
    width: string | number;
    height: string | number;
    props: Partial<CustomSVGProps>;
}