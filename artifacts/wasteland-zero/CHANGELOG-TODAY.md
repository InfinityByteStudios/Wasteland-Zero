CHANGELOG — Combined summary of today's changes
Date: 2026-04-01
Version: v1.9

Overview
--------
This changelog consolidates all gameplay, content, UI, and tuning changes applied today into a single record for the Wasteland Zero HTML5 game.

Gameplay & Progression
----------------------
- Rewrote enemy spawn system to a fractional `spawnRate` + `spawnAccum` accumulator for smooth, continuous spawning (replaces batch `spawnCount`/`spawnInterval`).
- Tuned early-wave curve to be gentler:
  - Start spawn rate: 0.3 spawns/sec.
  - Per-wave spawnRate increment: +0.12 spawns/sec.
  - Wave 1: runners-only (no large enemies).
- Enemy damage scales with wave: +10% damage per wave (applied to both contact and projectile damage).
- Player max HP scales upward slowly: +5 max HP per wave and heal by the same amount on wave start (player growth intentionally slower than enemy damage growth).

Enemy Systems & New Enemy
-------------------------
- Introduced Elite enemies (from wave 5+; ~10% chance):
  - Elite modifiers: 2× HP, 1.3× speed, 1.5× damage, 3× XP.
  - Elites have a distinctive gold outline and guaranteed pickup drops on death.
- Added new enemy type: "Crawler".
  - Crawler stats (design): size=7, hp≈30, speed≈200, damage≈8, xp≈25.
  - Implemented `drawCrawler()` and integrated it into spawn mixes and rendering.

Pickups & Rewards
------------------
- Added pickups system and item types:
  - Health medkits (heal ~25) with a spawn chance on enemy death.
  - Ammo crates (partial reserve refill or ammo boost) with a spawn chance.
- Pickup spawn probabilities and despawn timers implemented; elites guarantee drops.
- Kill rewards (XP) adjusted to include elite multipliers.

Wave Announcements & UI
-----------------------
- Added a centered wave announcement overlay (`WAVE X`) that fades over ~1.5s when a new wave starts.
- ABOUT / HOW TO PLAY screen converted into a dynamic visual wiki:
  - Renders live canvas previews for enemies, weapons, and characters using the in-game draw functions (so visuals match game assets).
  - Populates grid sections for weapons, enemies, and survivors with preview canvases.

Balance & Tuning Notes
----------------------
- Spawn system smoothing and spawnRate tuning were prioritized to reduce the wave 1→2 difficulty spike.
- Enemy damage growth deliberately outpaces player HP growth so progression remains meaningful and challenging.
- Early tuning values (spawnRate start and increment, damage scaling, pickup drop rates) are subject to playtesting; consider further adjustments after player runs.

Files Changed / Added
---------------------
- Modified: [artifacts/wasteland-zero/public/game.html](artifacts/wasteland-zero/public/game.html) — primary game logic changes (spawn system, scaling, pickups, elites, crawler, about/wiki changes, version and changelog constants).
- Modified: [README.md](README.md) — changelog entries and roadmap updates.
- Added: [artifacts/wasteland-zero/CHANGELOG-TODAY.md](artifacts/wasteland-zero/CHANGELOG-TODAY.md) (this file) — consolidated changelog for today's work.

Developer Notes / Next Steps
---------------------------
- Playtest waves 1–6 locally to verify feel and ensure the spawn/damage curve is satisfactory.
- Validate interactions with difficulty selector (if using difficulty modifiers) to ensure values don't stack too aggressively.
- Optional: add SFX for pickups and elite deaths; polish medkit/ammo visuals.
- If further balance is requested, iterate on `spawnRate` increments, enemy damage-per-wave multiplier, and pickup drop chances.

End of changelog.
