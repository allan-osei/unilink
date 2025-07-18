const supabase = require('../services/supabaseClient');

// Create Internship
const createInternship = async (req, res) => {
  const { title, location, skills, description } = req.body;

  const { data, error } = await supabase
    .from('internships')
    .insert([{ title, location, skills, description }]);

  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

// Get All Internships
const getAllInternships = async (req, res) => {
  const { data, error } = await supabase.from('internships').select('*');

  if (error) return res.status(500).json({ error: error.message });
  res.status(200).json(data);
};

// Get Internship by ID
const getInternshipById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('internships')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return res.status(404).json({ error: error.message });
  res.status(200).json(data);
};

// Update Internship
const updateInternship = async (req, res) => {
  const { id } = req.params;
  const { title, location, skills, description } = req.body;

  const { data, error } = await supabase
    .from('internships')
    .update({ title, location, skills, description })
    .eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
};

// Delete Internship
const deleteInternship = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase.from('internships').delete().eq('id', id);

  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
};

module.exports = {
  createInternship,
  getAllInternships,
  getInternshipById,
  updateInternship,
  deleteInternship,
};
