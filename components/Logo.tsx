import Image from "next/image";

type LogoProps = {
  className?: string;
  height?: number;
};

export default function Logo({ className = "", height = 32 }: LogoProps) {
  const width = Math.round(height * 5.2);

  return (
    <Image
      src="/logo.png"
      alt="Singapore Horizon"
      width={width}
      height={height}
      className={`h-auto w-auto object-contain mix-blend-screen ${className}`}
      style={{ height, width: "auto", maxWidth: width }}
      priority
    />
  );
}
