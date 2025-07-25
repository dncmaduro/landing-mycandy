'use client';

import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import send from '@/assets/images/send.webp';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

interface FormType {
  fullName: string;
  phoneNumber: string;
  company?: string;
  quantity: number;
  address: string;
}

export const Form = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {},
  });
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const createOrder = async (data: FormType) => {
    setLoading(true);
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        throw new Error('Có lỗi khi gửi đơn hàng!');
      }

      router.push('/thankyou');
      reset();
    } catch (e) {
      toast.error('Gửi đơn hàng thất bại. Vui lòng thử lại!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent" />
        </div>
      )}

      <form
        id="form"
        className="mx-auto flex w-[85%] scroll-mt-[90px] flex-col items-center gap-3 pt-8"
        onSubmit={handleSubmit(createOrder)}
      >
        <Controller
          control={control}
          name="fullName"
          rules={{ required: 'Vui lòng nhập họ tên' }}
          render={({ field }) => (
            <div className="flex w-full flex-col gap-0.75 font-bold">
              <label className="ml-2 text-sm text-white uppercase">Họ và tên:</label>
              <div className="w-full rounded-full shadow-md/35">
                <input
                  value={field.value}
                  onChange={field.onChange}
                  className="h-7 w-full rounded-full bg-white pl-3 text-sm shadow shadow-2xl"
                />
              </div>
              {errors.fullName && (
                <span className="ml-3 text-xs text-orange-300">{errors.fullName.message}</span>
              )}
            </div>
          )}
        />
        <Controller
          control={control}
          name="phoneNumber"
          rules={{ required: 'Vui lòng nhập số điện thoại' }}
          render={({ field }) => (
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
              {errors.phoneNumber && (
                <span className="ml-3 text-xs text-orange-300">{errors.phoneNumber.message}</span>
              )}
            </div>
          )}
        />
        <Controller
          control={control}
          name="company"
          render={({ field }) => (
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
          )}
        />
        <Controller
          control={control}
          name="quantity"
          rules={{ required: 'Vui lòng nhập số lượng đặt hàng' }}
          render={({ field }) => (
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
              {errors.quantity && (
                <span className="ml-3 text-xs text-orange-300">{errors.quantity.message}</span>
              )}
            </div>
          )}
        />
        <Controller
          control={control}
          name="address"
          rules={{ required: 'Vui lòng nhập địa chỉ' }}
          render={({ field }) => (
            <div className="flex w-full flex-col gap-0.75 font-bold">
              <label className="ml-2 text-sm text-white uppercase">Địa chỉ:</label>
              <div className="w-full rounded-full shadow-md/35">
                <input
                  value={field.value}
                  onChange={field.onChange}
                  className="h-7 w-full rounded-full bg-white pl-3 text-sm shadow shadow-lg"
                />
              </div>
              {errors.address && (
                <span className="ml-3 text-xs text-orange-300">{errors.address.message}</span>
              )}
            </div>
          )}
        />
        <button type="submit" disabled={loading}>
          <Image src={send.src} alt="Gửi" width={70} height={70} />
        </button>
      </form>
    </div>
  );
};
