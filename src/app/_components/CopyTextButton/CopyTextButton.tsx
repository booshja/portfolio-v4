"use client";

import Image from "next/image";
import { useState } from "react";

const COPY_ICON_SRC = "/icons/export-copy-white.svg" as const;

import { InfoTooltip } from "../Tooltips/InfoTooltip/InfoTooltip";
import { CopyTextButtonStyled } from "./CopyTextButtonStyled";

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
        <CopyTextButtonStyled data-testid={testId} onClick={() => void handleCopy()}>
            {text}
            <Image
                alt="Copy email address to clipboard"
                height={16}
                src={COPY_ICON_SRC}
                width={16}
            />
            <InfoTooltip
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                text="Copied to clipboard!"
            />
        </CopyTextButtonStyled>
    );
};
