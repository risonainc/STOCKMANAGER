---

## 3) `LOCKED_CHECKLIST.md`

```markdown
# LOCKED CHECKLIST (Baseline MVP)

- Real camera scanning in-browser (UPC + QR), overlay + beep
- Two-screen flow with Page 1/2 indicator
- Page 1:
  - UPC required (scan or entry)
  - Brand & Gender lock when auto-filled
  - Master Item Description, COO, C/D
  - Expected Quantity
  - Box Styles 1–4: Boxes, Qty/Box, Pcs (auto), L/W/H (in), Weight (lb)
  - Subtotal calculation + “Check Discrepancy”
- Page 2:
  - Notes
  - Up to 9 locations with QR scan; totals must match Entered Qty
  - Submit enabled only when totals match
- Printable Summary modal (with Print)
- Offline “Download JSON” fallback
- Google Sheets integration via Apps Script Web App (`GET getItem`, `POST submit`)
- Stable element IDs and payload keys (no breaking changes without approval)