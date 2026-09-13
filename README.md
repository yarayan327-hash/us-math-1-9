# US Math G1–G9 Visual Trial Courseware

An interactive, visual-first mathematics courseware designed for Grades 1 through 9, emphasizing Singapore-style bar modeling, step-by-step visual mathematical reasoning, and dual-language instruction.

## Core Features

- **Grades 1–9 Curriculum**: Progressive grade-level stages covering part-whole, comparison, before-and-after transfer, ratios, fraction deductions, and systems elimination.
- **Visual Mathematical Reasoning**: Dynamic bar models, continuous multi-step visual transformations, and mathematical invariance representations.
- **Dual Mode Entry**:
  - *Diagnostic Mode*: Adaptive assessment routing teachers and students to recommended starting levels.
  - *Direct Level Mode*: Quick-access selector to navigate directly to any grade or topic.
- **Bilingual Instruction**: Instant real-time English and Simplified Chinese (EN / ZH) language switching.
- **Progressive Guided Examples**: Interactive step-by-step scaffolding with active reasoning questions.
- **Teacher Guidance**: Pedagogical tips, common misconceptions, and guided talking points for classroom instructors.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Local Development

Run the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Production Build

Compile TypeScript and build the production bundle:

```bash
npm run build
```

### Type Checking & Lint

Verify all TypeScript types and exports:

```bash
npm run lint
```

## Project Structure

```
├── src/
│   ├── components/       # UI, Navigation, Teacher Guidance, and Visual Models
│   │   └── visuals/      # Bar modeling canvases (ModelStage, CardTransfer, etc.)
│   ├── data/             # Curriculum stages, diagnostic test, and lesson items
│   │   └── stages/       # Stage definitions for Stages 1–9
│   ├── App.tsx           # Main application root
│   ├── types.ts          # Core TypeScript interfaces and domain types
│   └── index.css         # Styling with Tailwind CSS
├── public/               # Static assets
└── COURSE_LOCK.md        # Mathematical curriculum and architecture lock definition
```
