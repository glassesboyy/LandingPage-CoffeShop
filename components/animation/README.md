# Animation System Documentation

## Struktur Folder

```
components/
└── animation/
    ├── index.ts                      # Export semua animasi
    ├── preloader.tsx                 # Preloader (sudah ada)
    ├── section-animation.tsx         # Animasi untuk section
    ├── ui-animations.tsx             # Animasi untuk UI components
    ├── reveal/
    │   ├── fade-in.tsx              # Fade in animation
    │   ├── slide-in.tsx             # Slide in animation
    │   ├── scale-in.tsx             # Scale in animation
    │   └── stagger-container.tsx    # Stagger animation
    ├── scroll/
    │   ├── scroll-reveal.tsx        # Scroll reveal animation
    │   └── parallax.tsx             # Parallax effect
    ├── hover/
    │   ├── hover-scale.tsx          # Hover scale effect
    │   └── hover-float.tsx          # Hover float effect
    └── utils/
        ├── animation-variants.ts     # Animation variants
        └── intersection-observer.tsx # Intersection observer hook
```

## Cara Penggunaan

### 1. Import Components

```tsx
import {
  FadeIn,
  SlideIn,
  ScaleIn,
  StaggerContainer,
  ScrollReveal,
  HoverScale,
  HoverFloat,
  AnimatedSection,
  AnimatedItem,
} from "@/components/animation";
```

### 2. Reveal Animations

#### FadeIn

```tsx
<FadeIn delay={0.2} duration={0.6} direction="up">
  <h2>Your content</h2>
</FadeIn>
```

#### SlideIn

```tsx
<SlideIn direction="left" delay={0.3} distance={50}>
  <div>Your content</div>
</SlideIn>
```

#### ScaleIn

```tsx
<ScaleIn delay={0.1} scale={0.8}>
  <Card>Your content</Card>
</ScaleIn>
```

#### StaggerContainer

```tsx
<StaggerContainer staggerDelay={0.1}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggerContainer>
```

### 3. Scroll Animations

#### ScrollReveal

```tsx
<ScrollReveal direction="up" distance={50} threshold={0.3}>
  <section>Your content</section>
</ScrollReveal>
```

#### Parallax

```tsx
<Parallax offset={100}>
  <img src="background.jpg" alt="Background" />
</Parallax>
```

### 4. Hover Effects

#### HoverScale

```tsx
<HoverScale scale={1.05}>
  <button>Hover me</button>
</HoverScale>
```

#### HoverFloat

```tsx
<HoverFloat y={-10}>
  <Card>Hover me</Card>
</HoverFloat>
```

### 5. Section Animations

#### AnimatedSection & AnimatedItem

```tsx
<AnimatedSection>
  <AnimatedItem delay={0.1}>
    <h2>Title</h2>
  </AnimatedItem>
  <AnimatedItem delay={0.2}>
    <p>Description</p>
  </AnimatedItem>
</AnimatedSection>
```

### 6. UI Component Animations

```tsx
import { AnimatedCard, AnimatedBadge, AnimatedButton } from "@/components/animation/ui-animations";

<AnimatedCard delay={0.1}>
  <CardContent>Your content</CardContent>
</AnimatedCard>

<AnimatedBadge delay={0.2} icon={<LogoIcon />}>
  Badge Text
</AnimatedBadge>

<AnimatedButton delay={0.3} variant="outline">
  Click me
</AnimatedButton>
```

## Best Practices

1. **Timing**: Gunakan delay bertahap (0.1, 0.2, 0.3) untuk elemen yang berurutan
2. **Duration**: Standar 0.6s untuk reveal, 0.3s untuk hover
3. **Easing**: Sudah dioptimalkan dengan cubic-bezier [0.4, 0, 0.2, 1]
4. **Performance**: Semua animasi menggunakan `once: true` untuk menghindari re-render
5. **Accessibility**: Animasi dapat dinonaktifkan dengan `prefers-reduced-motion`

## Contoh Implementasi untuk Homepage

```tsx
import { FadeIn, SlideIn, StaggerContainer, AnimatedCard } from "@/components/animation";

// Hero Section
<FadeIn delay={0.2}>
  <h1>Hero Title</h1>
</FadeIn>

// About Section
<SlideIn direction="left" delay={0.3}>
  <div>About content</div>
</SlideIn>

// Menu Cards
<StaggerContainer staggerDelay={0.1}>
  {menuItems.map((item, index) => (
    <AnimatedCard key={index} delay={index * 0.1}>
      <CardContent>{item.name}</CardContent>
    </AnimatedCard>
  ))}
</StaggerContainer>
```
