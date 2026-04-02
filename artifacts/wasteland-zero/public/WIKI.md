# WASTELAND ZERO — WIKI

> Everything you need to survive the wasteland.

---

## ⌨ CONTROLS

| Key | Action |
|-----|--------|
| WASD / ARROWS | Move your character |
| MOUSE | Aim — character always faces cursor |
| LEFT CLICK | Shoot (hold for auto weapons) |
| R | Reload weapon |
| SPACE / SHIFT | Dash — brief speed burst with invincibility |
| ESC / P | Pause game |
| 1-3 | Quick-switch weapons (if available) |

---

## ☠ GAMEPLAY

Survive endless waves of mutant enemies. Kill them to earn **XP orbs** — collect enough to level up and choose powerful upgrades.

Waves escalate every 30 seconds with more enemies and tougher variants.

From **Wave 5+**, elite enemies appear with gold outlines — they're stronger but drop better loot.

Enemies drop **health medkits** and **ammo crates** — pick them up before they despawn!

Walk over **weapon pickups** on the ground to switch guns mid-game.

Each kill awards **coins** — spend them in the between-wave shop on powerful items.

The wasteland map is **3200×3200** pixels — stay near the center for the best tactical positioning.

---

## 🗺️ THE WASTELAND

The arena is a **3200×3200** tile-based map drawn from a grid of **64px tiles**. The terrain is procedurally-tinted wasteland ground with subtle color variation.

**Spawn behavior**: Enemies spawn at random positions along the edges of the visible screen, just outside your view. They immediately path toward you.

**Pickups**: Weapon drops, health medkits, ammo crates, and coin chests all spawn in the world and have a **15-second despawn timer** (chests last 35 seconds). A shrinking ring effect shows when pickups are about to disappear.

**Boundaries**: You cannot walk outside the map edges. Enemies can spawn beyond the edges and walk in. Use the edges to your advantage — kite along walls to limit the angles enemies can approach from.

---

## 🌊 WAVE SYSTEM

Waves escalate every **30 seconds** with increasing enemy counts and speed scaling.

**Wave 1**: Only runners spawn. Use this to learn movement and shooting. Base spawn rate is 0.3 enemies/sec.

**Wave 2–3**: Crawlers join the mix (50% of spawns). Brutes start appearing at 15%. Spitters appear from Wave 3 at 10% chance.

**Wave 4–5**: All four enemy types active. Brutes at 25%, spitters at 20%. Elites begin spawning from Wave 5 with a 10% chance per enemy.

**Wave 6–9**: Spawn rate accelerates — +0.12 enemies/sec per wave. Enemy HP scales +15% per wave, damage +10% per wave. Elites become significantly more dangerous.

**Wave 10–14**: Near-maximum spawn density. The map fills with enemies. Builds without piercing or spread will struggle with crowd control.

**Wave 15+**: Full chaos. Spawn rate caps at 3.5× difficulty multiplier. HP and damage continue scaling. Only optimized builds survive.

**Per-wave bonuses**: You gain +5 max HP every wave automatically — this stacks with shop purchases and upgrades.

---

## 🔫 WEAPONS

> Weapon previews and stats are auto-generated from game data.

### PISTOL
Reliable semi-auto sidearm. Accurate at range with only 0.04 spread. 12-round magazine with 120 reserve ammo. Deals 25 damage per shot at 350ms between shots. Best for precise headhunting from a distance. Pairs perfectly with Reaper's +30% damage bonus for devastating per-shot damage.

### SHOTGUN
Devastating at close range. Fires 5 pellets per shot with 0.18 spread — each pellet deals 18 damage for up to 90 total if all connect. 6-round magazine with 36 reserve. 700ms between shots. Slower but explosive burst damage. Excels against brutes and tight clusters. Rust's +50 HP lets you get in close safely.

### SMG
Full-auto spray machine. Holds 30 rounds with 150 reserve. Only 12 damage per bullet but fires every 110ms — that's roughly 9 bullets per second for 108 DPS. Spread is 0.10 — manageable at medium range. Burns through ammo fast. Nova's -25% fire delay turns this into a buzzsaw.

