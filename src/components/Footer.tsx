import { EarthIcon, MailIcon, PhoneIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <div
      className={`font-nunito flex h-[120px] w-full flex-col items-center justify-center gap-[6px] bg-[#f0fcff] text-center font-black text-[#0090FD]`}
    >
      <span className="text-md leading-4 uppercase">Công ty TNHH My Candy Việt Nam</span>
      <span className="max-w-[250px] text-[9px] leading-2.5">
        Trụ sở chính: Số 10 - LK3 Khu nhà ở thương mại tổ 6 phường Xuân Phương, Nam Từ Liêm, Hà Nội
      </span>
      <span className="max-w-[270px] text-[9px] leading-2.5">
        Chi nhánh Hà Nam: Công ty TNHH MY CANDY VIỆT NAM, TDP Lương Tràng, phường Tân Liêm, Phủ Lý,
        Hà Nam
      </span>
      <div className="flex items-center justify-center gap-2 text-sm">
        <div className="flex items-center justify-center gap-1">
          <EarthIcon className="h-3 w-3" />
          <span className="text-[8px]">mycandyvn.com</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <PhoneIcon className="h-3 w-3" />
          <span className="text-[8px]">0833.025.026</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <MailIcon className="h-3 w-3" />
          <span className="text-[8px]">mycandyvn@gmail.com</span>
        </div>
      </div>
    </div>
  );
};
