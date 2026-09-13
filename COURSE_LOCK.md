# US Math G1–G9 Course Lock Specification

> **IMPORTANT ARCHITECTURE DIRECTIVE**:
> This document defines the immutable mathematical logic and curriculum boundaries of the project.
> All subsequent visual enhancement, polish, animation, and UI styling tasks must strictly adhere to these boundaries.

---

## 1. LOCKED COURSE LOGIC (Do NOT Modify)

The following core mathematical assets and specifications are strictly frozen:

- **Question Content & Text**: Problem contexts, character names, object labels, and contextual descriptions.
- **Numerical Values & Answers**: All initial quantities, totals, remainders, ratios, multipliers, scale factors, and solution values.
- **Mathematical Relationships & Invariance**: Part-whole sums, difference constancy, ratio scaling, and total invariance across card-transfer and internal shift models.
- **Diagnostic Logic & Routing**: Scoring criteria, diagnostic questions, stage thresholds, and level recommendations.
- **Level Structure & Order**: Stage sequence from Grade 1 through Grade 9.
- **Step Sequences & Reasoning Milestones**: Step counts, intermediate deduction phases, bracket targets, and step-by-step reveals.
- **Unit Counts & Dimensions**: Unit block counts in visual models (`maxUnits`, `totalUnitsRow1`, `totalUnitsRow2`, unit widths and division rations).
- **Comparison & Unit-Rate Relationships**: Relative bar lengths, brackets, and scaling logic.
- **Elimination Targets & Cancellation Mapping**: Item types (`item1` / `item2`), common-subset alignment, diagonal slashes, remainder brackets, and back-substitution mapping.
- **Card-Transfer Quantities**: Transfer counts, directional arrow targets, invariant sum totals, and reversal operations.
- **Bilingual Lesson Meaning**: Exact semantic equivalence between English (`EN`) and Simplified Chinese (`ZH`) instruction, questions, and teacher guidance.

---

## 2. ALLOWED MODIFICATIONS FOR VISUAL ENHANCEMENT

Future visual enhancement passes may iterate on:

- **Backgrounds & Themes**: Ambient backgrounds, cards, subtle textures, and gradients that maintain WCAG AA contrast.
- **Decorative Assets & Mascot Graphics**: Illustrations and vector icons that do not obscure or replace mathematical bars.
- **Animations & Transitions**: Entrance fades, subtle motion layout transitions, and step advance effects via `motion/react`.
- **Visual Polish & Styling**: Clean border radii, typography refinement, hover states, and button feedback.
- **Spacing & Layout Adjustments**: Alignment within safe zones, margin tuning, and responsive padding.
- **Presentation-Layer Improvements**: Status badges, tab selectors, and progress indicator styling.

---

## 3. IMMUTABILITY RULE

Under **NO** circumstances should visual styling or animations alter, distort, truncate, or invert the mathematical meaning of the visual models. Every bar, block, bracket, and label corresponds to an exact mathematical quantity.
