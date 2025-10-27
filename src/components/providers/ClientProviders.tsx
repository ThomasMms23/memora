"use client";

import { ReactNode } from "react";
import { MotionProvider } from "./MotionProvider";

interface ClientProvidersProps {
  children: ReactNode;
}

/**
 * Collection de tous les providers clients
 */
export function ClientProviders({ children }: ClientProvidersProps) {
  return <MotionProvider>{children}</MotionProvider>;
}



