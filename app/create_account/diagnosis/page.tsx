'use client';
import { Button, Button_link } from '@/ui/button/button';
import Diagnosis from '@/ui/diagnosis';
import NavLink from '@/ui/nav_link/navlink';

export default function DiagnosisStart() {
  return (
    <>
      <Diagnosis />
      <Button_link>始める</Button_link>
    </>
  );
}
