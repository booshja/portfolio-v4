import { TooltipStyled, TooltipTextStyled } from "./HoverTooltipStyled";
import testingIds from "@/testing/testingIds";

interface TooltipProps {
    text: string;
    children: React.ReactNode;
}

const testIds = testingIds.components.tooltip;

export const HoverTooltip = ({ text, children }: TooltipProps) => {
    return (
        <TooltipStyled>
            {children}
            <TooltipTextStyled>{text}</TooltipTextStyled>
        </TooltipStyled>
    );
};
