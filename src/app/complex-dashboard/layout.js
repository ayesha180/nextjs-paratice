'use client'

export default function ComplexDashboard({ children, users, revenue, notifications, login }) {
  const isLoggedIn =  false; // Use the 'login' prop to determine if the user is logged in, or default to 'true'

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    <div>Please log in to view the content.</div> // This will show if the user is not logged in
  );
}


