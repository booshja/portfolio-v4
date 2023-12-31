import Image from "next/image";
import BugsBunny from "@/public/images/bugs-bunnys-no.png";
import { WPAdminPageContainerStyled, ImageContainerStyled } from "./_pageStyled";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.pages.wpAdmin;

export default function WPAdmin() {
    return (
        <WPAdminPageContainerStyled data-testid={testIds.container}>
            <Image
                src={BugsBunny}
                alt="Bugs Bunny saying no meme"
                priority
                style={{ objectFit: "contain", width: "auto", height: "auto" }}
                data-testid={testIds.image}
            />
        </WPAdminPageContainerStyled>
    );
}
