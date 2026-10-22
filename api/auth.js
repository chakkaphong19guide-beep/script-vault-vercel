export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });
  const { password } = req.body;

  if (password === '0632527308gui') {
    return res.status(200).json({ success: true, token: 'admin-secret-token' });
  }
  return res.status(401).json({ success: false, message: 'Invalid password' });
}
