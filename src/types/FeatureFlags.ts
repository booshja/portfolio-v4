import { z } from "zod";

export const FeatureFlagsSchema = z.object({
    CONTACT_FORM: z.boolean(),
});

export type FeatureFlags = z.infer<typeof FeatureFlagsSchema>;

/** ------------------------------------------------------------------------ */
