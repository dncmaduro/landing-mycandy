import orderButton from '@/assets/images/orderbutton.png';
import Image from 'next/image';

export const OrderButton = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <button>
        <Image src={orderButton.src} alt="Nút order" width={300} height={100} />
      </button>
    </div>
  );
};
