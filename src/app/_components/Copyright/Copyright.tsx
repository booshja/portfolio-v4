import testingIds from "@/testing/testingIds";
import { CopyrightFooterStyled, CopyrightTextStyled } from "./CopyrightStyled";

const testIds = testingIds.components.copyright;

export const Copyright = () => {
    return (
        <CopyrightFooterStyled data-testid={testIds.footer}>
            <CopyrightTextStyled data-testid={testIds.text}>
                &copy; 2020 - Present Jacob Andes. All Rights Reserved.
            </CopyrightTextStyled>
        </CopyrightFooterStyled>
    );
};
