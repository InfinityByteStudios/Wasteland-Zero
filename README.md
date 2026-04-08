# WASTELAND ZERO

> *SURVIVE. KILL. EVOLVE.*

A 2D top-down post-apocalyptic survival shooter. Fight waves of mutants in a ruined wasteland, level up, and survive as long as you can.

**Current Version**: `v2.3`

## Tech Stack

- HTML5 Canvas (vanilla JS game engine)
- React 18 + Vite
- TypeScript / Tailwind CSS
- pnpm monorepo

## Getting Started

```bash
pnpm install
pnpm run dev
```

Game runs at `http://localhost:5173`

---

## Roadmap

### v1.5 — Audio & Sound Effects
- [ ] Background music (ambient wasteland loop)
- [ ] Shooting SFX per weapon type
- [ ] Enemy hit / death sounds
- [ ] Player damage grunt
- [ ] Dash whoosh SFX
- [ ] Level-up jingle
- [ ] Volume slider in pause menu

### v1.6 — New Enemies & Boss Waves
- [x] **Crawler** — low-profile fast enemy, hard to hit
- [ ] **Bomber** — explodes on death dealing AoE damage
- [ ] **Boss enemy** every 5th wave (large health pool, unique attack pattern)
- [ ] Boss health bar (top of screen)
- [x] Enemy variety scaling with wave number

### v1.7 — Loot & Item Drops
- [x] Health packs dropped by enemies (small heal)
- [x] Ammo crate drops
- [ ] Temporary power-ups (damage boost, speed boost, invincibility)
- [ ] Visual pickup indicators with rarity glow (common/rare)

### v1.8 — Map Improvements
- [ ] Multiple biome tile sets (ruins, desert, toxic swamp)
- [ ] Destructible obstacles (barrels, crates)
- [ ] Environmental hazards (toxic puddles, fire patches)
- [ ] Better procedural obstacle layouts (building-like clusters)

### v1.9 — New Weapons
- [ ] **Sniper Rifle** — slow fire, high damage, piercing
- [ ] **Flamethrower** — short range, continuous damage, DoT effect
- [ ] **Grenade Launcher** — AoE explosive projectile
- [ ] Weapon rarity tiers affecting base stats

### v2.0 — Progression & Meta Game
- [ ] Persistent high score leaderboard (local storage)
- [ ] Unlockable characters (earn via score milestones)
- [ ] Run statistics screen (accuracy, damage dealt, time survived)
- [ ] Achievement system with badges

### v2.1 — Visual Polish
- [ ] Improved tilemap with sprite-sheet textures
- [ ] Blood splatter / gore particles on enemy death
- [ ] Weather effects (rain, dust storm, fog)
- [ ] Day/night cycle with lighting changes
- [ ] Improved muzzle flash and explosion VFX

### v2.2 — Quality of Life
- [ ] Settings menu (keybinds, sensitivity, graphics quality)
- [ ] Mobile touch controls (virtual joystick + fire button)
- [ ] Accessibility options (colorblind mode, screen reader hints)
- [ ] Tutorial / first-run tips overlay

### Future Ideas (Unscheduled)
- [ ] Co-op multiplayer (WebSocket or WebRTC)
- [ ] Story mode with objectives and NPC dialogue
- [ ] Crafting system (combine pickups for upgrades)
- [ ] Base building between waves
- [ ] Procedurally generated map layouts per run

---

## Changelog

### [v2.3] — 2026-04-02 — Massive Wiki Expansion
#### Added
- Wiki expanded from 11 to 22 sections with detailed game data
- New sections: The Wasteland, Weapon Tactics, Enemy Behavior, Survivor Comparison
- New sections: Upgrade Deep Dive, Difficulty Settings, Combat Mechanics, Dash Mechanics
- New sections: Math & Formulas, Game Flow, Pickups & Drops, Energy Shield, Elite Enemies
- New sections: Challenge Runs, Version History
- Expanded Build Strategies (7 builds), Tips (20+), FAQ (11 questions)
- DPS calculations, damage formulas, scaling curves, and exact game data throughout
- Generic table renderer for data-heavy sections

