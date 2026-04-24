import type { Metadata } from 'next';
import IntakeForm from './IntakeForm';

export const metadata: Metadata = {
  title: 'Project Intake · Studio 925',
  robots: { index: false, follow: false },
};

export default function IntakePage() {
  return <IntakeForm />;
}
