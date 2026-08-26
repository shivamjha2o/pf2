"use client";

import React from 'react';
import type { ReactNode } from 'react';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
  index?: number;
  topOffset?: string | number;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
  index = 0,
  topOffset
}) => {
  // Responsive sticky top offset: ensures cards stack nicely on both mobile and desktop
  // Card 0 sticks at top, Card 1 stacks slightly below, Card 2 stacks further below
  const stickyTop =
    topOffset !== undefined
      ? typeof topOffset === 'number'
        ? `${topOffset}px`
        : topOffset
      : `calc(clamp(70px, 9vh, 92px) + ${index} * clamp(14px, 2vh, 22px))`;

  return (
    <div
      className={`scroll-stack-card sticky w-full mb-8 sm:mb-14 p-4 sm:p-7 md:p-8 pb-6 sm:pb-8 md:pb-9 rounded-2xl sm:rounded-3xl bg-white border-3 sm:border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] box-border transition-all duration-200 ${itemClassName}`.trim()}
      style={{
        top: stickyTop,
        zIndex: 10 + index,
      }}
    >
      {children}
    </div>
  );
};

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
}) => {
  const childArray = React.Children.toArray(children);

  return (
    <div className={`scroll-stack-wrapper relative w-full pb-6 sm:pb-12 ${className}`.trim()}>
      <div className="scroll-stack-inner w-full flex flex-col">
        {childArray.map((child, index) => {
          if (React.isValidElement<ScrollStackItemProps>(child)) {
            return React.cloneElement(child, {
              index: child.props.index ?? index,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default ScrollStack;