---

## 🎯 WEAPON TACTICS

**Pistol** — Click-fire at medium to long range. Line up each shot carefully. One of the highest damage-per-bullet weapons. Ideal for picking off spitters before they fire, or sniping crawlers from safety. Weakness: slow fire rate means you'll struggle when swarmed.

**Shotgun** — Get in close and blast. Circle-strafe around brutes while firing point-blank. Against runners, wait until 3–4 are grouped then fire into the cluster. With Piercing upgrade, shotgun pellets punch through the entire pack. Weakness: tiny magazine and low reserve ammo. Buy Ammo Supply from the shop often.

**SMG** — Hold fire and sweep across groups. The high fire rate with Spread Shot upgrade creates an impassable wall of bullets. Keep moving in wide circles while holding fire. With Piercing, bullets hit every enemy in a line. Weakness: individual bullets are weak — brutes take many hits.

**Weapon Switching** — Walk over weapon pickups on the ground to swap. Your current weapon disappears — there's no dual-wielding. Time your swaps between waves when it's safer.

---

## 👾 ENEMIES

> Enemy previews and stats are auto-generated from game data.

### RUNNER
Gaunt ghoul that sprints at you with claws. 40 HP, 170 speed, 10 melee damage. Gives 20 XP on kill. They swarm in packs — never let them surround you. First enemy you'll encounter. Individually weak but deadly in groups during late waves when their HP scales up.

### CRAWLER
Tiny centipede — fastest enemy at 200 speed, very small hitbox (size 7). Only 30 HP and 8 damage, but incredibly hard to hit. Gives 25 XP. Shotgun spread is the most reliable counter — you don't need to aim precisely. With piercing upgrades, they melt in lines.

### BRUTE
Armored hulk at size 18, the biggest enemy. 200 HP and devastating 40 melee damage, but only 70 speed. Gives 60 XP. Keep your distance and kite in circles — if a brute hits you, it chunks nearly half your HP. Shotgun at point-blank deals the most burst damage. Energy Shield from the shop can save you from one charge.

### SPITTER
Bloated frog mutant at size 13. 80 HP, 100 speed, fires acid projectiles every 2 seconds dealing 15 damage each. Gives 40 XP. They actively try to keep distance from you — you need to close the gap or dodge projectiles. Dash through their shots to reach them, or snipe them with the pistol from cover.

**ELITE** — From Wave 5+, any enemy can spawn as an Elite (gold outline). 2× HP, 1.2× size, 1.3× speed, 1.5× damage. Always drops health + ammo, grants 3× XP, drops 3× coins. They're the most valuable kills in the game — prioritize them.

---

## 🐛 ENEMY BEHAVIOR

**Runners** path directly toward you in a straight line. They don't dodge or retreat. In large numbers, they form a closing ring — always move before the ring closes.

**Crawlers** also charge directly but their tiny size makes them easy to miss. They slip between bullets. AoE or spread weapons are essential.

**Brutes** lumbstep slowly toward you. They never give up and never speed up. Just keep distance. If you're cornered, dash through them — you get 200ms of invincibility.

**Spitters** try to maintain distance. If you approach, they'll retreat while firing. If you run away, they'll advance to firing range. They're the only ranged enemy — projectiles move at 280 speed. Strafe to dodge rather than running away.

**Elite behavior** is the same as normal variants — they just have boosted stats and the gold visual outline. A runner elite is just a faster, tankier runner. A brute elite is terrifying.

---

## 👤 SURVIVORS

> Survivor previews and bonuses are auto-generated from game data.

### GHOST
Standard survivor. No special bonuses. Base movement speed 180, base HP 100. Good for learning the game and experiencing a pure, unmodified run. Every other survivor is balanced relative to Ghost.

### VIPER
+40 movement speed (220 total base). Moves like a shadow — impossible to pin down. Best for players who rely on positioning and kiting. The extra speed makes dodging spitter projectiles trivial. Pairs well with SMG for a mobile spray build.

