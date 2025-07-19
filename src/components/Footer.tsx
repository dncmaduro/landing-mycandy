import { EarthIcon, MailIcon, PhoneIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer
      className={`font-nunito flex h-auto min-h-[120px] w-full flex-col items-center justify-center gap-[6px] bg-[#f0fcff] p-4 text-center font-black text-[#0090FD]`}
    >
      <h3 className="md:text-md text-sm leading-4 uppercase">Công ty TNHH My Candy Việt Nam</h3>
      <address className="max-w-[250px] text-[9px] leading-2.5 not-italic md:text-[10px]">
        Trụ sở chính: Số 10 - LK3 Khu nhà ở thương mại tổ 6 phường Xuân Phương, Nam Từ Liêm, Hà Nội
      </address>
      <address className="max-w-[270px] text-[9px] leading-2.5 not-italic md:text-[10px]">
        Chi nhánh Hà Nam: Công ty TNHH MY CANDY VIỆT NAM, TDP Lương Tràng, phường Tân Liêm, Phủ Lý,
        Hà Nam
      </address>
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        <div className="flex items-center justify-center gap-1">
          <EarthIcon className="h-3 w-3" aria-hidden="true" />
          <span className="text-[8px] md:text-[9px]">mycandyvn.com</span>
        </div>
        <div className="flex items-center justify-center gap-1">
          <PhoneIcon className="h-3 w-3" aria-hidden="true" />
          <a href="tel:+84833025026" className="text-[8px] hover:underline md:text-[9px]">
            0833.025.026
          </a>
        </div>
        <div className="flex items-center justify-center gap-1">
          <MailIcon className="h-3 w-3" aria-hidden="true" />
          <a href="mailto:mycandyvn@gmail.com" className="text-[8px] hover:underline md:text-[9px]">
            mycandyvn@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
