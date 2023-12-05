# Magic-Flags 🎩✨

Unleash the magic of flags in your projects with 🎩✨ Magic-Flags! Effortlessly manage and toggle states like a wizard, and watch your codebase transform with a sprinkle of bitwise enchantment! 🌟🚀
Magic-Flags is a JavaScript library designed to simplify the management of flag states using bitwise operations. It's perfect for scenarios where you need to toggle, set, or unset various states or permissions easily and efficiently.

![Magic-Flags Logo](logo.png)

## Features

- Easy to use API for flag state management.
- Lightweight and efficient handling of multiple flags.
- Simplifies complex conditional logic.

## Future enhancements
- Add signal/effect/subscription based flagSet.
- Add react hook based flagSet.
- Add support to return binary representation of flags set to optimize data structures when dealing with keys having multiple dependencies

## Installation

```bash
yarn install magic-flags
```

## Usage
First, import the library:

```js
import createFlagSet from 'magic-flags';
// Or using CommonJS
// const createFlagSet = require('magic-flags');
```

### Example 1: Web Application - User Permissions
In a web-based project management tool


```js
const userPermissions = createFlagSet('CanEditProjects', 'CanViewReports', 'CanManageUsers');

let editorPermissions = 0;
userPermissions.enable('CanEditProjects');
userPermissions.enable('CanViewReports');

if (!userPermissions.has('CanManageUsers')) {
  console.log('Access denied. Insufficient permissions.');
}

// Later on
userPermissions.enable('CanManageUsers');

// disable
userPermissions.disable('CanManageUsers');

// Reset all permissions
userPermissions.clear();

```

### Example 2: Simple Game - Player States and Abilities
In a 2D platformer game

Instead of the code below and more complex states
```js
const heroStates = {
    DoubleJump: false,
    Shield: false,
    Invisibility: false,
    IsUnderwater: false,
    IsOnFire: false
}

heroStates.DoubleJump = true;

if(heroStates.DoubleJump && heroStates.IsOnFire && heroStates.Shield) {
  // ...
}
```

Magic-Flags lets you easier and maintainable code which works very fast because of betwise nature

```js
const heroStates = createFlagSet('DoubleJump', 'Shield', 'Invisibility', 'IsUnderwater', 'IsOnFire');

heroStates.enable('DoubleJump');
heroStates.enable('IsOnFire');
heroStates.enable('Shield');

if (heroStates.has(['DoubleJump', 'IsOnFire', 'Shield'])) { // this will return true
  // Execute logic
}

heroStates.disable('IsOnFire');
// Logic for disabling IsOnFire after a timer

heroStates.switch('Invisibility');
heroStates.switch('Invisibility');

// End of level or on restart
heroStates.clear();

```

## Why Magic Flags Is Fast
The "Magic-Flags" library leverages the power of bitwise operations to manage state flags efficiently. Bitwise operations are incredibly fast because they are supported at the processor level and operate directly on the binary representation of numbers.

### Simple Example of Bitwise Operations
Here's a simple illustration of how bitwise operations are used in "Magic-Flags"

```js
// Example flag values
const FLAG_A = 1 << 0; // Binary: 0001
const FLAG_B = 2 << 1; // Binary: 0010
const FLAG_C = 4 << 2 ; // Binary: 0100

// Combined flags
let combinedFlags = 0

// Enable FLAG_A with Bitwise OR
combinedFlags |= FLAG_A; // Binary: 0001

// Enable FLAG_B with Bitwise OR
combinedFlags |= FLAG_B; // Binary: 0011

// Checking a flag
let hasFlagA = (combinedFlags & FLAG_A) === FLAG_A; // true
let hasFlagC = (combinedFlags & FLAG_C) === FLAG_C; // false

// Removing a flag wit Bitwise NOT
combinedFlags &= ~FLAG_B; // Binary: 0001, FLAG_B is removed

// reseting all to false
combinedFlags = 0;

```

### Benefits of Bitwise Operations
- `Performance` Bitwise operations are executed at the CPU level, making them much faster than other higher-level operations.

- `Low Memory Usage` Flags are stored as bits within an integer, consuming significantly less memory compared to other data structures like objects or arrays.

- `Atomic Operations` These operations can be done in a single instruction, reducing the overhead of multiple function calls.

- `Flexibility and Scalability` Easily add more flags without increasing complexity or degrading performance.


## API Reference
 - `createFlagSet(flag_names)` Initializes a new set of flags.
 - `has(flag)` Checks if the specified flag is set.
 - `enable(flag)` Enables (sets) the specified flag.
 - `disable(flag)` Disables (unsets) the specified flag.
 - `switch(flag)` Toggles the specified flag.
 - `clear()` Clears all flags.


## Contributing
Contributions are welcome! Please read the [contributing](CONTRIBUTION.md)
guidelines before submitting pull requests.

## License
This project is licensed under the [MIT](LICENSE) License.
