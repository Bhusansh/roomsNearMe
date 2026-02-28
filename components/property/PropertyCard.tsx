import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  image,
}: PropertyCardProps) {
  return (
    <Link
      href={`/property/${id}`}
      className="group block bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-1">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mb-3">{location}</p>

        <div className="flex items-center justify-between">
          <span className="text-black font-bold text-lg">
            ₹ {price}
          </span>

          <span className="text-sm text-gray-400">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}