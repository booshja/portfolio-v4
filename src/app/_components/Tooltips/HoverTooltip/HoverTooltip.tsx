import { TooltipStyled, TooltipTextStyled } from "./HoverTooltipStyled";

interface TooltipProps {
    text: string;
    children: React.ReactNode;
}

export const HoverTooltip = ({ children, text }: TooltipProps) => {
    return (
        <TooltipStyled>
            {children}
            <TooltipTextStyled>{text}</TooltipTextStyled>
        </TooltipStyled>
    );
};
