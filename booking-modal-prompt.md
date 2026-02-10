# Booking Modal Prompt (for Codex)

You are adding a **booking request modal** to an Astro site with three languages (EN/ES/PT-BR). The modal opens from **Book Now** buttons on tour detail pages and should **submit a booking request** (no payment). It must support **per‑tour time slots**, **date blocking**, and **pricing preview by group size**. Follow all instructions precisely.

## 1) Goal
Create a reusable **Booking Request Modal** that opens when the user clicks any “Book Now” button on a tour detail page. The modal must:
- Know which tour is being requested (from page context).
- Validate required fields.
- Use a calendar widget (Flatpickr or equivalent) with date‑blocking rules.
- Show price dynamically when user selects number of participants (using pricing data from tours.js).
- Submit to a form endpoint (e.g., Formspree) without backend.
- Show a success toast and close/reset modal after submit.

## 2) Data Source
You have a `tours.js` data file with a list of tours for each language. Each tour includes:
- `title`, `slug`, `category`, `pricing`, `bookingTimeSlots`, `bookingCutoffDays`, `bookingBlockedWeekdays`, `bookingBlockedDates`
- `pricing` can be:
  - `priceTable` (map of participants -> price)
  - `perPerson` (price per participant)
  - `standard` (map of ranges like "1-4": 875)
  - `custom` (no fixed pricing)

### Pricing logic
When user selects participants:
- If `pricing.priceTable`, use exact match (e.g., 4 → priceTable["4"]).
- Else if `pricing.perPerson`, price = perPerson * participants.
- Else if `pricing.standard` with ranges (e.g., "1-4"), pick range containing the participant count.
- Else show nothing.

## 3) Modal Fields (in order)
1. **Date** (calendar input, DD/MM/YYYY)
2. **Time**
   - If tour has `bookingTimeSlots`, show dropdown of 24h times.
   - If tour doesn’t have time slots (Custom Tour), show free text input.
3. **Number of participants** (min 1, max 12)
   - Immediately below, show price summary + message:
     - EN: `No payment required now`
     - ES: `Sin pago ahora`
     - PT-BR: `Sem pagamento agora`
4. **Pickup location** (text)
5. **Special requests** (textarea optional)
6. **Name** (text)
7. **Email** (email)
8. **Phone** (tel) — allow free input with +country code
9. **Request Booking** button

## 4) Required Validation
- Required fields: date, time (or time text), participants, pickup, name, email, phone
- Email must be valid format
- Date cannot be in the past
- Participants 1–12
- Phone: free text but not empty (no strict formatting)
- Show inline error messages

### Languages
All error strings must be translated to EN/ES/PT-BR based on current page language.

## 5) Date Blocking Rules
- Calendar uses **America/Sao_Paulo** time zone.
- Default cutoff: if current time is **>= 19:00**, tomorrow is blocked (minDate = today + cutoffDays + 1). Otherwise minDate = today + cutoffDays.
- `bookingCutoffDays` is per tour.
- Block weekday(s) from `bookingBlockedWeekdays`.
- Block specific dates from `bookingBlockedDates` (YYYY-MM-DD array).
- Also add **global annual block** for Dec 31 and Jan 1.

## 6) UX Behavior
- Modal opens on any element with `data-booking-trigger`.
- Close on X or clicking backdrop.
- After successful submit:
  - Modal closes
  - Success toast appears (centered)
  - Form resets

## 7) Styling Requirements
- Modal centered, responsive.
- Smooth open/close animation.
- Errors highlighted in red borders.
- Toast centered, **blue background + white text** in all themes.

## 8) Submit Handling
- Send request to Formspree (or another endpoint).
- Email content must include all form fields.
- No backend required.

## 9) Implementation Guidance
- Create a component `BookingModal.astro`.
- Include it in tour detail pages.
- Pass tour data via props and use data attributes:
  - `data-tour-name`
  - `data-tour-id`
  - `data-pricing` (JSON)
  - `data-cutoff-days`
  - `data-blocked-weekdays`
  - `data-blocked-dates`
- Use Flatpickr via CDN or npm (if bundler allows).

## 10) Required Output
When asked to implement:
- Modify/create the component.
- Add trigger attributes to “Book Now” buttons.
- Ensure multilingual copy is correct.
- Ensure date blocking + pricing preview works.

---

### Deliverables
1. `BookingModal.astro` component
2. Integration in tour pages
3. Styles + scripts
4. Build passes

### Notes
Keep code clean, commented only where needed, and follow Astro best practices.
