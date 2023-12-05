/**
 * Represents the mapping of flag names to their bitwise values.
 */
interface FlagValues {
  [key: string]: number;
}

/**
 * Defines the structure for the flag set, with methods to manipulate the flags.
 */
interface FlagSet {
  /**
   * Checks if the specified flag is set.
   * @param flag - The name of the flag to check.
   * @returns True if the flag is set, false otherwise.
   */
  has: (flag: string | string[]) => boolean;

  /**
   * Enables (sets) the specified flag.
   * @param flag - The name of the flag to enable.
   */
  enable: (flag: string) => void;

  /**
   * Disables (unsets) the specified flag.
   * @param flag - The name of the flag to disable.
   */
  disable: (flag: string) => void;

  /**
   * Toggles (flips) the state of the specified flag without knowing the actaul state of the flag
   * @param flag - The name of the flag to toggle.
   */
  switch: (flag: string) => void;

  /**
   * Clears (resets) all flags.
   */
  clear: () => void;
}

/**
 * Creates a set of flags from the provided names. Each flag is represented by a unique power of two,
 * allowing them to be combined and manipulated bitwise.
 * @param flagNames - An array of strings representing the names of the flags.
 * @returns An object with methods to manipulate the flag set.
 */
function createFlagSet(flagNames: string[]): FlagSet {
  const BASE = 1;
  const flag_values: FlagValues = {};
  
  /**
   * If function called with "LOADED" "NOTIFIED" "COMMITED"
   * The `flag_values` will be like below
       LOADED => 1 // 1 << 0
       NOTIFIED => 2 // 1 << 1
       COMMITED => 4 // 1 << 2
   */
  flagNames.forEach((flag, index) => {
    flag_values[flag] = BASE << index;
  });
  
  let flags = 0;
  
  return {
    has: (flag: string | string[]): boolean => {
      /** BETWISE AND */
      if(Array.isArray(flag)) {
        let hasAll = false;
        let index = 0;

        while(index < flag.length) {
          let currentFlag = flag[index]  
          hasAll = hasAll && ((flags & flag_values[currentFlag]) === flag_values[currentFlag])
          index++;
        }

        return hasAll;
      }

      return (flags & flag_values[flag]) === flag_values[flag];
    },

    enable: (flag: string): void => {
      /** BETWISE OR */
      flags |= flag_values[flag];
    },
  
    disable: (flag: string): void => {
      /** BETWISE NOT */
      flags &= ~flag_values[flag];
    },
  
    switch: (flag: string): void => {
      /** XOR */
      flags ^= flag_values[flag];
    },
  
    clear: (): void => {
      flags = 0;
    }
  };
}

export default createFlagSet;