### RUST
+50 max HP (150 total base). Armored in scavenged metal plating. Built to absorb damage. Excels in close-range brawling with shotgun builds. With Iron Will upgrades stacking, Rust can reach absurd HP totals. The extra cushion lets you survive brute hits.

### REAPER
+30% damage multiplier on all weapons. Deals in death — every shot hits harder. Best combined with pistol for devastating per-shot damage, or shotgun for nuclear burst damage. The multiplicative scaling with Big Shot upgrade makes late-game DPS insane.

### NOVA
-25% fire rate delay on all weapons. Cybernetic reflexes — fires at machine precision. The SMG goes from 110ms to 82.5ms between shots, reaching 12 bullets/sec. Pairs perfectly with high fire rate weapons. Rapid Fire upgrade stacks multiplicatively — the result is a bullet hose.

### SCORCHED
-40% reload time on all weapons. Survivor of the nuclear event. Reloads in a flash — never gets caught with an empty magazine. Particularly powerful with Shotgun (normally slow to reload) and SMG (frequent reloads). Keeps sustained DPS much higher than other survivors.

---

## 📊 SURVIVOR COMPARISON

| Survivor | Bonus | Best Weapon | Playstyle |
|----------|-------|-------------|-----------|
| GHOST | None | Any | Balanced / Learning |
| VIPER | +40 Speed | SMG | Mobile Kiting |
| RUST | +50 Max HP | Shotgun | Close-Range Tank |
| REAPER | +30% Damage | Pistol | Precision Sniper |
| NOVA | -25% Fire Delay | SMG | DPS Machine |
| SCORCHED | -40% Reload | Shotgun | Sustained Output |

---

## 🎯 UPGRADES

| Upgrade | Description |
|---------|-------------|
| 🔥 RAPID FIRE | ×0.75 fire rate delay — 25% faster shooting. Stacks multiplicatively |
| 💥 BIG SHOT | +0.3 bullet size multiplier + ×1.2 damage. Bigger bullets, bigger hurt |
| ⚡ ADRENALINE | +30 movement speed. Stacks additively with survivor bonuses |
| ❤️ REGENERATION | +5 HP/sec passive regeneration. Each stack adds another 5 HP/sec |
| 🛡️ IRON WILL | +30 max HP AND fully heals you. The heal alone makes this clutch |
| 🎯 PIERCING | Bullets pass through enemies instead of stopping. Game-changing |
| 🌀 SPREAD SHOT | +2 extra bullets per shot in a spread pattern. Triples your output |
| 📦 AMMO CACHE | +50 reserve ammo + instant full reload. Fixes ammo problems immediately |

---

## 📈 UPGRADE DEEP DIVE

**Stacking behavior**: Every upgrade can be picked multiple times. Most stack multiplicatively (fire rate, damage) or additively (speed, HP, regen). There's no cap — late-game builds can become absurdly powerful.

**Rapid Fire stacking**: Each pick multiplies fire delay by 0.75. Two picks = 0.75 × 0.75 = 0.5625× delay (44% faster). Three picks = 0.42× delay (58% faster). On an SMG, this drops fire interval from 110ms to 46ms — 21 bullets per second.

**Big Shot stacking**: Each pick adds +0.3 bullet size and multiplies damage by 1.2×. Two picks = ×1.44 damage with noticeably larger bullets. Three picks = ×1.728 damage. On pistol with Reaper, one shot can deal 25 × 1.3 × 1.728 = 56 damage.

**Piercing**: Only needs one pick. After that, every bullet passes through enemies. This is the single most impactful upgrade in the game. Get it ASAP for any build.

**Spread Shot stacking**: Each pick adds +2 pellets. Two picks = +4 pellets. On shotgun (base 5 pellets), that's 9 pellets per blast. With piercing, each pellet hits multiple enemies. This combo melts entire waves.

**Priority order**: In most builds, get **Piercing** first, then stack your primary damage/speed upgrades. **Iron Will** is always good when you're below half HP. **Ammo Cache** is essential for SMG builds.

