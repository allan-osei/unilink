const supabase = require('../services/supabaseClient');

const signUpUser = async (req, res) => {
  const { email, password } = req.body;

  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json({ user });
};

module.exports = { signUpUser };
