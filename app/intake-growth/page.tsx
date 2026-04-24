import type { Metadata } from 'next';
import IntakeForm from '../intake/IntakeForm';

export const metadata: Metadata = {
  title: 'Project Intake · Growth · Studio 925',
  robots: { index: false, follow: false },
};

export default function IntakeGrowthPage() {
  return <IntakeForm lockedPackage="growth" />;
}