---

## 🪙 SHOP & ECONOMY

Coins drop from **every enemy kill** — the amount scales with wave number and enemy type.

**Coin formula**: Base value = enemy XP ÷ 2, then scaled by ×(1 + (wave − 1) × 0.15). A runner on Wave 1 drops 10 coins. By Wave 10, that same runner drops ~24 coins.

**Elite enemies** drop **3× coins** compared to normal variants.

**Coin chests** spawn randomly in the world every ~90 seconds. Drop chance varies by difficulty (20%–85%). Base chest value = (30 + wave × 12) × difficulty multiplier, with ±15% random variance. Chests last 35 seconds before despawning.

The **between-wave shop** opens automatically after each wave. Available items:

- **💊 Medkit** — +25 HP. Base cost 20, +5 per purchase
- **❤️‍🩹 Full Heal** — Restore HP to max. Base cost 35, +8 per purchase
- **🛡️ Armor Plating** — +25 max HP permanently. Base cost 50, +15 per purchase
- **💥 Damage Boost** — ×1.15 damage permanently. Base cost 60, +20 per purchase
- **⚡ Leg Servos** — +20 speed permanently. Base cost 40, +12 per purchase
- **🔰 Energy Shield** — Absorbs next hit completely. Base cost 70, +20 per purchase
- **🔋 Ammo Supply** — Full ammo + 50% extra reserve. Base cost 25, +5 per purchase
- **🩸 Stim Pack** — +5 HP/sec regen. Base cost 55, +18 per purchase

**Cost formula**: Price = base cost + (cost scale × times already bought). A Damage Boost bought 3 times costs 60 + (20 × 3) = 120 coins.

---

## 💰 ECONOMY STRATEGIES

**Early game (Wave 1–4)**: Coins are scarce. Buy Medkits only if critically low. Save for Damage Boost or Ammo Supply — they have the best value early.

**Mid game (Wave 5–9)**: Coins flow more freely from elites and scaling. Invest in Armor Plating and Damage Boost every chance you get. Energy Shield is a life-saver against surprise brute hits.

**Late game (Wave 10+)**: You should be swimming in coins. Buy everything — prioritize Damage Boost (multiplicative scaling compounds), then Armor Plating, then Stim Packs. Keep Energy Shield active at all times.

**Chest hunting**: Coin chests are worth a huge amount in later waves. On Hard difficulty at Wave 15, a chest can be worth 200+ coins. Watch for the golden glow and grab them before they despawn.

**Don't hoard**: There's no benefit to saving coins. Spend everything every shop phase. Dead players can't spend.

---

## ⚔️ DIFFICULTY SETTINGS

| Difficulty | Enemy HP | Enemy DMG | Enemy Speed | Spawn Rate | Player HP | Drop Rate | XP Mult |
|-----------|----------|-----------|-------------|------------|-----------|-----------|---------|
| EASY | 0.6× | 0.5× | 0.85× | 0.6× | 1.5× | 1.5× | 1.2× |
| MEDIUM | 0.8× | 0.75× | 0.92× | 0.8× | 1.25× | 1.25× | 1.1× |
| HARD | 1.0× | 1.0× | 1.0× | 1.0× | 1.0× | 1.0× | 1.0× |
| DIFFICULT | 1.3× | 1.3× | 1.1× | 1.3× | 0.85× | 0.7× | 0.9× |
| EXTREME | 1.7× | 1.6× | 1.2× | 1.6× | 0.7× | 0.5× | 0.8× |

**Hard** is the default and recommended difficulty. All wiki stats reference Hard mode values.

**Easy** gives 50% more HP, enemies are dramatically weaker, and drops are more frequent. Great for learning.

**Extreme** is brutal — enemies have 70% more HP and 60% more damage, while you start with only 70 HP. Drop rates are halved. However, coin chest values are 3.5× higher — risk/reward is extreme.

