import Image from "next/image";
import { WPAdminPageContainerStyled } from "./_pageStyled";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.pages.wpAdmin;

export default function WPAdmin() {
    return (
        <WPAdminPageContainerStyled data-testid={testIds.container}>
            <Image
                src="https://res.cloudinary.com/dkq1rli4x/image/upload/v1704345064/bugs-bunnys-no_qofjqs.png"
                alt="Bugs Bunny saying no meme"
                priority
                style={{ objectFit: "contain", width: "auto", height: "auto" }}
                data-testid={testIds.image}
            />
        </WPAdminPageContainerStyled>
    );
}
