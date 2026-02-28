import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export default function CategoryCard({
  title,
  subtitle,
  image,
  href,
}: Props) {
  return (
    <Link href={href} className="group block">
      <div className="relative h-96 rounded-2xl overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Text */}
        <div className="absolute bottom-8 left-8 text-white">
          <h3 className="text-2xl font-medium mb-2">
            {title}
          </h3>
          <p className="text-gray-300 text-sm tracking-wide">
            {subtitle}
          </p>
        </div>

      </div>
    </Link>
  );
}