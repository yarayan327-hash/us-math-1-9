# Problem Visual Map

This report audits the approved course content against the approved repository assets. It is intentionally conservative: if a literal object or named-character asset is missing, the mapping is marked `NO MATCHING ASSET` instead of substituting a nearby visual.

## Approved Asset Notes

| Asset group | Available assets | Safe use |
| --- | --- | --- |
| Named characters | `ava.png`, `ben.png` | Use only for Ava and Ben. |
| Generic character pose sets | `girl-*`, `boy-*` | Current reference A uses the approved girl thinking/celebrating pose set as the course's Emma visual identity. Do not use these to impersonate other named students without approval. |
| Missing named characters | Omar, Leo, Mia, Sara, Noah, Sophia, Sam, Alex | `NO MATCHING ASSET` for character identity. Use literal object only if available. |
| Exact young objects | crayon, cookie, notebook, ticket | Use only when the problem literally mentions the object. |
| Missing young objects | sticker, game card/card, toy block as generic math block | `NO MATCHING ASSET`; do not substitute crayon, ticket, star, or toy block. |

## Implemented Reference Mappings

| Problem ID | Level | Problem context | Named character | Intro character | Intro object | Teaching object | Feedback character | Confidence / reason |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `s1-challenge` | L1 | Emma receives more crayons | Emma | approved girl thinking pose as Emma | blue crayon, one small yellow crayon support | blue crayon | approved girl Emma pose set | Medium: crayon is exact; Emma uses approved girl pose set because no file is named `Emma.png`. |
| `s1-prac2` | L1 | Omar eats cookies | Omar | `NO MATCHING ASSET` | cookie | cookie | `NO MATCHING ASSET` | High for cookie; no approved Omar character asset, so no character is rendered. |
| `s2-fewer-example` | L2 | Ben has stickers; Ava has fewer stickers | Ben / Ava | Ben approved character asset | `NO MATCHING ASSET` | `NO MATCHING ASSET` | Ben approved character asset | Medium for character; sticker asset is missing, so sticker/card object is intentionally not rendered. |

## Young-Level Audit

| Problem ID | Level | Story/context nouns | Named character | Asset status | Implementation status |
| --- | --- | --- | --- | --- | --- |
| `s1-challenge` | L1 | crayons | Emma | crayon available; Emma represented by approved girl pose set | Implemented reference A |
| `s1-guided-sub` | L1 | stickers | Ben | Ben available; sticker missing | Not implemented yet |
| `s1-guided-blocks` | L1 | tower/blocks | Leo | Leo missing; exact story block asset not approved as contextual object | Unsupported |
| `s1-prac1` | L1 | crayons | Mia | crayon available; Mia missing | Not implemented yet |
| `s1-prac2` | L1 | cookies | Omar | cookie available; Omar missing | Implemented reference B as object-only |
| `s1-transfer` | L1 | add/take away blocks | Noah | Noah missing; contextual object not literal enough | Unsupported |
| `s2-challenge` | L2 | game cards | Ava / Ben | Ava and Ben available; card missing | Not implemented yet |
| `s2-fewer-example` | L2 | stickers | Ben / Ava | Ben and Ava available; sticker missing | Implemented reference C as character-only |
| `s2-find-diff` | L2 | stickers | Leo / Mia | sticker, Leo, Mia missing | Unsupported |
| `s2-prac1` | L2 | crayons | Sara | crayon available; Sara missing | Not implemented yet |
| `s2-transfer` | L2 | tickets | Noah | ticket available; Noah missing | Not implemented yet |
| `s3-challenge` | L3 | cookies | none in question text | cookie available | Not implemented in this corrective pass |
| `s3-shirts` | L3 | shirts | no named student in prompt | shirt available | Not implemented yet |
| `s3-points` | L3 | game points | Leo / Mia in asset slot only | no literal point asset; Leo/Mia missing | Unsupported |
| `s3-transfer` | L3 | notebooks/books | Ava | Ava and notebook/book available | Not implemented yet |

## Middle and Senior Levels

Grades 4-9 were audited for risk but not implemented in this pass. The current corrective scope stops after the three reference cases. Later mapping should continue with the same rule: explicit problem ID configuration only, literal object match only, default `null`.

## Unsupported Asset Gaps

- `Omar` character: `NO MATCHING ASSET`.
- `sticker` object: `NO MATCHING ASSET`.
- `game card/card` object: `NO MATCHING ASSET`.
- `Leo`, `Mia`, `Sara`, `Noah`, `Sophia`, `Sam`, `Alex` character identities: `NO MATCHING ASSET`.
