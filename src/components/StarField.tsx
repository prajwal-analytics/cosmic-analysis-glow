import { useMemo } from "react";

const StarField = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 0.5,
      duration: `${Math.random() * 4 + 2}s`,
      delay: `${Math.random() * 3}s`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            "--duration": star.duration,
            "--delay": star.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default StarField;
