import orderButton from '@/assets/images/orderbutton.png';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const OrderButton = ({ className }: Props) => {
  return (
    <div className={`flex w-full items-center justify-center ${className || ''}`}>
      <button>
        <Image src={orderButton.src} alt="Nút order" width={300} height={100} />
      </button>
    </div>
  );
};
