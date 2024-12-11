
import Card from '../../../../components/card'; // Update the path if necessary
import Link from 'next/link';

export default function ArchivedNotifications() {
  return (
    <Card>
      Notifications
      <Link href="/complex-dashboard/"> default</Link>
    </Card>
  );
}
