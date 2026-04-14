import { useInView } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface CountUpProps {
  to: number;
  from?: number;
  direction?: 'up' | 'down';
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startWhen = true,
  separator = '',
  onStart,
  onEnd
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(direction === 'down' ? to : from);
  const isInView = useInView(ref, { once: true, margin: '0px' });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes('.')) {
      const decimals = str.split('.')[1];
      if (parseInt(decimals) !== 0) {
        return decimals.length;
      }
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;

      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0
      };

      const formattedNumber = Intl.NumberFormat('en-US', options).format(latest);

      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    setDisplayValue(direction === 'down' ? to : from);
  }, [from, to, direction]);

  useEffect(() => {
    if (!isInView || !startWhen) {
      return;
    }

    const startValue = direction === 'down' ? to : from;
    const endValue = direction === 'down' ? from : to;
    let frameId = 0;

    if (typeof onStart === 'function') {
      onStart();
    }

    const timeoutId = setTimeout(() => {
      const startTime = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const nextValue = startValue + (endValue - startValue) * eased;

        setDisplayValue(nextValue);

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
          return;
        }

        setDisplayValue(endValue);

        if (typeof onEnd === 'function') {
          onEnd();
        }
      };

      frameId = requestAnimationFrame(tick);
    }, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [isInView, startWhen, direction, from, to, delay, onStart, onEnd, duration]);

  return <span className={className} ref={ref}>{formatValue(displayValue)}</span>;
}
