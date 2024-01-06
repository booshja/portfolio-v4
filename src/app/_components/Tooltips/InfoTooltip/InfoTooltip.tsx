"use client";

import { InfoTooltipStyled } from "./InfoTooltipStyled";
import { useEffect } from "react";

interface InfoTooltipProps {
    text: string;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export const InfoTooltip = ({ text, isOpen, setIsOpen }: InfoTooltipProps) => {
    useEffect(() => {
        if (!isOpen) return;
        const timeout = setTimeout(() => {
            setIsOpen(false);
        }, 1750);

        return () => clearTimeout(timeout);
    }, [isOpen, setIsOpen]);

    return <InfoTooltipStyled $visible={isOpen}>{text}</InfoTooltipStyled>;
};
