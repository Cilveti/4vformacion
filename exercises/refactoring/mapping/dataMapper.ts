/**
 * Medieval City Data Mapper Requirements:
 * 
 * 1. Transform city name from DTO to entity format
 * 2. Calculate city prosperity based on gold reserves (prosperous if > 500 gold)
 * 3. Convert building condition percentage to binary status (good/damaged)
 * 4. Map building types directly while changing property names
 * 5. Transform raw population number to total population count
 * 
 * Input: Raw DTO data from external source
 * Output: Clean domain entities for game logic
 */

// Change interfaces to types for medieval city data
export type MedievalCityDTO = {
  cityName: string;
  population: number;
  goldReserves: number;
  buildings: BuildingDTO[];
}

export type BuildingDTO = {
  id: string;
  type: 'house' | 'church' | 'market';
  condition: number; // 0-100
}

// Change domain model interfaces to types
export type MedievalCity = {
  name: string;
  totalPopulation: number;
  treasury: {
    gold: number;
    isProsperous: boolean;
  };
  structures: Building[];
}

export type Building = {
  identifier: string;
  buildingType: 'house' | 'church' | 'market';
  status: 'good' | 'damaged';
}

// Simple mapper class
export function mapMedievalCityToEntity(dto: MedievalCityDTO): MedievalCity {
  return {
    name: dto.cityName,
    totalPopulation: dto.population,
    treasury: mapTreasury(dto.goldReserves),
    structures: dto.buildings.map(mapBuildingToEntity)
  };
}

function mapTreasury(goldReserves: number) {
  return {
    gold: goldReserves,
    isProsperous: isProsperous(goldReserves)
  };
}

function isProsperous(goldReserves: number): boolean {
  const PROSPERITY_THRESHOLD = 500;
  return goldReserves > PROSPERITY_THRESHOLD;
}

function mapBuildingToEntity(buildingDto: BuildingDTO): Building {
  return {
    identifier: buildingDto.id,
    buildingType: buildingDto.type,
    status: determineBuildingStatus(buildingDto.condition)
  };
}

function determineBuildingStatus(condition: number): 'good' | 'damaged' {
  const GOOD_CONDITION_THRESHOLD = 50;
  if (condition > GOOD_CONDITION_THRESHOLD) {
    return 'good';
  }
  return 'damaged';
}


