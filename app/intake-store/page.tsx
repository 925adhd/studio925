import type { Metadata } from 'next';
import IntakeForm from '../intake/IntakeForm';

export const metadata: Metadata = {
  title: 'Project Intake · Online Store · Studio 925',
  robots: { index: false, follow: false },
};

export default function IntakeStorePage() {
  return <IntakeForm lockedPackage="store" />;
}
