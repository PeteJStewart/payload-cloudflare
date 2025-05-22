import * as migration_20250520_102830 from './20250520_102830';

export const migrations = [
  {
    up: migration_20250520_102830.up,
    down: migration_20250520_102830.down,
    name: '20250520_102830'
  },
];
