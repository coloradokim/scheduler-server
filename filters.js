function findById(hobbiesArray, id) {
  return hobbiesArray.filter((hobby) => {
    return hobby.id == id;
  })[0];
}

module.exports = {
  findById
};