**Chest spawn rates** also vary: 85% on Easy, 55% on Hard, 20% on Extreme. Higher difficulties compensate with massive chest values.

---

## 💀 COMBAT MECHANICS

**Damage dealt by player**: weaponDamage × playerDamageMult × bulletSizeMult. The damage multiplier stacks from Reaper bonus, Big Shot upgrades, and shop Damage Boosts.

**Damage taken from enemies**: baseDamage × (1 + (wave − 1) × 0.10) × eliteMult(1.5) × difficultyDmgMult. On Wave 15 at Hard difficulty, a runner deals 10 × 2.4 = 24 damage per hit. A brute deals 40 × 2.4 = 96 damage.

**Spitter projectiles**: 15 base damage, 280 projectile speed, fires every 2 seconds. Scales same as melee damage. Dodge by strafing — don't run in a straight line.

**HP recovery**: Medkit pickups restore HP. Regeneration upgrade heals 5 HP/sec per stack. Iron Will upgrade fully heals on pickup. Shop Medkit restores 25 HP.

**Invincibility frames**: After taking damage, you get a brief invincibility window. Dash also grants 200ms of invincibility — use it to phase through enemy clusters.

---

## 💨 DASH MECHANICS

**Speed multiplier**: 3.5× your current movement speed during the dash.

**Duration**: Dash lasts 120 milliseconds — a quick burst.

**Cooldown**: 1500 milliseconds (1.5 seconds) between dashes.

**Invincibility**: You're invincible for 200ms after dashing — this extends slightly past the dash itself.

**Tactical uses**: Phase through brute charges. Escape when surrounded. Dodge spitter projectiles. Close the gap on spitters. Cross open ground between cover. Reset your kiting position.

**Pro tip**: Dash cooldown starts when the dash ends — you can't spam it. Save it for genuine emergencies. If you dash into a corner, you're dead.

---

## 🧬 BUILD STRATEGIES

### Tank Build (Rust + Shotgun)
Pick **Rust** for the +50 HP bonus (150 total). Grab the shotgun early. Stack **Iron Will** and **Regeneration** upgrades. Buy **Armor Plating** from the shop every wave. Walk into enemy groups and blast them point-blank. With 3× Iron Will stacks, you'll have 240+ max HP. Regeneration keeps you topped off between fights. The shotgun's burst damage clears clusters before they can deal sustained damage back. Weakness: ammo management. Buy Ammo Supply frequently.

### Speed Demon (Viper + SMG)
Pick **Viper** for the +40 speed bonus (220 total). Use the SMG for constant damage output. Stack **Adrenaline** and **Rapid Fire** upgrades. Buy **Leg Servos** from the shop. With 2× Adrenaline stacks, you're at 280 speed — nothing can catch you. Circle-kite at top speed while spraying the SMG. The sheer velocity lets you outrun every enemy type. Weakness: low damage per bullet. Need Piercing to handle late-game brutes.

### Sniper (Reaper + Pistol)
Pick **Reaper** for the +30% damage bonus. Keep the pistol — it's the most accurate weapon. Stack **Big Shot** and **Piercing** to one-shot runners and punch through entire lines from range. With 2× Big Shot, each pistol round deals 25 × 1.3 × 1.44 = 46.8 damage — enough to one-shot runners even in late waves. Piercing lets each shot hit 3–4 enemies in a line. Weakness: get swarmed and you're dead. Keep distance and dash out of bad positions.

### Bullet Storm (Nova + SMG)
Pick **Nova** for the -25% fire delay. Stack **Rapid Fire**, **Spread Shot**, and **Piercing**. Turn the SMG into a wall of bullets that nothing can walk through. With 2× Rapid Fire and Nova's bonus, the SMG fires every 62ms — 16 bullets/second. Add Spread Shot for 3× the bullets. Add Piercing so they pass through. This is the highest theoretical DPS build in the game. Weakness: ammo consumption is astronomical. You MUST buy Ammo Supply every shop phase.

