import type { Metadata } from 'next';
import IntakeForm from '../intake/IntakeForm';

export const metadata: Metadata = {
  title: 'Project Intake · Foundation · Studio 925',
  robots: { index: false, follow: false },
};

export default function IntakeFoundationPage() {
  return <IntakeForm lockedPackage="foundation" />;
}
