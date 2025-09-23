import { get } from "@vercel/edge-config";
import { flag } from "@vercel/flags/next";

import type { FeatureFlags } from "@/types";

export const showContactForm = flag<boolean>({
    async decide() {
        const edgeConfigFlags = await get<FeatureFlags>("flags");
        if (!edgeConfigFlags) return false;

        return edgeConfigFlags[this.key as keyof FeatureFlags];
    },
    defaultValue: false,
    description: "Whether or not to show the contact form on the Contact page",
    key: "CONTACT_FORM",
    options: [
        // options are not necessary for boolean flags, but we customize their labels here
        { label: "Hide", value: false },
        { label: "Show", value: true },
    ],
});
