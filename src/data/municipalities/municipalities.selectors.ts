import type { Municipality } from '@/models/municipalities/municipality.model';

export const selectDistrictNamesByRegion = (
  municipalities: readonly Municipality[],
  regionName: string,
): string[] => [
  ...new Set(
    municipalities.filter(({ region }) => region === regionName).map(({ district }) => district),
  ),
];

export const selectMunicipalitiesByDistrict = (
  municipalities: readonly Municipality[],
  districtName: string,
): Municipality[] => municipalities.filter(({ district }) => district === districtName);

export const selectMunicipalitiesByRegion = (
  municipalities: readonly Municipality[],
  regionName: string,
): Municipality[] => municipalities.filter(({ region }) => region === regionName);

export const selectRegionNames = (municipalities: readonly Municipality[]): string[] => [
  ...new Set(municipalities.map(({ region }) => region)),
];
