# LuxLunch Delight

Build a responsive, multi-section landing page for "LuxLunch"—a high-end gourmet dining experience. The page must feature a striking glassmorphism UI overlaying a photorealistic sage-green kitchen background, using these specific hex colors:

Primary Accent (Buttons/Gradients): #FF8107

Secondary Warm Accent (Highlights): #FFAA33

Active Accent (Links/CTA Highlights): #46CB43

Base Glass Panel: rgba(255, 255, 255, 0.15) with backdrop-filter: blur(20px) and soft border refractions.

1. Sticky Navigation Bar

Logo: Stylized gold/orange dome icon with bold white text reading LuxLunch.

Menu Items: Home, Menu, Culinary Experience, Chef's Special, Reservations.

Action CTA: Green (#46CB43) "Be a member" text button + Orange (#FF8107) "Book Now" gradient pill button.

Scroll Behavior: Glass panel intensifies blur on page scroll.

2. Hero Section (Framed Glass Panel UI)

Left Column:

Headline: "Where taste meets perfection" (Highlight "taste" in #FF8107 and "perfection" in #FFAA33).

Body text detailing curated gourmet delicacies.

CTA Button: Gradient button (#FF8107 to #FFAA33) with ripple hover effect.

Mini Menu Quick-Cards: Horizontally stacked glass preview cards for Veg Crunch and Salmon Fois with green #46CB43 "Order now" triggers.

Right Column (Interactive Food Showcase):

Interactive 3D-tilt dish showcase featuring a high-res spaghetti plate surrounded by a glowing geometric orange arc.

Floating glass orb showing a mini salad dish that gently bobs using a CSS floating animation.

3. Section 2: Interactive Menu Swiper (Framer Motion / Embla Carousel)

Header: "Explore Our Curated Menu" with category tabs: Starters, Main Course, Hi-Tea, Desserts.

Swiper Carousel: Touch-enabled horizontal slider showcasing dish cards.

Card Specs:

Glassmorphism card background with subtle white border glow.

High-res dish visual, calorie count badge, preparation time, price ($).

Hover State: Card scales slightly upward (scale-105), revealing an "Add to Order" green button (#46CB43).

4. Section 3: "The Chef's Table" (Scroll-Driven Interactive Story)

Scroll Animation: As the user scrolls down, reveal content with staggered fade-in up transitions.

Layout: Split screen with a video preview or high-res image of a Michelin-star chef on the left and interactive statistics on the right.

Animated Counters (Triggers on Scroll):

15+ Michelin Stars Combined

100% Organic Local Sourcing

4.9/5 Customer Satisfaction Rate

5. Section 4: Customer Reviews (Infinite Loop Slider)

Component: Continuous auto-scrolling testimonial marquee/carousel.

Card Details: Glass cards featuring reviewer avatar, star ratings (using #FFAA33), short quote, and verified dining badge.

6. Section 5: Interactive Table Reservation Form

Glassmorphic Booking Card:

Date Picker, Time Slot selector pills, Guest Count counter (+/- buttons).

Interactive Table Map layout: Visual floorplan allowing users to select available tables (green #46CB43 for available, orange #FF8107 for selected).

Submit Button: Vibrant orange gradient button with a loading spinner state.

7. Footer

Newsletter signup with glass input field and green submit arrow.

Quick links, opening hours, address, and social media links with glowing hover states.

Key Technical Specs to Keep in Mind

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b0d5cd43-0cfc-41b0-9cc7-3cf88487ebb7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
