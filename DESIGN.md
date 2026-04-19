# Design System: The Radiant Guardian
 
## 1. Overview & Creative North Star
**Creative North Star: "The Radiant Guardian"**
 
This design system moves away from the cliché, "childlike" aesthetics often found in pet services. Instead, it adopts a **High-End Editorial** approach that treats pet care as a premium hospitality experience. We are blending the professional authority of a high-end concierge with the visceral warmth of a Mediterranean sunset.
 
To break the "template" look, we utilize **Intentional Asymmetry**—placing high-impact typography against generous white space and overlapping organic image masks with rigid, modern containers. The experience should feel like a luxury lifestyle magazine: breathing room, bold color blocks, and sophisticated layering.
 
---
 
## 2. Colors: Sunset Spectrum
Our palette is a study in tonal warmth, moving from the deep, grounded oranges of a late horizon to the soft, airy glow of the first light.
 
*   **Primary Core:** `primary` (#a83100) acts as our authoritative anchor. It is used for high-importance interactions and primary branding.
*   **The Glow:** `primary_container` (#ff784c) and `primary_fixed_dim` (#fb612b) provide the energetic "vibrancy" requested, used to highlight key features and active states.
*   **The Neutrals:** We avoid pure #000000 and #FFFFFF. Our "white" is `surface` (#fff4f3), a tinted, warm cream that prevents eye strain and feels more "home-like" and premium.
 
### The "No-Line" Rule
**Static 1px borders are strictly prohibited for sectioning.** To define space, designers must use background color shifts. For example, a section using `surface_container_low` should sit directly against a `surface` background. The change in tone is the boundary.
 
### Surface Hierarchy & Nesting
Treat the UI as physical layers. Use the `surface_container` tiers to create depth:
1.  **Base:** `surface` (#fff4f3)
2.  **Sectioning:** `surface_container_low` (#ffedeb)
3.  **Content Cards:** `surface_container_lowest` (#ffffff) for maximum "pop."
 
### The Glass & Gradient Rule
To add "soul," use subtle linear gradients for large CTA buttons or hero sections, transitioning from `primary` (#a83100) to `primary_container` (#ff784c) at a 135-degree angle. Floating navigation bars should utilize **Glassmorphism**: `surface` at 80% opacity with a 20px backdrop-blur.
 
---
 
## 3. Typography: Modern Editorial
We use **Plus Jakarta Sans** for its geometric clarity and modern "friendly-professional" balance.
 
*   **Display (lg/md):** Reserved for hero headlines. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create an editorial, high-fashion impact.
*   **Headlines:** Used for section titles. `headline-lg` (2rem) in `on_surface` (#4e211f) provides the "authority."
*   **Body (lg/md):** Set in `on_surface_variant` (#834c49) for a softer, more sophisticated read than pure black.
*   **Labels:** Always uppercase with 0.05em letter spacing when used for small captions or eyebrow headers to denote "Pet Category" or "Service Type."
 
---
 
## 4. Elevation & Depth
We convey hierarchy through **Tonal Layering** rather than structural lines.
 
*   **The Layering Principle:** Soft, natural lift is achieved by placing a `surface_container_highest` element on a `surface` background.
*   **Ambient Shadows:** If a card must float, use a "Sunset Shadow": a massive blur (40px-60px) with very low opacity (6%) using a tinted color like `on_surface` (#4e211f). This mimics natural light.
*   **The Ghost Border:** For interactive elements like input fields, use a `1px` border of `outline_variant` (#e09c97) at 30% opacity. It should be felt, not seen.
*   **Glassmorphism:** Use for "floating" action buttons or mobile nav. Use `surface_container_lowest` at 70% opacity with a `blur(12px)`.
 
---
 
## 5. Components
 
### Buttons
*   **Primary:** `primary` (#a83100) background with `on_primary` (#ffefeb) text. Shape: `full` (9999px) for a modern, friendly pill shape.
*   **Secondary:** `surface_container_high` background with `primary` text. No border.
*   **Tertiary:** No background. Underlined with a 2px `primary_container` stroke only on hover.
 
### Chips (Pet Tags)
*   Used for "Dog," "Cat," or "Overnight."
*   **Styling:** Use `secondary_container` (#ffc787) with `on_secondary_container` (#663e00). Roundedness: `sm` (0.5rem).
 
### Cards & Lists
*   **Rule:** No dividers. Use `1.5rem` (md) or `2rem` (lg) vertical spacing to separate items.
*   **The "Pet Profile" Card:** A `surface_container_lowest` (#ffffff) card with a `lg` (2rem) corner radius. Use an asymmetrical image crop (e.g., top-left corner rounded 4rem, others 1rem).
 
### Input Fields
*   **Styling:** `surface_container_low` background, no border, `sm` (0.5rem) rounding.
*   **Focus State:** A 2px `primary_container` (#ff784c) "Ghost Border."
 
### Special Component: The "Care Timeline"
*   A vertical list where the "line" is actually a gradient path from `primary_fixed` to `secondary_fixed`. It connects pet updates (photos/notes) without using harsh grey dividers.
 
---
 
## 6. Do's and Don'ts
 
### Do:
*   **Do** use asymmetrical margins (e.g., more padding on the left than the right in editorial layouts).
*   **Do** use "warm" imagery—photos of pets in golden hour light.
*   **Do** use `primary_fixed` (#ff784c) for small accents like notification dots or price highlights.
 
### Don't:
*   **Don't** use pure black (#000000) for text; it breaks the "Sunset" warmth. Use `on_surface` (#4e211f).
*   **Don't** use 1px solid grey borders. Ever.
*   **Don't** use standard "Material Blue" for links. All interactive elements must stay within the Orange/Sunset spectrum.
*   **Don't** clutter the screen. If a section feels "full," increase the white space by 20%.
 
---
*End of Document*