### Glass Cannon (Reaper + Shotgun)
Pick **Reaper** for +30% damage. Use the shotgun — 5 pellets × 18 dmg × 1.3 = 117 damage per blast at point-blank. Stack **Big Shot** and **Iron Will** (for the full heal). Get Piercing to let pellets pass through. One shotgun blast into a crowd deals hundreds of total damage. Weakness: you need to be close. Iron Will and Energy Shield keep you alive.

### Balanced (Ghost + Adaptable)
Pick **Ghost** for even stats. Grab whatever weapon the map gives you. Pick upgrades that complement your current weapon. Buy **Energy Shield** from the shop as insurance. This build adapts to what the game offers. Prioritize **Piercing** early, then stack damage upgrades for your weapon type. Ghost's lack of weakness means you're never locked into a bad matchup.

### Immortal (Rust + Any)
Pick **Rust** for +50 HP. Stack **Iron Will** every single level-up. Buy **Armor Plating** and **Stim Pack** from the shop. Ignore damage upgrades entirely — focus only on survivability. With enough Iron Will stacks (4–5), you'll have 300+ max HP with 25+ HP/sec regeneration. Enemies literally cannot kill you faster than you heal. Weakness: low kill speed means waves pile up. Partner with Piercing to hit multiple enemies.

---

## 🏆 SCORING & PROGRESSION

Your **score** is calculated from: enemies killed × wave × XP multiplier. Elites give 3× score.

**XP orbs** drop from every enemy kill. The XP value equals the enemy's base XP stat × difficulty XP multiplier × elite multiplier(3×).

**Leveling formula**: Starting XP-to-next-level is 100. Each level-up multiplies the requirement by 1.4×. Level 2 requires 140 XP. Level 3 requires 196 XP. Level 5 requires 384 XP. Level 10 requires ~2,842 XP.

Each level-up pauses the game and offers a choice of **3 random upgrades**. All 8 upgrades have equal chance of appearing.

Your final stats are displayed on the game-over screen: wave reached, total kills, total coins earned, total score, and time survived.

---

## 📐 MATH & FORMULAS

**DPS Calculations** (base, no upgrades, Hard difficulty):
- Pistol: 25 dmg ÷ 0.35s = **71.4 DPS**
- Shotgun: (18 × 5) dmg ÷ 0.7s = **128.6 DPS** (all pellets)
- SMG: 12 dmg ÷ 0.11s = **109.1 DPS**

**With Nova + 2× Rapid Fire on SMG**: 12 ÷ (0.11 × 0.75 × 0.75 × 0.75) = 12 ÷ 0.0464 = **258.6 DPS**

**Reaper + 3× Big Shot on Pistol**: (25 × 1.3 × 1.728) ÷ 0.35 = 56.16 ÷ 0.35 = **160.5 DPS** (per bullet, with piercing hits multiple enemies)

**Enemy effective HP at Wave 15** (Hard):
- Runner: 40 × (1 + 14 × 0.15) = 40 × 3.1 = **124 HP**
- Crawler: 30 × 3.1 = **93 HP**
- Brute: 200 × 3.1 = **620 HP** (Elite Brute: **1240 HP**)
- Spitter: 80 × 3.1 = **248 HP**

**Leveling curve** (cumulative XP needed):
- Level 5: 1,011 total XP
- Level 10: 8,086 total XP
- Level 15: 60,970 total XP

---

## 🎮 GAME FLOW

**1. Main Menu** — Choose to enter the wasteland, visit the shop, or read this wiki.

**2. Difficulty Select** — Pick from Easy, Medium, Hard (default), Difficult, or Extreme. Each changes enemy stats and reward values.

**3. Character Select** — Choose your survivor. Each has a unique bonus that shapes your entire build.

**4. Weapon Select** — Choose your starting weapon. You can find other weapons as pickups during the run.

**5. Deploy** — You spawn in the center of the 3200×3200 wasteland. Enemies begin spawning immediately from offscreen.

**6. Survive** — Kill enemies, collect XP orbs and coins, level up, choose upgrades, survive each wave.

