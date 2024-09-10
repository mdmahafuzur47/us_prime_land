import React from "react";

interface IContainer {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ className, children }: IContainer) {
  return (
    <section className={`${className} max-w-7xl mx-auto w-full px-3`}>
      {children}
    </section>
  );
}
