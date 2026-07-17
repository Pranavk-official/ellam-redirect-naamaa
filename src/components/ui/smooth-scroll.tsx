"use client";

import { ReactLenis } from "lenis/react";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => (
  <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
    {children}
  </ReactLenis>
);