**7. Between Waves** — Shop opens automatically. Spend coins on items. Next wave begins after you close the shop.

**8. Game Over** — When your HP reaches 0, the run ends. View your stats and start again.

---

## 🔄 PICKUPS & DROPS

**XP Orbs** — Green glowing orbs dropped by every enemy. Walk over them to collect. Fill the XP bar at the top of the screen. Orb value = enemy XP × difficulty mult × elite mult.

**Health Medkit** — Red cross pickup. 15% drop chance from normal enemies (modified by difficulty). Elites always drop one. Restores a portion of HP. Despawns after 15 seconds.

**Ammo Crate** — Yellow box pickup. 20% drop chance from normal enemies.  Elites always drop one. Refills some ammo. Despawns after 15 seconds.

**Weapon Pickup** — Colored weapon icon on the ground. Walk over it to swap your current weapon. Your old weapon disappears. Spawns periodically in random world positions.

**Coin Chest** — Golden chest with particle effects. Spawns every ~90 seconds. Contains scaled coin value based on wave and difficulty. Don't miss these — they're worth a ton.

**Coin Drop** — Small gold circle from every enemy kill. Auto-collected on pickup. Value scales with wave number.

---

## 🛡️ ENERGY SHIELD

The **Energy Shield** is a purchasable item from the between-wave shop. It creates a glowing ring around your character.

**How it works**: Absorbs exactly **one hit** of any damage amount — whether it's a 10-damage runner scratch or a 96-damage brute slam. After absorbing, the shield breaks with a visual effect.

**Re-purchasable**: Buy a new one every shop phase. The cost scales: 70, 90, 110, 130... It's expensive but can save your entire run.

**Tactical value**: Most valuable against brutes. Their 40+ base damage (scaling much higher) can end a run in 1–2 hits. Energy Shield gives you a guaranteed safety net.

**Visual indicator**: When active, a glowing colored ring orbits your character. When it breaks, there's a shatter effect. You can see at a glance whether your shield is up.

---

## 🗡️ ELITE ENEMIES

Elite enemies are enhanced versions of standard enemies that begin spawning from **Wave 5** onward with a **10% chance** per spawn.

**Visual**: Gold-outlined glow around the enemy. Noticeably larger (1.2× size).

**Stat multipliers**: 2× HP, 1.3× speed, 1.5× damage, 1.2× size.

**Guaranteed drops**: Always drop a health medkit AND an ammo crate. Always drop coins at 3× value.

**XP value**: 3× the base enemy's XP reward. An elite brute gives 180 XP — massive progression boost.

**Strategy**: Elites are simultaneously the most dangerous and most rewarding enemies. When your HP and ammo are low, hunting elites is the best way to resupply. When you're healthy, be careful — an elite brute deals 60+ damage per hit on Hard.

**Elite spawn rate** doesn't increase with waves — it stays at 10%. But since more enemies spawn per wave, you'll see more elites in absolute numbers.

---

## 💡 TIPS & TRICKS

- **Dash** has a 1.5s cooldown — save it for emergencies or dodging brute charges.
- **Spitters** keep their distance. Close the gap quickly or snipe them with the pistol.
- **Crawlers** are tiny — aim carefully or use spread weapons like the shotgun.
- Pick up weapons on the ground to adapt your build mid-run.
- **Elite enemies** always drop health + ammo — prioritize killing them when you're low.
- Level-up upgrades stack — picking the same upgrade multiple times makes it stronger.
- Don't hoard coins — spend them every shop phase. Dead players can't spend.
- **Energy Shield** from the shop is incredible against brute charges — it fully absorbs one hit.
- Circle-kite large groups rather than running in a straight line.
- Reload behind cover or after dashing away — never reload while surrounded.
- Ammo management is critical — switch weapons or buy ammo before you're empty.
- Prioritize elite enemies for their guaranteed health + ammo drops.
- **Piercing** is the single most important upgrade — get it first in any build.
- Use map edges to limit angles enemies can approach from — corner kiting is powerful.
- The shop's **Full Heal** is most efficient when you're at very low HP — don't waste it when you're at 80%.
- **Stim Pack** from the shop stacks — 3 purchases gives 15 HP/sec regen, which out-heals most damage.
- On EXTREME difficulty, coin chests are worth 3.5× — they're your primary income source.
- Each wave gives +5 max HP automatically — you don't need to spend on Armor Plating early.
- The SMG chews through ammo — always have Ammo Cache upgrades or buy Ammo Supply.
- **Spread Shot** on the shotgun turns it into a room-clearing monster — 7/9/11 pellets per blast.
- When enemies are spawning from all sides, dash TOWARD one group and kill them fast. Thinning one side is better than running from all sides.

