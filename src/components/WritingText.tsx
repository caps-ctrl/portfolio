import { useEffect, useState } from "react";
import { slogans } from "@/data/writingTextData";

const WritingText = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [sloganIndex, setSloganIndex] = useState(0);
  const speed = 100;

  useEffect(() => {
    const currentSlogan = slogans[sloganIndex];

    if (!isDeleting && text.length < currentSlogan.length) {
      setTimeout(() => {
        setText(currentSlogan.slice(0, text.length + 1));
      }, speed);
    } else if (isDeleting && text.length > 0) {
      setTimeout(() => {
        setText(currentSlogan.slice(0, text.length - 1));
      }, speed / 2);
    } else if (!isDeleting && text.length === currentSlogan.length) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setSloganIndex((prev) => (prev + 1) % slogans.length);
    }

    return () => clearTimeout(200);
  }, [text, isDeleting, sloganIndex]);

  return (
    <div className="text-3xl font-bold text-white mt-5">
      {text}
      <span className="animate-pulse text-yellow-500 px-1">|</span>
    </div>
  );
};

export default WritingText;
