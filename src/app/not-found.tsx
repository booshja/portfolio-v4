import Image from "next/image";
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
                src="https://res.cloudinary.com/dkq1rli4x/image/upload/v1704345071/maps_ejpinj.jpg"
                alt="A stack of different maps"
                priority
                width={300}
                height={300}
                style={{ objectFit: "contain" }}
                data-testid={testIds.image}
            />
        </NotFoundContainerStyled>
    );
}
