export default function AdminHome() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: 240, background: '#111', color: '#fff', padding: 20 }}>
        <h2>Admin</h2>
        <ul>
          <li>Dashboard</li>
          <li>Articles</li>
          <li>Users</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main style={{ flex: 1, padding: 20 }}>
        <h1>Dashboard</h1>
        <p>Welcome to SaaS Admin Panel</p>
      </main>
    </div>
  );
}
