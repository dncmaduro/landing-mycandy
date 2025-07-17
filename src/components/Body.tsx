import { Countdown } from './body/Countdown';
import { Feedback } from './body/Feedback';
import { Form } from './body/Form';

export const Body = () => {
  return (
    <div className="mt-3 h-max w-full bg-gradient-to-b from-[#62b8f7] to-[#0069b5]">
      <Form />
      <Feedback />
      <Countdown />
    </div>
  );
};
