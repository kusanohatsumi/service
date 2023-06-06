import Image from 'next/image';
import Launch from '../ui/Launch';
import Start from './Start/page';

export default function Home() {
  const flag: any = true;
  return (
    <>
      <main>{flag === false ? <Launch /> : <Start />}</main>
    </>
  );
}
