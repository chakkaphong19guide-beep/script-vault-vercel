let scripts = [
  { id: '1', title: 'ตัวอย่างสคริปต์', code: 'print("Script Vault Ready!")' }
];

export default function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    return res.status(200).json(scripts);
  }

  const token = req.headers.authorization;
  if (token !== 'admin-secret-token') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  if (method === 'POST') {
    const { title, code } = req.body;
    const newScript = { id: Date.now().toString(), title, code };
    scripts.unshift(newScript);
    return res.status(200).json(newScript);
  }

  if (method === 'DELETE') {
    const { id } = req.body;
    scripts = scripts.filter(s => s.id !== id);
    return res.status(200).json({ success: true });
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
