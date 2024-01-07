import Image from "next/image";
import { WPAdminPageContainerStyled } from "./_pageStyled";
import testingIds from "@/testing/testingIds";
import BugsNo from "@/public/images/bugs-bunnys-no.png";

const testIds = testingIds.pages.wpAdmin;

export default function WPAdmin() {
    return (
        <WPAdminPageContainerStyled data-testid={testIds.container}>
            <Image
                src={BugsNo}
                alt="Bugs Bunny saying no meme"
                priority
                fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
                data-testid={testIds.image}
            />
        </WPAdminPageContainerStyled>
    );
}
