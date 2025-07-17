'use client';

import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import send from '@/assets/images/send.png';

interface FormType {
  fullName: string;
  phoneNumber: string;
  company?: string;
  quantity: number;
  address: string;
}

export const Form = () => {
  const { control, handleSubmit } = useForm<FormType>({
    defaultValues: {},
  });

  const createOrder = async (data: FormType) => {
    await fetch('/api/order', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  return (
    <form
      id="form"
      className="mx-auto flex w-[85%] scroll-mt-[90px] flex-col items-center gap-3 pt-8"
      onSubmit={handleSubmit(createOrder)}
    >
      <Controller
        control={control}
        name="fullName"
        render={({ field }) => {
          return (
            <div className="flex w-full flex-col gap-0.75 font-bold">
              <label className="ml-2 text-sm text-white uppercase">Họ và tên:</label>
              <div className="w-full rounded-full shadow-md/35">
                <input
                  value={field.value}
                  onChange={field.onChange}
                  className="h-7 w-full rounded-full bg-white pl-3 text-sm shadow shadow-2xl"
                />
              </div>
            </div>
          );
        }}
      />
      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => {
          return (
            <div className="flex w-full flex-col gap-0.75 font-bold">
              <label className="ml-2 text-sm text-white uppercase">Số điện thoại:</label>
              <div className="w-full rounded-full shadow-md/35">
                <input
                  type="tel"
                  value={field.value}
                  onChange={field.onChange}
                  className="h-7 w-full rounded-full bg-white pl-3 text-sm shadow shadow-2xl"
                />
              </div>
            </div>
          );
        }}
      />
      <Controller
        control={control}
        name="company"
        render={({ field }) => {
          return (
            <div className="flex w-full flex-col gap-0.75 font-bold">
              <label className="ml-2 text-sm text-white uppercase">
                Tên doanh nghiệp (không bắt buộc):
              </label>
              <div className="w-full rounded-full shadow-md/35">
                <input
                  value={field.value}
                  onChange={field.onChange}
                  className="h-7 w-full rounded-full bg-white pl-3 text-sm shadow shadow-lg"
                />
              </div>
            </div>
          );
        }}
      />
      <Controller
        control={control}
        name="quantity"
        render={({ field }) => {
          return (
            <div className="flex w-full flex-col gap-0.75 font-bold">
              <label className="ml-2 text-sm text-white uppercase">
                Số lượng đặt hàng dự kiến:
              </label>
              <div className="w-full rounded-full shadow-md/35">
                <input
                  type="number"
                  value={field.value}
                  onChange={field.onChange}
                  className="h-7 w-full rounded-full bg-white pl-3 text-sm shadow shadow-lg"
                />
              </div>
            </div>
          );
        }}
      />
      <Controller
        control={control}
        name="address"
        render={({ field }) => {
          return (
            <div className="flex w-full flex-col gap-0.75 font-bold">
              <label className="ml-2 text-sm text-white uppercase">Địa chỉ:</label>
              <div className="w-full rounded-full shadow-md/35">
                <input
                  value={field.value}
                  onChange={field.onChange}
                  className="h-7 w-full rounded-full bg-white pl-3 text-sm shadow shadow-lg"
                />
              </div>
            </div>
          );
        }}
      />
      <button type="submit">
        <Image src={send.src} alt="Gửi" width={70} height={70} />
      </button>
    </form>
  );
};
