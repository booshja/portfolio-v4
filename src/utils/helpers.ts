import BttnLogo from "@/public/images/bttn-logo.jpeg";
// import HappyHarmony from "@/public/images/happy-harmony.";
import ImagineArtHere from "@/public/images/imagine-art-here-sign.jpeg";
import ImportFrom from "@/public/images/import-from.png";
import PortfolioV3 from "@/public/images/portfolio-v3.png";
import PortfolioV4 from "@/public/images/portfolio-v4.jpeg";
import SmartsheetLogo from "@/public/images/smartsheet-logo.png";
import { StaticImageData } from "next/image";
import type { ImageName } from "@/app/experience/_projects";

export const getProjectImage = (name: ImageName): StaticImageData => {
    let image = ImagineArtHere;

    switch (name) {
        case "smartsheet":
            image = SmartsheetLogo;
            break;
        case "portfolio":
            image = PortfolioV4;
            break;
        // case "happy-harmony":
        //     image = HappyHarmony;
        //     break;
        case "previous-portfolio":
            image = PortfolioV3;
            break;
        case "bttn":
            image = BttnLogo;
            break;
        case "import-from":
            image = ImportFrom;
            break;
        default:
            break;
    }

    return image;
};
