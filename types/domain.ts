import type { BODY_PARTS, WEIGHT_UNITS } from "@/lib/constants/workout";

export type BodyPart = (typeof BODY_PARTS)[number];

export type WeightUnit = (typeof WEIGHT_UNITS)[number];

export type Sex = "male" | "female" | "other" | "prefer_not_to_say";

export type IntensityLevel = "low" | "moderate" | "high";