### [v2.2] — 2026-04-02 — Wiki Overhaul
#### Changed
- Full-page wiki redesign with sidebar navigation and fixed header
- Sidebar auto-highlights current section on scroll, click to jump
- New wiki sections: Wave System, Shop & Economy, Build Strategies, Scoring & Progression, FAQ
- Expanded descriptions for weapons, enemies, and survivors
- Build strategy cards with recommended loadouts
- FAQ section with common questions and answers
- Bullet list parsing in WIKI.md

### [v2.1] — 2026-04-02 — Shop & Coin Economy
#### Added
- Coin economy: enemies drop coins, elite enemies drop 3×
- Random coin chests spawn in the world
- Between-wave shop with purchasable items
- Energy Shield, Armor Plating, Damage Boost, and more

### [v2.0] — 2026-04-01 — Community Wiki
#### Changed
- "How to Play" screen replaced with community-editable Wiki
- Wiki content loaded from `WIKI.md` — anyone can edit it on GitHub via pull request
- New sections: Upgrades reference and Tips
- Text descriptions sourced from WIKI.md; canvas previews + stats still auto-generated
- Hardcoded fallback if WIKI.md fails to load

### [v1.9] — 2026-04-01 — Visual Wiki — How to Play
#### Changed
- How to Play screen now renders canvas previews of all enemies, weapons, and character skins
- Full in-game wiki with visual cards for every game element

### [v1.8] — 2026-04-01 — Difficulty Selection
#### Added
- Pre-game difficulty selection screen: Easy, Medium, Hard (default), Difficult, Extreme
- Difficulty multipliers affect enemy HP, damage, speed, spawn rate, player HP, drops, and XP
- Difficulty badge displayed on HUD during gameplay
- Game flow updated: Menu → Difficulty → Character → Weapon → Deploy

### [v1.7] — 2026-04-01 — How to Play Screen
#### Added
- "HOW TO PLAY" button on main menu
- Comprehensive guide screen: controls, gameplay tips, all weapons, all enemies, all survivors
- Color-coded cards with stats for weapons, enemies, and character bonuses

### [v1.6] — 2026-04-01 — New Enemy — Crawler
#### Added
- New enemy type: Crawler — fast, low-profile centipede (size 7, speed 200, 30 HP)
- Detailed sprite: segmented carapace, animated legs, mandibles, glowing amber eyes
- Spawns from wave 2+, rebalanced spawn mix across all wave tiers

### [v1.5] — 2026-04-01 — Wave Rebalance & Drops
#### Changed
- Smooth fractional spawn curve — gentle wave 1 (runners only), brutes from wave 2
- Enemy damage scales +10% per wave
- Player gains +5 max HP per wave (slower than enemy damage growth)
#### Added
- Health medkit drops from enemies (15% chance, heals 25 HP)
- Ammo crate drops from enemies (20% chance, +50% clip reserve)
- Elite enemies from wave 5+ (gold outline, 2× HP, 1.3× speed, 1.5× damage, guaranteed drops)
- "WAVE X" announcement overlay on wave transitions
- Pickups fade out and despawn after 15 seconds

### [v1.4] — 2026-04-01 — Dash & Enemy Pathfinding Fix
#### Added
- Dash ability (SPACE/SHIFT) with invincibility frames and speed burst
- 1.5s dash cooldown with HUD indicator
#### Fixed
- Enemy obstacle collision and pathfinding

### [v1.3] — 2026-03-31 — Enemy Overhaul — Detailed Sprites
#### Changed
- Complete enemy visual redesign: spider legs (Runner), frog body (Spitter), hulk armor (Brute)
- Enemy health bars and low-HP flash effect
- Animated body parts and glowing eyes

### [v1.2] — 2026-03-30 — Character & Weapon Select
#### Added
- 6 playable survivors: Ghost, Viper, Rust, Reaper, Nova, Scorched
- Each character has unique canvas-drawn sprite and stat bonuses
- Pre-game weapon selection screen

### [v1.1] — 2026-03-30 — Enemy Types & Spawn Fix
#### Added
- 3 enemy types: Runner, Brute, Spitter
- Weapon pickup spawning every 60 seconds
#### Fixed
- Enemy spawn system reliability

### [v1.0] — 2026-03-29 — Initial Release
#### Added
- Core gameplay loop: movement, shooting, reload
- Wave-based enemy spawning with escalation
- XP leveling with upgrade cards
- 3 weapons: Pistol, Shotgun, SMG
- 3200×3200 world with camera, obstacles, minimap
- Main menu, game over screen, pause menu
