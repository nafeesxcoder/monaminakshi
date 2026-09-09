import Image from "next/image";
import { Star } from "lucide-react";

const TestimonialCard = ({ image, name, subtitle, text }) => {
  return (
    <div className="bg-[#B3C1C8] rounded-2xl p-4 md:p-6 flex flex-col items-center text-center shadow-md h-full">
      <div className="w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden">
        <Image src={image} alt={name} width={112} height={112} className="object-cover w-full h-full" />
      </div>
      <div className="flex justify-center mb-2">
        {Array(5).fill(0).map((_, i) => (
          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 inline-block mx-0.5 text-gray" fill="#656162" />
        ))}
      </div>
      <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{name}</div>
      <div className="md:text-lg text-gray font-semibold mb-4">{subtitle}</div>
      <div className="text-sm sm:text-base md:text-lg font-light text-white/90">“{text}”</div>
    </div>
  );
};

export default TestimonialCard; 