import { unstable_flag as flag } from "@vercel/flags/next";
import { get } from "@vercel/edge-config";
import type { FeatureFlags } from "@/types";

export const showContactForm = flag<boolean>({
    key: "CONTACT_FORM",
    async decide() {
        const edgeConfigFlags = await get<FeatureFlags>("flags");
        if (!edgeConfigFlags) return false;

        return edgeConfigFlags[this.key as keyof FeatureFlags];
    },
    description: "Whether or not to show the contact form on the Contact page",
    defaultValue: false,
    options: [
        // options are not necessary for boolean flags, but we customize their labels here
        { value: false, label: "Hide" },
        { value: true, label: "Show" },
    ],
});
