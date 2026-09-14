import { courseAssets } from './courseAssets';

export type ProblemVisualConfig = {
  rasterAsset: string | null;
};

export const problemVisualConfig: Record<string, ProblemVisualConfig> = {};

export function getApprovedProblemRasterAsset(problemId: string): string | null {
  return problemVisualConfig[problemId]?.rasterAsset ?? null;
}

export const levelCompleteRasterAssets = {
  trophy: courseAssets.levelVisuals.trophy
} as const;
