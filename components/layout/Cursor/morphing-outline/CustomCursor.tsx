"use client";

import React, { useEffect, useRef, useState } from "react";
import "./custom-cursor.css";
type Nullable<T> = T | null;

const DEFAULT_OUTLINE_SIZE = 35;
const OUTLINE_GAP = 10;
const INNER_DOT_SIZE = 6;
const FOLLOW_LERP = 0.14;
const SIZE_LERP = 0.12;

function clamp(v: number, a = 0, b = 1) {
  return Math.max(a, Math.min(b, v));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * clamp(t);
}

export default function CustomCursor() {
  const innerRef = useRef<Nullable<HTMLDivElement>>(null);
  const outlineRef = useRef<Nullable<HTMLDivElement>>(null);

  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const outlineX = useRef(0);
  const outlineY = useRef(0);
  const outlineW = useRef(DEFAULT_OUTLINE_SIZE);
  const outlineH = useRef(DEFAULT_OUTLINE_SIZE);
  const outlineBR = useRef(DEFAULT_OUTLINE_SIZE / 2);

  const targetX = useRef(0);
  const targetY = useRef(0);
  const targetW = useRef(DEFAULT_OUTLINE_SIZE);
  const targetH = useRef(DEFAULT_OUTLINE_SIZE);
  const targetBR = useRef(DEFAULT_OUTLINE_SIZE / 2);

  const hoveringRef = useRef<Element | null>(null);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  const hasMoved = useRef(false);

  function findHoverAncestor(el: Element | null): Element | null {
    while (el) {
      if ((el as HTMLElement).dataset?.cursor === "hover") return el;
      el = el.parentElement;
    }
    return null;
  }

  function parseBorderRadius(el: Element, w: number, h: number): number {
    try {
      const cs = window.getComputedStyle(el);
      const br = cs.borderTopLeftRadius || cs.borderRadius || "0px";

      if (br.includes("%")) {
        const pct = parseFloat(br) || 0;
        return (pct / 100) * Math.min(w, h);
      }
      return parseFloat(br) || 0;
    } catch {
      return Math.min(w, h) / 2;
    }
  }

  function setHoverTarget(el: Element | null) {
    if (!el) return resetHoverTarget();

    const rect = (el as HTMLElement).getBoundingClientRect();
    const gap = OUTLINE_GAP;

    targetW.current = rect.width + gap * 2;
    targetH.current = rect.height + gap * 2;
    targetBR.current = parseBorderRadius(el, rect.width, rect.height) + gap / 2;
    targetX.current = rect.left + rect.width / 2;
    targetY.current = rect.top + rect.height / 2;

    hoveringRef.current = el;
  }

  function resetHoverTarget() {
    targetW.current = DEFAULT_OUTLINE_SIZE;
    targetH.current = DEFAULT_OUTLINE_SIZE;
    targetBR.current = DEFAULT_OUTLINE_SIZE / 2;
    targetX.current = mouseX.current;
    targetY.current = mouseY.current;
    hoveringRef.current = null;
  }

  function animate() {
    outlineX.current = lerp(outlineX.current, targetX.current, FOLLOW_LERP);
    outlineY.current = lerp(outlineY.current, targetY.current, FOLLOW_LERP);

    outlineW.current = lerp(outlineW.current, targetW.current, SIZE_LERP);
    outlineH.current = lerp(outlineH.current, targetH.current, SIZE_LERP);
    outlineBR.current = lerp(outlineBR.current, targetBR.current, SIZE_LERP);

    if (outlineRef.current) {
      outlineRef.current.style.width = `${outlineW.current}px`;
      outlineRef.current.style.height = `${outlineH.current}px`;
      outlineRef.current.style.borderRadius = `${outlineBR.current}px`;
      outlineRef.current.style.transform = `translate3d(${
        outlineX.current - outlineW.current / 2
      }px, ${outlineY.current - outlineH.current / 2}px, 0)`;
    }

    if (innerRef.current) {
      innerRef.current.style.transform = `translate3d(${
        mouseX.current - INNER_DOT_SIZE / 2
      }px, ${mouseY.current - INNER_DOT_SIZE / 2}px, 0)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    if (rafRef.current == null) rafRef.current = requestAnimationFrame(animate);

    const onMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (!hasMoved.current) {
        hasMoved.current = true;
        setVisible(true);
      }

      if (!hoveringRef.current) {
        targetX.current = mouseX.current;
        targetY.current = mouseY.current;
      }

      const el = document.elementFromPoint(e.clientX, e.clientY);
      const hoverEl = findHoverAncestor(el);

      if (hoverEl && hoverEl !== hoveringRef.current) {
        setHoverTarget(hoverEl);
      } else if (!hoverEl && hoveringRef.current) {
        resetHoverTarget();
      }
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-wrapper ${visible ? "cursor-visible" : ""} ${
          hoveringRef.current ? "cursor-hover" : ""
        }`}
      >
        <div className="cursor-dot" ref={innerRef} />
        <div className="cursor-dot-outline" ref={outlineRef} />
      </div>
    </>
  );
}
