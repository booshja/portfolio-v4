import Image from "next/image";
import Maps from "@/public/images/maps.jpeg";
import {
    NotFoundContainerStyled,
    NotFoundHeaderStyled,
    NotFoundLinkStyled,
    NotFoundTextStyled,
} from "./NotFoundStyled";
import testingIds from "@/testing/testingIds";

const testIds = testingIds.pages.notFound;

export default function NotFound() {
    return (
        <NotFoundContainerStyled data-testid={testIds.container}>
            <NotFoundHeaderStyled data-testid={testIds.header}>
                Couldn&apos;t find that&hellip;
            </NotFoundHeaderStyled>
            <NotFoundTextStyled data-testid={testIds.text}>
                Seems we got lost&hellip;
            </NotFoundTextStyled>
            <NotFoundLinkStyled href="/" data-testid={testIds.link}>
                Go back home
            </NotFoundLinkStyled>
            <Image
                src={Maps}
                alt="A stack of different maps"
                priority
                style={{ objectFit: "contain", width: "auto", height: "auto" }}
                data-testid={testIds.image}
            />
        </NotFoundContainerStyled>
    );
}