---

## 🏅 CHALLENGE RUNS

**Pistol Only** — Never pick up other weapons. Stack Big Shot and Piercing. Test your aim and positioning. Reaper recommended.

**No Shop** — Don't buy anything from the shop. Rely entirely on level-up upgrades and drops. Ghost recommended for the balanced baseline.

**Speedrun to Wave 10** — Optimize your build to reach Wave 10 as fast as possible. Viper + SMG with Rapid Fire stacking.

**Immortal Challenge** — Reach Wave 20 without dying using the Immortal build (Rust + Iron Will stacking). See how long you can sustain.

**EXTREME Survivor** — Play on EXTREME difficulty and try to beat Wave 10. Only the best players can manage this.

**Pacifist Start** — Don't kill any enemies until Wave 3. Dodge everything. Then go all-out. How long were you holding back?

---

## ❓ FAQ

**Q: How do I unlock new survivors?**
A: All survivors are available from the start. Pick your favorite on the character select screen.

**Q: Do upgrades carry between runs?**
A: No — each run starts fresh. Upgrades, shop purchases, and weapons all reset when you die.

**Q: Is there an end / final wave?**
A: No — waves escalate infinitely. The goal is to survive as long as possible and beat your high score.

**Q: What's the best weapon?**
A: It depends on your survivor and build. Shotgun has highest burst damage, SMG has highest sustained DPS, and pistol is best at range. Experiment!

**Q: How does the energy shield work?**
A: It absorbs exactly one hit of any damage, then breaks. You can buy another one next shop phase. Cost increases each purchase.

**Q: What's the highest possible DPS?**
A: Nova + SMG + multiple Rapid Fire + Spread Shot + Piercing + Damage Boosts. Theoretical ceiling is 500+ DPS with enough upgrade stacks.

**Q: Do difficulty settings affect scoring?**
A: Yes — higher difficulties have lower XP multipliers but harder-hitting enemies and less drops. EXTREME has 0.8× XP but 3.5× chest values.

**Q: Can I change difficulty mid-run?**
A: No — difficulty is locked when you start a run. You must start a new run to change it.

**Q: How does HP scaling work per wave?**
A: Enemy HP scales by +15% per wave: hp × (1 + (wave − 1) × 0.15). A Wave 10 runner has 40 × 2.35 = 94 HP.

**Q: What triggers the shop to open?**
A: The shop opens automatically at the end of every wave (every 30 seconds). You can browse and buy, then continue.

**Q: Can I contribute to this wiki?**
A: Yes! This wiki is loaded from WIKI.md — edit it on GitHub and submit a pull request.

---

## 📜 VERSION HISTORY

### v2.2
Wiki overhaul — sidebar navigation, new sections, full-page layout.

### v2.1
Shop & coin economy. Between-wave shop, coin drops, Energy Shield.

### v2.0
Community Wiki. WIKI.md replaces hardcoded How to Play.

### v1.9
Visual Wiki with canvas-rendered enemy/weapon/survivor previews.

### v1.8
Difficulty selection — 5 modes from Easy to Extreme.

### v1.7
How to Play screen added to main menu.

### v1.6
Crawler enemy type. Major balance pass.

### v1.5
Spitter enemy, character skins, 6 survivors, weapon select.

---

*Want to contribute? Edit this file on [GitHub](https://github.com) and submit a pull request!*
