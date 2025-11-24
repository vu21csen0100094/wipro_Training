// Service → handles business logic / data
exports.getAll = async () => {
  // Dummy data for now
  return [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "Node.js" }
  ];
};
