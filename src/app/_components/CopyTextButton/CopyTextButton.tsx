"use client";

import { CopyTextButtonStyled } from "./CopyTextButtonStyled";
import { InfoTooltip } from "../Tooltips/InfoTooltip";
import { useState } from "react";
import Copy from "@/public/icons/export-copy-white.svg";
import Image from "next/image";

interface CopyTextButtonProps {
    copyText: string;
    text: string;
    testId: string;
}

export const CopyTextButton = ({ copyText, testId, text }: CopyTextButtonProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleCopy = async () => {
        try {
            const permissions = await navigator.permissions.query({
                name: "clipboard-write" as PermissionName,
            });
            if (permissions.state === "granted" || permissions.state === "prompt") {
                await navigator.clipboard.writeText(copyText);
                setIsOpen(true);
            } else {
                alert("Error copying to clipboard.");
            }
        } catch (err) {
            alert("Error copying to clipboard: " + err);
        }
    };

    return (
        <CopyTextButtonStyled onClick={handleCopy} data-testid={testId}>
            {text}
            <Image src={Copy} width={16} alt="Copy email address to clipboard" />
            <InfoTooltip
                text="Copied to clipboard!"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </CopyTextButtonStyled>
    );
};
