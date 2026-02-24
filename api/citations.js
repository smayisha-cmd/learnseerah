export default function handler(req, res) {
  const database = {
    "Q96:1-5": {
      source: "Qur'an 96:1-5",
      arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
      grading: "Mutawatir"
    }
  };

  const { ref } = req.query;

  if (!database[ref]) {
    return res.status(404).json({ error: "Reference not found" });
  }

  res.status(200).json(database[ref]);
}
